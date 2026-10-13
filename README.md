# Auf Deutsch! 🇩🇪: learn German from A0 to C2 (through English)

A self-contained web app for learning German **from absolute zero to mastery**.
It's built around the words, phrases and grammar people actually use every day in
Germany, with a strong focus on **settling in and managing daily life as an
international student**: Anmeldung, residence permit, bank account and Sperrkonto,
health insurance, WG rooms and rental contracts, Deutschlandticket, university
admin, student jobs, recycling and Pfand, and German etiquette.

Each level has **31 steps**: 30 themed lessons plus a **validation exam (step 31)**.
Passing the exam unlocks the next level.

No backend, no login, no build step. Everything runs in the browser, and progress is
saved locally so you can close the tab and carry on later. It also works **offline**
and can be installed to your home screen.

## Use it online

GitHub Pages publishes the app with `.github/workflows/pages.yml` on every push:

**https://samir-pro.github.io/Deutsch/**

One-time setup in the repository: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
(GitHub Pages on a private repository needs a paid GitHub plan; on a free plan, make the repository public.)

## Run it locally

It's plain HTML/CSS/JS. Serve the folder (so the offline service worker can register) and open it:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's inside

| Area | Detail |
|------|--------|
| **Levels** | A0 (absolute zero), A1, A2, B1, B2, C1, C2 |
| **Per level** | 30 themed lessons + 1 validation exam = 31 steps |
| **Total** | 217 steps, ~1,700 words & phrases, ~700 nouns with gender, 630 example sentences, a grammar/culture tip on every lesson |
| **10 exercise types** | flashcards · multiple choice (both directions) · listening · matching · **der/die/das** · fill-in-the-blank · type-to-translate · **sentence builder** (word-order tiles) · **dictation** · **speaking** (speech recognition) |
| **Gender colours** | der blue · die red · das green, used everywhere a noun appears, so genders stick visually |
| **Forgiving checking** | `ae/oe/ue/ss` or missing umlauts, a missing article (`Tisch` for `der Tisch`) and small typos in long answers are accepted with a gentle note showing the exact form |
| **German keyboard** | On-screen `ä ö ü ß` keys |
| **Audio** | German text-to-speech (`de-DE`) via the Web Speech API: best-quality voice picked automatically, voice chooser, **🐢 slow replay**, adjustable speed (0.5×–1.5×) |
| **Spaced repetition** | Every word you practise goes into Leitner boxes (1 → 30 days). **Daily review**, **tricky words** and **quick practice** sessions |
| **Daily goal** | XP goal (10/20/30/50), progress ring, 7-day activity chart, day streak, ★ ratings per step |
| **Grammar reference** | 16 cheat sheets: genders, cases, pronouns, present tense, modal verbs, word order, prepositions, Perfekt, irregular verbs, adjective endings, connectors, Konjunktiv I & II, passive, relative pronouns, verbs + prepositions |
| **Dictionary** | Every word in the course, searchable in German or English, filter by level, with audio and learning status |
| **Life in Germany guide** | Always-open survival guide in 13 sections: emergencies, Anmeldung, visa & residence permit, university, housing, banking, health insurance, transport, shopping & Sundays, phone & fees, student jobs, recycling, etiquette. Tips + key phrases with audio |
| **Review past answers** | **← Previous / Next →** in every lesson and exam to look back at answered questions (read-only) |
| **Keyboard** | `1`–`4` choose, `Enter` checks/continues, `←` `→` step through answered questions |
| **Themes & offline** | Light / medium / dark themes, installable PWA with offline cache |

### Level overview

- **A0 · Absolute Zero**: German sounds (ä ö ü ß, ei/ie, ch, sch, w/v/z), greetings, Sie vs du, numbers, time, bakery, café, supermarket, paying, transport, signs, emergencies (112/110).
- **A1 · Beginner**: sein/haben, present tense, verb-second word order, questions, nicht/kein/doch, accusative, plurals, modal and separable verbs, WG rooms, tickets, train station, university basics, post & Packstation.
- **A2 · Elementary**: Perfekt and Präteritum, dative, two-way prepositions, reflexive verbs, weil/dass/wenn, bank account, Anmeldung, residence permit, health insurance, pharmacy, Pfand, Sunday rest, student jobs, applications.
- **B1 · Intermediate**: Konjunktiv II, polite requests, opinions, relative clauses, passive, genitive, zu-infinitive, formal emails, writing to professors, Hausarbeit & Referat, exam registration, rental contracts, repairs, contracts & cancelling, colloquial and regional German.
- **B2 · Upper-Intermediate**: Nominalstil, Behördendeutsch, tenant rights, taxes, employment contracts, social security, debate, Konjunktiv I, idioms, proverbs, modal particles, false friends, recent history.
- **C1 · Advanced**: academic writing and thesis, citing, business and legal German, register shifts, youth slang, Austrian and Swiss German, dialects, participle phrases, prefix verbs, settling long-term (Niederlassungserlaubnis, Einbürgerung).
- **C2 · Mastery**: literary and archaic German, Goethe & Schiller, historical sayings, legal precision, escalating with authorities (Widerspruch), fine shades of meaning, irony, poetry, GDR vocabulary, spelling & punctuation, rhetoric, untranslatable words.

## How progress works

Progress is stored in the browser via **`localStorage`** under the key `aufdeutsch.progress.v1`:

- Close the browser and come back: your progress is still there, and **Continue** takes you to your next step.
- Future steps stay locked until you finish the previous one. Locked lessons can still be opened in **preview** mode, but those scores aren't saved.
- **Test out**: pass any level's exam, even while the level is locked, to validate it and every level before it.
- **Export / Import** under *Settings* (file or clipboard) lets you back up your progress or move it to another device.

## Project structure

```
index.html              App shell
manifest.webmanifest    Installable app (PWA) metadata
sw.js                   Service worker — offline cache
css/styles.css          Mobile-first UI, light / medium / dark themes
js/content/course.js    Course skeleton + data conventions
js/content/a0.js … c2.js  One file per level (lessons → vocab / examples)
js/guide.js             "Life in Germany" survival guide
js/grammar.js           Grammar cheat sheets
js/exercises.js         Builds exercise sequences; forgiving German answer checking
js/storage.js           localStorage progress, unlocking, streaks, daily goal, SRS, backup
js/audio.js             German text-to-speech + speech recognition
js/sounds.js            Synthesized feedback sounds
js/app.js               Hash routing, screens & lesson player
tools/validate.js       Content checks (also run in CI)
```

## Adding or editing content

Content is data-driven. To add words to a lesson, edit the level's file in `js/content/`:

```js
{
  title: "At the Bakery",
  tip: "The <b>Bäckerei</b> is a German institution…",
  vocab: [ ["das Brötchen", "bread roll"], ["Ich nehme …", "I'll take …"] ],
  examples: [ ["Ich nehme zwei Brötchen.", "I'll take two rolls.", "Brötchen"] ] // 3rd = word to blank
}
```

- Write nouns **with their article** (`der Bahnhof`); they automatically feed the der/die/das drill and gender colours. Mark plural-only nouns with `(pl.)` in the English.
- Use `/` for accepted alternatives (`"der Arzt / die Ärztin"`); text in parentheses is a note and is ignored when checking typed answers.
- Example sentences also become sentence-builder, dictation and speaking exercises.

Then run the validator:

```bash
node tools/validate.js
```

If you add a new script file, list it in `index.html` **and** in `sw.js` (the validator checks both).

> Practical rules (residence permits, insurance, fees, work limits) change over time. The guide points you to the right office, but always confirm with your university's international office or the relevant authority.
