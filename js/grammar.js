/* ============================================================================
 * Grammar reference — compact cheat sheets, always open.
 *
 * Data model per topic:  { level, title, html }
 * The html uses <table class="gtable"> for tables and the g-der / g-die /
 * g-das classes to colour noun genders consistently with the lessons.
 * ========================================================================== */

const GRAMMAR = [
  {
    level: "A0", title: "Noun genders: der, die, das",
    html: `
<p>Every noun has a gender and is written with a capital letter. Learn each noun <b>with</b> its article. Colours used throughout the app:
<span class="g-der">der</span> masculine · <span class="g-die">die</span> feminine · <span class="g-das">das</span> neuter.</p>
<table class="gtable">
<tr><th>Usually <span class="g-der">der</span></th><th>Usually <span class="g-die">die</span></th><th>Usually <span class="g-das">das</span></th></tr>
<tr><td>days, months, seasons</td><td>-ung, -heit, -keit</td><td>-chen, -lein</td></tr>
<tr><td>-er (person), -ling, -ismus</td><td>-ion, -tät, -ik, -ur</td><td>-ment, -um</td></tr>
<tr><td>car brands, weather words</td><td>most nouns in -e</td><td>verbs used as nouns (das Essen)</td></tr>
</table>
<p class="muted small">Compound nouns take the gender of the <b>last</b> part: das Haus + <span class="g-der">der</span> Schlüssel → <span class="g-der">der</span> Hausschlüssel. The plural article is always <b>die</b>.</p>`
  },
  {
    level: "A1", title: "Present tense",
    html: `
<table class="gtable">
<tr><th></th><th>wohnen</th><th>arbeiten</th><th>sein</th><th>haben</th><th>werden</th></tr>
<tr><td>ich</td><td>wohn<b>e</b></td><td>arbeit<b>e</b></td><td>bin</td><td>habe</td><td>werde</td></tr>
<tr><td>du</td><td>wohn<b>st</b></td><td>arbeit<b>est</b></td><td>bist</td><td>hast</td><td>wirst</td></tr>
<tr><td>er/sie/es</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td><td>ist</td><td>hat</td><td>wird</td></tr>
<tr><td>wir</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td><td>sind</td><td>haben</td><td>werden</td></tr>
<tr><td>ihr</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td><td>seid</td><td>habt</td><td>werdet</td></tr>
<tr><td>sie/Sie</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td><td>sind</td><td>haben</td><td>werden</td></tr>
</table>
<p>Many strong verbs change their vowel in the <b>du</b> and <b>er/sie/es</b> forms: <i>fahren → du fährst</i>, <i>sprechen → du sprichst</i>, <i>sehen → er sieht</i>, <i>nehmen → er nimmt</i>.</p>`
  },
  {
    level: "A1", title: "Word order",
    html: `
<table class="gtable">
<tr><th>Type</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Statement</td><td>X · <b>verb</b> · …</td><td>Heute <b>gehe</b> ich ins Kino.</td></tr>
<tr><td>W-question</td><td>W-word · <b>verb</b> · …</td><td>Wann <b>kommst</b> du?</td></tr>
<tr><td>Yes/no question</td><td><b>verb</b> · subject · …</td><td><b>Kommst</b> du mit?</td></tr>
<tr><td>Modal / Perfekt</td><td>… <b>verb</b> … <b>infinitive / participle</b></td><td>Ich <b>muss</b> heute <b>arbeiten</b>.</td></tr>
<tr><td>Separable verb</td><td>… <b>verb</b> … <b>prefix</b></td><td>Ich <b>rufe</b> dich morgen <b>an</b>.</td></tr>
<tr><td>Subordinate clause</td><td>conjunction … <b>verb</b></td><td>…, weil ich krank <b>bin</b>.</td></tr>
</table>
<p>In the middle field the rough order is <b>Te-Ka-Mo-Lo</b>: time – cause – manner – place: <i>Ich fahre <u>morgen</u> <u>wegen der Prüfung</u> <u>mit dem Zug</u> <u>nach Köln</u>.</i></p>`
  },
  {
    level: "A1", title: "Articles in the four cases",
    html: `
<table class="gtable">
<tr><th></th><th><span class="g-der">masc.</span></th><th><span class="g-die">fem.</span></th><th><span class="g-das">neut.</span></th><th>plural</th></tr>
<tr><td>Nominative</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / keine</td></tr>
<tr><td>Accusative</td><td><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die / keine</td></tr>
<tr><td>Dative</td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den / keinen</b> + -n</td></tr>
<tr><td>Genitive</td><td><b>des / eines</b> + -(e)s</td><td><b>der / einer</b></td><td><b>des / eines</b> + -(e)s</td><td><b>der / keiner</b></td></tr>
</table>
<p><b>kein</b> and the possessives (<i>mein, dein, sein, ihr, unser, euer, Ihr</i>) take the same endings as <b>ein</b>.</p>`
  },
  {
    level: "A1", title: "Personal pronouns",
    html: `
<table class="gtable">
<tr><th>Nom.</th><th>Acc.</th><th>Dat.</th><th>Possessive</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td><td>mein</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td><td>dein</td></tr>
<tr><td>er</td><td>ihn</td><td>ihm</td><td>sein</td></tr>
<tr><td>sie</td><td>sie</td><td>ihr</td><td>ihr</td></tr>
<tr><td>es</td><td>es</td><td>ihm</td><td>sein</td></tr>
<tr><td>wir</td><td>uns</td><td>uns</td><td>unser</td></tr>
<tr><td>ihr</td><td>euch</td><td>euch</td><td>euer</td></tr>
<tr><td>sie / Sie</td><td>sie / Sie</td><td>ihnen / Ihnen</td><td>ihr / Ihr</td></tr>
</table>`
  },
  {
    level: "A1", title: "Modal verbs",
    html: `
<table class="gtable">
<tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>sollen</th><th>möchten</th></tr>
<tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
<tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>darfst</td><td>sollst</td><td>möchtest</td></tr>
<tr><td>er/sie/es</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
<tr><td>wir/sie/Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>sollen</td><td>möchten</td></tr>
<tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>dürft</td><td>sollt</td><td>möchtet</td></tr>
</table>
<p>The main verb goes to the end as an infinitive: <i>Ich <b>kann</b> heute nicht <b>kommen</b>.</i> Careful: <b>nicht müssen</b> = not have to; <b>nicht dürfen</b> = must not.</p>`
  },
  {
    level: "A2", title: "Prepositions and their cases",
    html: `
<table class="gtable">
<tr><th>Case</th><th>Prepositions</th></tr>
<tr><td>Accusative</td><td>durch, für, gegen, ohne, um, bis, entlang</td></tr>
<tr><td>Dative</td><td>aus, bei, mit, nach, seit, von, zu, gegenüber, ab</td></tr>
<tr><td>Two-way<br><span class="muted small">wohin? → Acc. · wo? → Dat.</span></td><td>an, auf, hinter, in, neben, über, unter, vor, zwischen</td></tr>
<tr><td>Genitive</td><td>wegen, während, trotz, statt, innerhalb, außerhalb</td></tr>
</table>
<p>Contractions: <i>an dem → am, in dem → im, zu dem → zum, zu der → zur, in das → ins, bei dem → beim, von dem → vom</i>.</p>`
  },
  {
    level: "A2", title: "The Perfekt",
    html: `
<p><b>haben / sein</b> (position 2) + <b>past participle</b> (end).</p>
<table class="gtable">
<tr><th>Verb type</th><th>Participle</th><th>Examples</th></tr>
<tr><td>regular</td><td>ge- … -t</td><td>machen → gemacht, kaufen → gekauft</td></tr>
<tr><td>irregular</td><td>ge- … -en (often vowel change)</td><td>sehen → gesehen, trinken → getrunken</td></tr>
<tr><td>separable</td><td>prefix + ge + …</td><td>einkaufen → eingekauft, anrufen → angerufen</td></tr>
<tr><td>be-, ver-, er-, ent-, zer-, -ieren</td><td>no ge-</td><td>bezahlen → bezahlt, studieren → studiert</td></tr>
</table>
<p>Use <b>sein</b> with movement from A to B and change of state (<i>gehen, fahren, kommen, fliegen, aufstehen, einschlafen, werden, sterben</i>) plus <i>sein, bleiben, passieren</i>. Everything else takes <b>haben</b>.</p>`
  },
  {
    level: "A2", title: "Common irregular verbs",
    html: `
<table class="gtable">
<tr><th>Infinitive</th><th>Präteritum</th><th>Perfekt</th></tr>
<tr><td>sein</td><td>war</td><td>ist gewesen</td></tr>
<tr><td>haben</td><td>hatte</td><td>hat gehabt</td></tr>
<tr><td>werden</td><td>wurde</td><td>ist geworden</td></tr>
<tr><td>gehen</td><td>ging</td><td>ist gegangen</td></tr>
<tr><td>kommen</td><td>kam</td><td>ist gekommen</td></tr>
<tr><td>fahren</td><td>fuhr</td><td>ist gefahren</td></tr>
<tr><td>essen</td><td>aß</td><td>hat gegessen</td></tr>
<tr><td>trinken</td><td>trank</td><td>hat getrunken</td></tr>
<tr><td>sehen</td><td>sah</td><td>hat gesehen</td></tr>
<tr><td>nehmen</td><td>nahm</td><td>hat genommen</td></tr>
<tr><td>sprechen</td><td>sprach</td><td>hat gesprochen</td></tr>
<tr><td>schreiben</td><td>schrieb</td><td>hat geschrieben</td></tr>
<tr><td>finden</td><td>fand</td><td>hat gefunden</td></tr>
<tr><td>bringen</td><td>brachte</td><td>hat gebracht</td></tr>
<tr><td>denken</td><td>dachte</td><td>hat gedacht</td></tr>
<tr><td>wissen</td><td>wusste</td><td>hat gewusst</td></tr>
</table>`
  },
  {
    level: "A2", title: "Adjective endings",
    html: `
<p><b>1 · After der/die/das</b> (and dieser, jeder, welcher): <b>-e</b> or <b>-en</b>.</p>
<table class="gtable">
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr>
<tr><td>Nom.</td><td>der neu<b>e</b></td><td>die neu<b>e</b></td><td>das neu<b>e</b></td><td>die neu<b>en</b></td></tr>
<tr><td>Acc.</td><td>den neu<b>en</b></td><td>die neu<b>e</b></td><td>das neu<b>e</b></td><td>die neu<b>en</b></td></tr>
<tr><td>Dat.</td><td>dem neu<b>en</b></td><td>der neu<b>en</b></td><td>dem neu<b>en</b></td><td>den neu<b>en</b></td></tr>
</table>
<p><b>2 · After ein/kein/mein</b>: the adjective shows the gender where ein can't.</p>
<table class="gtable">
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr>
<tr><td>Nom.</td><td>ein neu<b>er</b></td><td>eine neu<b>e</b></td><td>ein neu<b>es</b></td><td>keine neu<b>en</b></td></tr>
<tr><td>Acc.</td><td>einen neu<b>en</b></td><td>eine neu<b>e</b></td><td>ein neu<b>es</b></td><td>keine neu<b>en</b></td></tr>
<tr><td>Dat.</td><td>einem neu<b>en</b></td><td>einer neu<b>en</b></td><td>einem neu<b>en</b></td><td>keinen neu<b>en</b></td></tr>
</table>
<p><b>3 · No article</b>: the adjective takes the article's ending: <i>heiß<b>er</b> Kaffee, kalt<b>e</b> Milch, frisch<b>es</b> Brot, mit frisch<b>em</b> Brot</i>.</p>`
  },
  {
    level: "B1", title: "Connectors and word order",
    html: `
<table class="gtable">
<tr><th>Verb position</th><th>Connectors</th></tr>
<tr><td><b>Position 0</b> (no effect)</td><td>und, aber, oder, denn, sondern</td></tr>
<tr><td><b>Verb at the end</b></td><td>weil, dass, wenn, ob, als, obwohl, damit, während, bevor, nachdem, seitdem, bis, sodass, indem</td></tr>
<tr><td><b>Verb straight after</b> (adverbs)</td><td>deshalb, deswegen, trotzdem, außerdem, dann, danach, sonst, also</td></tr>
</table>
<p><i>Ich bleibe zu Hause, <b>weil</b> ich krank <u>bin</u>.</i> · <i>Ich bin krank, <b>deshalb</b> <u>bleibe</u> ich zu Hause.</i> · <i>Ich bleibe zu Hause, <b>denn</b> ich <u>bin</u> krank.</i></p>`
  },
  {
    level: "B1", title: "Konjunktiv II",
    html: `
<table class="gtable">
<tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>können</th><th>müssen</th></tr>
<tr><td>ich</td><td>wäre</td><td>hätte</td><td>würde</td><td>könnte</td><td>müsste</td></tr>
<tr><td>du</td><td>wärst</td><td>hättest</td><td>würdest</td><td>könntest</td><td>müsstest</td></tr>
<tr><td>er/sie/es</td><td>wäre</td><td>hätte</td><td>würde</td><td>könnte</td><td>müsste</td></tr>
<tr><td>wir/sie/Sie</td><td>wären</td><td>hätten</td><td>würden</td><td>könnten</td><td>müssten</td></tr>
</table>
<p>Other verbs: <b>würde + infinitive</b>. Past: <b>hätte/wäre + participle</b> — <i>Ich <b>hätte</b> das <b>gemacht</b>.</i> Uses: wishes (<i>Wenn ich doch Zeit hätte!</i>), conditions, polite requests (<i>Könnten Sie…?</i>), advice (<i>Du solltest…</i>).</p>`
  },
  {
    level: "B1", title: "The passive",
    html: `
<table class="gtable">
<tr><th>Tense</th><th>Form</th><th>Example</th></tr>
<tr><td>Present</td><td>werden + participle</td><td>Das Paket <b>wird</b> heute <b>geliefert</b>.</td></tr>
<tr><td>Präteritum</td><td>wurde + participle</td><td>Das Haus <b>wurde</b> 1900 <b>gebaut</b>.</td></tr>
<tr><td>Perfekt</td><td>ist + participle + worden</td><td>Der Antrag <b>ist genehmigt worden</b>.</td></tr>
<tr><td>With a modal</td><td>modal + participle + werden</td><td>Das <b>muss</b> sofort <b>repariert werden</b>.</td></tr>
<tr><td>State (Zustand)</td><td>sein + participle</td><td>Die Tür <b>ist geschlossen</b>.</td></tr>
</table>
<p>The agent: <b>von</b> + dative (<i>von der Stadt</i>); the means: <b>durch</b> + accusative.</p>`
  },
  {
    level: "B1", title: "Relative pronouns",
    html: `
<table class="gtable">
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr>
<tr><td>Nom.</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Acc.</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat.</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
<tr><td>Gen.</td><td><b>dessen</b></td><td><b>deren</b></td><td><b>dessen</b></td><td><b>deren</b></td></tr>
</table>
<p>Gender and number come from the noun it refers to; the case comes from its role in the relative clause: <i>Der Mann, <b>dem</b> ich geholfen habe, …</i></p>`
  },
  {
    level: "B2", title: "Konjunktiv I (reported speech)",
    html: `
<table class="gtable">
<tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>können</th><th>kommen</th></tr>
<tr><td>er/sie/es</td><td>sei</td><td>habe</td><td>werde</td><td>könne</td><td>komme</td></tr>
<tr><td>sie (pl.)</td><td>seien</td><td><i>hätten</i></td><td><i>würden</i></td><td><i>könnten</i></td><td><i>kämen</i></td></tr>
</table>
<p>Used in news and formal writing to report what someone said without vouching for it: <i>Die Ministerin sagte, sie <b>sei</b> zufrieden.</i> When Konjunktiv I looks the same as the indicative, Konjunktiv II replaces it (shown in italics).</p>`
  },
  {
    level: "B2", title: "Verbs with fixed prepositions",
    html: `
<table class="gtable">
<tr><th>Verb</th><th>Meaning</th></tr>
<tr><td>sich freuen <b>auf</b> + A</td><td>to look forward to</td></tr>
<tr><td>sich freuen <b>über</b> + A</td><td>to be pleased about</td></tr>
<tr><td>warten <b>auf</b> + A</td><td>to wait for</td></tr>
<tr><td>denken <b>an</b> + A</td><td>to think of</td></tr>
<tr><td>sich interessieren <b>für</b> + A</td><td>to be interested in</td></tr>
<tr><td>sich kümmern <b>um</b> + A</td><td>to take care of</td></tr>
<tr><td>teilnehmen <b>an</b> + D</td><td>to take part in</td></tr>
<tr><td>abhängen <b>von</b> + D</td><td>to depend on</td></tr>
<tr><td>sich beschweren <b>über</b> + A</td><td>to complain about</td></tr>
<tr><td>Angst haben <b>vor</b> + D</td><td>to be afraid of</td></tr>
</table>
<p>Questions and references use <b>wo(r)-</b> / <b>da(r)-</b> for things: <i>Worauf wartest du? — Darauf, dass der Bus kommt.</i> For people use preposition + pronoun: <i>Auf wen wartest du? — Auf ihn.</i></p>`
  }
];

window.GRAMMAR = GRAMMAR;
