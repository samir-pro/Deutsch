/* ============================================================================
 * Exercises — generates varied exercise sequences from lesson data, and checks
 * typed / spoken German forgivingly.
 *
 * Exercise types:
 *   flashcard  introduce a word (with gender colour + audio)
 *   choice     multiple choice, German → English or English → German
 *   listening  hear German, choose the meaning
 *   match      match German words to English (pairs)
 *   article    der, die or das?
 *   fill       fill the blank in an example sentence
 *   translate  type the German for an English prompt
 *   build      put word tiles in the right order (German word order!)
 *   dictation  hear a sentence and type it            (needs text-to-speech)
 *   speak      read a sentence aloud, checked by ASR  (needs speech recognition)
 *
 * The mixture shifts by level: lower levels lean on recognition, upper levels
 * on production (typing, building, dictation).
 * ========================================================================== */

const Exercises = (() => {
  const rand = (n) => Math.floor(Math.random() * n);
  const shuffle = (a) => {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // ---- vocabulary helpers ----------------------------------------------------
  const NOUN = /^(der|die|das) (\p{Lu}[\p{L}-]*)$/u;
  // A noun usable for the der/die/das drill: single noun, article, not plural.
  function nounParts(v) {
    const m = NOUN.exec(v[0]);
    if (!m || /\(pl\.\)/.test(v[1])) return null;
    return { article: m[1], noun: m[2] };
  }
  const wordCount = (s) => s.trim().split(/\s+/).length;
  const kindOf = (v) => (NOUN.test(v[0]) ? "noun" : wordCount(v[0]) >= 3 ? "phrase" : "word");

  let INDEX = null;
  // German text → { de, en, levelId, step } for every vocab item in the course.
  function index() {
    if (INDEX) return INDEX;
    INDEX = new Map();
    COURSE.levels.forEach((lv) => lv.lessons.forEach((l, i) => l.vocab.forEach((v) => {
      if (!INDEX.has(v[0])) INDEX.set(v[0], { de: v[0], en: v[1], levelId: lv.id, step: i + 1 });
    })));
    return INDEX;
  }

  function levelVocabPool(level) {
    const pool = [];
    level.lessons.forEach((l) => l.vocab.forEach((v) => pool.push(v)));
    return pool;
  }

  // Plausible wrong answers: same kind of item first (nouns with nouns,
  // phrases with phrases), never anything that shares the German or English.
  function distractors(pool, v, field, n = 3) {
    const bad = (x) => normalize(x[0]) === normalize(v[0]) || normalize(x[1]) === normalize(v[1]);
    const k = kindOf(v);
    const same = shuffle(pool.filter((x) => !bad(x) && kindOf(x) === k));
    const other = shuffle(pool.filter((x) => !bad(x) && kindOf(x) !== k));
    const out = [];
    for (const x of [...same, ...other]) {
      const val = x[field];
      if (!out.includes(val)) out.push(val);
      if (out.length === n) break;
    }
    return out;
  }

  const choiceDeEn = (pool, v) => ({ type: "choice", mode: "de-en", prompt: v[0], answer: v[1], word: v[0],
    options: shuffle([v[1], ...distractors(pool, v, 1)]) });
  const choiceEnDe = (pool, v) => ({ type: "choice", mode: "en-de", prompt: v[1], answer: v[0], word: v[0],
    options: shuffle([v[0], ...distractors(pool, v, 0)]) });
  const listening = (pool, v) => ({ type: "listening", de: v[0], answer: v[1], word: v[0],
    options: shuffle([v[1], ...distractors(pool, v, 1)]) });
  const translate = (v) => ({ type: "translate", de: v[0], en: v[1], word: v[0] });
  const article = (v) => { const p = nounParts(v); return p && { type: "article", ...p, en: v[1], word: v[0] }; };

  // ---- sentence helpers ------------------------------------------------------
  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function blankOut(sentence, word) {
    const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRe(word)}(?=$|[^\\p{L}\\p{N}])`, "u");
    return sentence.replace(re, (m, pre) => pre + "____");
  }
  const tokens = (s) => s.replace(/[.,!?;:„“"”…–—]/g, " ").split(/\s+/).filter(Boolean);

  function fill(ex) {
    const [de, en, blank] = ex;
    if (!blank) return null;
    const sentence = blankOut(de, blank);
    if (sentence === de) return null;
    return { type: "fill", sentence, translation: en, answer: blank, full: de };
  }

  function build(ex, extraPool, level) {
    const words = tokens(ex[0]);
    if (words.length < 3 || words.length > 14) return null;
    const tiles = words.slice();
    // From B1 on, add one decoy tile so it can't be solved by elimination.
    if (["B1", "B2", "C1", "C2"].includes(level.id)) {
      const decoys = shuffle(extraPool.flatMap((e) => tokens(e[0])).filter((w) => !words.some((x) => x.toLowerCase() === w.toLowerCase())));
      if (decoys[0]) tiles.push(decoys[0]);
    }
    let order = shuffle(tiles);
    // Don't hand out the answer already in order.
    if (order.slice(0, words.length).join(" ") === words.join(" ")) order = order.slice().reverse();
    return { type: "build", de: ex[0], en: ex[1], answer: words, tiles: order };
  }

  // How heavily to favour production exercises (0..1) per level.
  const PRODUCTION_WEIGHT = { A0: 0.05, A1: 0.15, A2: 0.3, B1: 0.45, B2: 0.55, C1: 0.65, C2: 0.75 };
  const usesDictation = (level) => !["A0", "A1"].includes(level.id);

  /* Build the exercise list for a normal lesson step.
   * opts: { audio: bool (TTS available), speaking: bool (ASR on) } */
  function buildLesson(level, lesson, opts = {}) {
    const pool = levelVocabPool(level);
    const prod = PRODUCTION_WEIGHT[level.id] ?? 0.3;
    const items = [];

    // 1) Flashcards introduce every word first.
    lesson.vocab.forEach((v) => items.push({ type: "flashcard", de: v[0], en: v[1] }));

    // 2) Matching to reinforce the set.
    const pairs = shuffle(lesson.vocab).slice(0, Math.min(5, lesson.vocab.length));
    if (pairs.length >= 3) items.push({ type: "match", pairs: pairs.map((v) => ({ de: v[0], en: v[1] })) });

    // 3) Word practice, mixed.
    const practice = [];
    shuffle(lesson.vocab).forEach((v, i) => {
      if (Math.random() < prod) practice.push(translate(v));
      else if (i % 2 === 0 || !opts.audio) practice.push(choiceDeEn(pool, v));
      else practice.push(listening(pool, v));
    });
    shuffle(lesson.vocab).map(article).filter(Boolean).slice(0, 3).forEach((a) => practice.push(a));
    shuffle(lesson.vocab).slice(0, 2).forEach((v) => practice.push(choiceEnDe(pool, v)));
    items.push(...shuffle(practice));

    // 4) Sentence work at the end, once the words are fresh.
    const ex = lesson.examples || [];
    const sentences = [];
    ex.map(fill).filter(Boolean).forEach((f) => sentences.push(f));
    const others = level.lessons.flatMap((l) => l.examples || []);
    shuffle(ex).map((e) => build(e, others, level)).filter(Boolean).slice(0, 2).forEach((b) => sentences.push(b));
    if (opts.audio && usesDictation(level) && ex.length) {
      const e = ex[rand(ex.length)];
      sentences.push({ type: "dictation", de: e[0], en: e[1] });
    }
    if (opts.speaking && ex.length) {
      const e = ex[rand(ex.length)];
      sentences.push({ type: "speak", de: e[0], en: e[1] });
    }
    items.push(...shuffle(sentences));
    return items;
  }

  /* Build the validation exam (step 31): mixed questions across the whole level. */
  function buildExam(level, opts = {}, count = 20) {
    const pool = levelVocabPool(level);
    const prod = (PRODUCTION_WEIGHT[level.id] ?? 0.3) + 0.1;
    const exam = shuffle(pool).slice(0, Math.min(count, pool.length)).map((v, i) => {
      const a = i % 5 === 4 ? article(v) : null;
      if (a) return a;
      if (Math.random() < prod) return translate(v);
      if (i % 3 === 0 && opts.audio) return listening(pool, v);
      if (i % 3 === 1) return choiceDeEn(pool, v);
      return choiceEnDe(pool, v);
    });

    const allExamples = level.lessons.flatMap((l) => l.examples || []);
    shuffle(allExamples).map(fill).filter(Boolean).slice(0, 4).forEach((f) => exam.push(f));
    shuffle(allExamples).map((e) => build(e, allExamples, level)).filter(Boolean).slice(0, 2).forEach((b) => exam.push(b));
    if (opts.audio && usesDictation(level)) {
      const e = allExamples[rand(allExamples.length)];
      exam.push({ type: "dictation", de: e[0], en: e[1] });
    }
    return shuffle(exam);
  }

  /* Build a review session from a list of German vocab items (SRS / weak words). */
  function buildReview(words, opts = {}, max = 15) {
    const idx = index();
    const entries = words.map((w) => idx.get(w)).filter(Boolean).slice(0, max);
    if (!entries.length) return [];
    // Distractors come from the levels the words belong to.
    const levels = new Set(entries.map((e) => e.levelId));
    const pool = COURSE.levels.filter((l) => levels.has(l.id)).flatMap(levelVocabPool);
    return shuffle(entries.map((e, i) => {
      const v = [e.de, e.en];
      const options = [translate, (x) => choiceDeEn(pool, x), (x) => choiceEnDe(pool, x)];
      if (opts.audio) options.push((x) => listening(pool, x));
      if (nounParts(v) && i % 2 === 0) return article(v);
      return options[rand(options.length)](v);
    }));
  }

  // ---- answer checking -------------------------------------------------------
  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .replace(/\([^)]*\)/g, " ")          // drop notes like "(formal)"
      .replace(/[.,!?;:'"„“”‚‘’…–—-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  const fold = (x) => x.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  const bare = (x) => x.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");
  const ART = /^(der|die|das) /;

  function variants(answer) {
    const parts = answer.split("/").map(normalize).filter(Boolean);
    return [normalize(answer), ...parts];
  }

  function levenshtein(a, b) {
    if (Math.abs(a.length - b.length) > 3) return 99;
    const row = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return row[b.length];
  }

  /* Compare typed German with the expected answer.
   * Returns "exact", "umlaut" (ä/ö/ü/ß typed as a/ae…), "article" (noun right,
   * article missing), "typo" (one small slip in a longer answer) or false. */
  function checkTypedDetail(input, answer, opts = {}) {
    const a = normalize(input);
    if (!a) return false;
    const vs = variants(answer);
    if (vs.includes(a)) return "exact";
    const umlautMatch = (v) => /[äöüß]/.test(v) && (fold(v) === fold(a) || bare(v) === bare(a));
    if (vs.some(umlautMatch)) return "umlaut";
    // Right noun, article left out ("Tisch" for "der Tisch"): accepted with a reminder.
    if (!ART.test(a) && vs.some((v) => ART.test(v) && (v.replace(ART, "") === a || umlautMatch(v.replace(ART, ""))))) return "article";
    // One slip per ~12 characters, and only for answers long enough that a
    // single wrong letter can't turn one real word into another.
    // Off for fill-in-the-blank, where one letter is usually the grammar point.
    if (opts.typos !== false && vs.some((v) => v.length >= 8 && levenshtein(fold(v), fold(a)) <= Math.max(1, Math.floor(v.length / 12)))) return "typo";
    return false;
  }

  /* How close a spoken transcript is to the target sentence (0..1),
   * by the longest run of matching words in order. */
  function similarity(said, target) {
    const s = bare(normalize(said)).split(" ").filter(Boolean);
    const t = bare(normalize(target)).split(" ").filter(Boolean);
    if (!t.length) return 0;
    const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(0));
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= t.length; j++) {
        dp[i][j] = s[i - 1] === t[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp[s.length][t.length] / Math.max(t.length, s.length);
  }

  return {
    buildLesson, buildExam, buildReview, checkTypedDetail, similarity,
    normalize, shuffle, nounParts, index, tokens
  };
})();

window.Exercises = Exercises;
