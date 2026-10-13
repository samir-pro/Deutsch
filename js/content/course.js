/* ============================================================================
 * Auf Deutsch! — course skeleton. The levels themselves live in
 * js/content/a0.js … c2.js and register themselves with COURSE.levels.push().
 *
 * Each level has 30 themed LESSON steps + 1 EXAM step (step 31) that validates
 * the level and unlocks the next one.
 *
 * Data model per lesson:
 *   {
 *     title:    short lesson title,
 *     tip:      a grammar / usage / culture note (HTML allowed),
 *     vocab:    [ [german, english], ... ],
 *     examples: [ [german sentence, english sentence, wordToBlank], ... ]
 *   }
 *
 * Conventions the exercise engine relies on:
 *   - Nouns carry their article: "der Bahnhof", "die Miete", "das Konto".
 *     These feed the der/die/das drills. Mark plural-only nouns with "(pl.)"
 *     in the English side so they are skipped by the gender drill.
 *   - "/" separates accepted alternatives: "der Fahrschein / das Ticket".
 *   - Text in (parentheses) is a note and is ignored when checking typing.
 *   - wordToBlank must appear in the sentence as a whole word.
 *
 * Run `node tools/validate.js` after editing to check all of the above.
 * ========================================================================== */

const COURSE = { levels: [] };

/* Number of lesson steps + 1 validation exam = total steps per level */
const STEPS_PER_LEVEL = 31;
const PASS_THRESHOLD = 0.8; // 80% needed to pass the validation exam

window.COURSE = COURSE;
window.STEPS_PER_LEVEL = STEPS_PER_LEVEL;
window.PASS_THRESHOLD = PASS_THRESHOLD;
