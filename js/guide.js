/* ============================================================================
 * Life in Germany — a practical survival guide for international students.
 *
 * Always open (never locked). Each section has short practical tips plus key
 * phrases with audio. Rules, fees and limits change, so the tips point to the
 * office that has the final word rather than quoting amounts or deadlines.
 *
 * Data model per section:
 *   { icon, title, tips: [html, ...], phrases: [ [german, english], ... ] }
 * ========================================================================== */

const GUIDE = [
  {
    icon: "🆘", title: "Emergencies",
    tips: [
      "<b>112</b> — fire brigade and ambulance. Free from any phone, EU-wide; operators can usually switch to English.",
      "<b>110</b> — police.",
      "<b>116 117</b> — the medical on-call service (<i>ärztlicher Bereitschaftsdienst</i>) for urgent but non-life-threatening illness at night, at weekends and on holidays.",
      "Pharmacies (<b>Apotheke</b>, red A sign) take turns doing night duty (<b>Notdienst</b>); the nearest one is posted on every pharmacy door.",
      "Save the number of your university's international office and of your consulate in your phone."
    ],
    phrases: [["Hilfe!","Help!"],["Rufen Sie bitte einen Krankenwagen!","Please call an ambulance!"],["Ich habe mich verlaufen.","I'm lost."],["Mein Handy wurde gestohlen.","My phone was stolen."],["Wo ist das nächste Krankenhaus?","Where is the nearest hospital?"],["Ich bin allergisch gegen Penicillin.","I'm allergic to penicillin."],["Es ist ein Notfall.","It's an emergency."]]
  },
  {
    icon: "🏛️", title: "Anmeldung (Registering Your Address)",
    tips: [
      "Everyone who moves into a flat must register at the <b>Bürgeramt / Einwohnermeldeamt</b>, normally within <b>two weeks</b>.",
      "Bring your passport and the <b>Wohnungsgeberbestätigung</b> — a form your landlord (or main tenant) signs to confirm you moved in.",
      "You receive a <b>Meldebescheinigung</b>. You'll need it for the bank, the residence permit, your tax ID and more — keep copies.",
      "Appointments in big cities can be booked out: check the online booking system early in the morning, when new slots are released.",
      "Your <b>Steuer-ID</b> (tax ID) is sent by post a few weeks after you register. Put your name on the letterbox!"
    ],
    phrases: [["Ich möchte mich anmelden.","I'd like to register my address."],["Ich habe einen Termin um zehn Uhr.","I have an appointment at ten."],["Hier ist die Wohnungsgeberbestätigung.","Here is the landlord's confirmation."],["Brauche ich noch weitere Unterlagen?","Do I need any other documents?"],["Könnte ich eine Kopie bekommen?","Could I get a copy?"],["Ich ziehe um. Muss ich mich ummelden?","I'm moving. Do I need to update my registration?"]]
  },
  {
    icon: "🪪", title: "Visa & Residence Permit",
    tips: [
      "Non-EU students usually enter with a national visa and then apply for an <b>Aufenthaltserlaubnis zum Studium</b> (residence permit for study) at the local <b>Ausländerbehörde</b>.",
      "Apply <i>before</i> your visa expires. If your appointment is after the expiry date, ask for a <b>Fiktionsbescheinigung</b> — it confirms you may stay while your application is processed.",
      "Typical documents: passport, biometric photo, Meldebescheinigung, enrolment certificate (<b>Immatrikulationsbescheinigung</b>), proof of health insurance and proof of funds (often a <b>Sperrkonto</b>). The official list on your city's website is what counts.",
      "Non-EU students may work a limited number of days per year alongside their studies; student-assistant jobs at the university have separate rules. Check the conditions printed on your permit.",
      "EU/EEA and Swiss citizens don't need a permit — just the Anmeldung."
    ],
    phrases: [["Ich möchte meine Aufenthaltserlaubnis verlängern.","I'd like to extend my residence permit."],["Mein Visum läuft bald ab.","My visa expires soon."],["Welche Unterlagen muss ich mitbringen?","Which documents do I need to bring?"],["Ich brauche eine Fiktionsbescheinigung.","I need a provisional residence certificate."],["Wie lange dauert die Bearbeitung?","How long does processing take?"],["Spricht hier jemand Englisch?","Does anyone here speak English?"]]
  },
  {
    icon: "🎓", title: "University Life",
    tips: [
      "The <b>Studierendensekretariat</b> handles enrolment and re-registration; the <b>Prüfungsamt</b> handles exams; the <b>International Office</b> helps with everything else.",
      "Each semester you re-register (<b>Rückmeldung</b>) by paying the <b>Semesterbeitrag</b>. It often includes a public-transport ticket.",
      "Register for exams online by the deadline — missing it usually means waiting a whole semester.",
      "<b>c.t.</b> (cum tempore) means the class starts 15 minutes after the hour; <b>s.t.</b> (sine tempore) means exactly on time.",
      "Professors are addressed as <b>Frau/Herr Professor(in) + surname</b>. Use office hours (<b>Sprechstunde</b>) for questions.",
      "The <b>Studierendenwerk</b> runs the Mensa, dorms (<b>Wohnheime</b>), counselling and BAföG/financial advice."
    ],
    phrases: [["Ich brauche eine Immatrikulationsbescheinigung.","I need an enrolment certificate."],["Wo ist das Prüfungsamt?","Where is the examinations office?"],["Wann ist Ihre Sprechstunde?","When are your office hours?"],["Ich habe die Anmeldefrist verpasst.","I missed the registration deadline."],["Gibt es noch freie Plätze im Seminar?","Are there still places in the seminar?"],["Wo kann ich meinen Studierendenausweis abholen?","Where can I pick up my student ID?"]]
  },
  {
    icon: "🏠", title: "Housing",
    tips: [
      "Start early. Options: student dorms (<b>Wohnheim</b>, apply via the Studierendenwerk), shared flats (<b>WG</b> — WG-Gesucht is the main site) or your own flat.",
      "Never pay a deposit or rent before viewing the flat and signing a contract — rental scams are common.",
      "<b>Kaltmiete</b> excludes utilities; <b>Warmmiete</b> includes heating and water. Electricity and internet are often separate.",
      "The <b>Kaution</b> (deposit) is legally capped at three months' cold rent and is returned after you move out, minus justified costs.",
      "Document the flat's condition at move-in (<b>Übergabeprotokoll</b>) with photos.",
      "Air the flat several times a day for a few minutes (<b>Stoßlüften</b>) to prevent mould."
    ],
    phrases: [["Ist das Zimmer noch frei?","Is the room still available?"],["Wann kann ich die Wohnung besichtigen?","When can I view the flat?"],["Sind die Nebenkosten inklusive?","Are utilities included?"],["Wie hoch ist die Kaution?","How much is the deposit?"],["Kann ich mich dort anmelden?","Can I register my address there?"],["Die Heizung ist kaputt.","The heating is broken."]]
  },
  {
    icon: "🏦", title: "Banking & Money",
    tips: [
      "Open a <b>Girokonto</b> (current account) — online banks are quick; traditional banks have branches. Many offer free student accounts.",
      "Germany still uses a lot of <b>cash</b>. Carry some — small bakeries, cafés and market stalls may not take cards.",
      "Rent, salary and bills are paid by bank transfer (<b>Überweisung</b>) or direct debit (<b>Lastschrift</b>). A standing order is a <b>Dauerauftrag</b>.",
      "Landlords may ask for a <b>SCHUFA</b> credit report. Pay bills on time and avoid unpaid contracts to keep it clean.",
      "With a <b>Sperrkonto</b>, a fixed monthly amount is released to your normal account."
    ],
    phrases: [["Ich möchte ein Girokonto eröffnen.","I'd like to open a current account."],["Kann ich mit Karte zahlen?","Can I pay by card?"],["Wo ist der nächste Geldautomat?","Where is the nearest cash machine?"],["Ich möchte einen Dauerauftrag einrichten.","I'd like to set up a standing order."],["Meine Karte wurde gesperrt.","My card has been blocked."],["Wie ist Ihre IBAN?","What is your IBAN?"]]
  },
  {
    icon: "🩺", title: "Health & Insurance",
    tips: [
      "Health insurance is compulsory. Most students join a public insurer (<b>gesetzliche Krankenkasse</b>) at the student rate; it sends the university an electronic confirmation.",
      "Find a GP (<b>Hausarzt/Hausärztin</b>) and book appointments by phone or online (e.g. Doctolib). Bring your insurance card (<b>Versichertenkarte</b>).",
      "For specialists you may need a referral (<b>Überweisung</b>) from your GP.",
      "If you're ill, you can get a sick note (<b>Krankschreibung</b>) — needed for work and for missed exams (check your Prüfungsamt's rules).",
      "Dental check-ups twice a year are covered; get your <b>Bonusheft</b> stamped.",
      "Mental health: the Studierendenwerk's psychological counselling is free and confidential."
    ],
    phrases: [["Ich hätte gern einen Termin.","I'd like an appointment."],["Ich bin gesetzlich versichert.","I have public health insurance."],["Ich habe seit drei Tagen Fieber.","I've had a fever for three days."],["Ich brauche eine Krankschreibung.","I need a sick note."],["Brauche ich eine Überweisung?","Do I need a referral?"],["Ist das Medikament rezeptfrei?","Is this medicine available without a prescription?"]]
  },
  {
    icon: "🚆", title: "Transport",
    tips: [
      "Your <b>Semesterticket</b> or the national <b>Deutschlandticket</b> covers local and regional trains, buses, trams and the U-/S-Bahn — but not ICE/IC long-distance trains.",
      "Have a valid ticket <i>before</i> boarding. Riding without one (<b>Schwarzfahren</b>) costs a hefty fine.",
      "Long-distance: book early on the DB Navigator app for cheaper <b>Sparpreis</b> tickets. A <b>BahnCard</b> gives discounts.",
      "Delays of 60+ minutes entitle you to partial refunds (<b>Fahrgastrechte</b>) — claim in the app.",
      "Cycling is everywhere: use bike lanes, lights at night, and a strong lock. Fines apply for riding on pavements and through red lights."
    ],
    phrases: [["Gilt das Deutschlandticket in diesem Zug?","Is the Deutschlandticket valid on this train?"],["Von welchem Gleis fährt der Zug nach Hamburg?","Which platform does the train to Hamburg leave from?"],["Muss ich umsteigen?","Do I have to change?"],["Der Zug hat Verspätung.","The train is delayed."],["Wo kann ich ein Ticket kaufen?","Where can I buy a ticket?"],["Ist dieser Platz frei?","Is this seat free?"]]
  },
  {
    icon: "🛒", title: "Shopping & Sundays",
    tips: [
      "Shops are closed on <b>Sundays</b> and public holidays. Stock up on Saturday. Petrol stations and shops in big train stations stay open.",
      "Discount supermarkets (Aldi, Lidl, Netto, Penny) are cheapest. Bring your own bag.",
      "<b>Pfand</b>: return bottles and cans to the machine in the supermarket and get a voucher for the deposit.",
      "Toiletries, cosmetics and household goods are sold at <b>Drogerien</b> (dm, Rossmann); medicines, even painkillers, only at the <b>Apotheke</b>.",
      "At the checkout, cashiers are fast — have your bag and payment ready."
    ],
    phrases: [["Haben Sie das auch in einer anderen Größe?","Do you have this in another size?"],["Kann ich das umtauschen?","Can I exchange this?"],["Ich möchte das zurückgeben.","I'd like to return this."],["Den Bon, bitte.","The receipt, please."],["Wo ist der Pfandautomat?","Where is the bottle return machine?"],["Ist das im Angebot?","Is this on offer?"]]
  },
  {
    icon: "📱", title: "Phone, Internet & Fees",
    tips: [
      "Prepaid SIM cards are sold in supermarkets and drugstores but must be activated with ID verification (often a video call).",
      "Contracts (phone, internet, gym) often run 12–24 months and renew automatically. Note the cancellation deadline and cancel in writing.",
      "Every household pays the <b>Rundfunkbeitrag</b> (public broadcasting fee) — one payment per flat, so WG mates share it. Register or link to the existing account when you move in.",
      "Internet at home can take weeks to set up — ask whether the flat already has a connection."
    ],
    phrases: [["Ich möchte eine Prepaid-Karte kaufen.","I'd like to buy a prepaid SIM."],["Wie lange ist die Vertragslaufzeit?","How long is the contract term?"],["Ich möchte meinen Vertrag kündigen.","I'd like to cancel my contract."],["Wir sind eine WG und zahlen den Rundfunkbeitrag zusammen.","We're a shared flat and pay the broadcasting fee together."],["Das Internet funktioniert nicht.","The internet isn't working."]]
  },
  {
    icon: "💼", title: "Working as a Student",
    tips: [
      "Common jobs: <b>Minijob</b> (small earnings limit, few deductions), <b>Werkstudent</b> (up to about 20 hours a week during lectures) and <b>HiWi</b> (student assistant at the uni).",
      "There is a statutory <b>minimum wage</b> (<i>Mindestlohn</i>) — check the current rate.",
      "Always get a written contract and pay slips (<b>Gehaltsabrechnung</b>).",
      "Non-EU students: check the working limits printed on your residence permit before signing anything.",
      "Income tax may be deducted from your wages; filing a tax return (<b>Steuererklärung</b>, via ELSTER) can get it back."
    ],
    phrases: [["Ich suche einen Nebenjob.","I'm looking for a part-time job."],["Ist das brutto oder netto?","Is that gross or net?"],["Wie viele Stunden pro Woche?","How many hours a week?"],["Wann bekomme ich mein Gehalt?","When do I get paid?"],["Kann ich einen schriftlichen Vertrag bekommen?","Can I get a written contract?"]]
  },
  {
    icon: "♻️", title: "Rubbish & Recycling",
    tips: [
      "Sort your rubbish: <b>Gelbe Tonne/Gelber Sack</b> (plastic & metal packaging), <b>Papier</b> (blue bin), <b>Bio</b> (food waste, brown bin), <b>Restmüll</b> (everything else, grey/black bin).",
      "Glass goes to street bottle banks by colour (white, brown, green) — not on Sundays or at night (noise!).",
      "Bulky waste (<b>Sperrmüll</b>) must be booked with the city.",
      "Rules vary slightly by city — check the bin labels and your Hausordnung."
    ],
    phrases: [["In welche Tonne kommt das?","Which bin does this go in?"],["Wann wird der Müll abgeholt?","When is the rubbish collected?"],["Wo ist der Glascontainer?","Where is the bottle bank?"],["Ich muss Sperrmüll anmelden.","I need to book a bulky waste collection."]]
  },
  {
    icon: "🤝", title: "Culture & Etiquette",
    tips: [
      "Be <b>punctual</b>. If you'll be even five minutes late, send a message.",
      "Use <b>Sie</b> with strangers, officials and professors until <b>du</b> is offered. Among students, <i>du</i> is normal from the start.",
      "Shake hands when meeting in formal settings; look people in the eye when toasting (<b>Prost!</b>).",
      "<b>Quiet hours</b> (Ruhezeiten) and <b>Sunday rest</b> are taken seriously — no drilling or loud music.",
      "Don't wish someone happy birthday early — it's considered bad luck. Bring cake to work on <i>your</i> birthday!",
      "Germans can seem direct: it's about clarity, not rudeness. Small talk is lighter than in some cultures, but friendships run deep."
    ],
    phrases: [["Wollen wir uns duzen?","Shall we use 'du'?"],["Danke für die Einladung!","Thanks for the invitation!"],["Ich habe etwas mitgebracht.","I've brought something."],["Entschuldigung, ich komme zehn Minuten später.","Sorry, I'll be ten minutes late."],["Alles Gute zum Geburtstag!","Happy birthday!"],["Ich lerne noch Deutsch, bitte sprechen Sie langsam.","I'm still learning German, please speak slowly."]]
  }
];

window.GUIDE = GUIDE;
