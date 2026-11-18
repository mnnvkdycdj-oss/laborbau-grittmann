# Rechtlicher Bereich – Stand und Prüfliste vor Veröffentlichung

Stand: 1. November 2026. Die neuen Rechtstexte bleiben Entwürfe und sind nicht zur Veröffentlichung freigegeben.

## Erledigt: Quellenabgleich und technische Vorbereitung

- [x] Bisheriges Impressum, Datenschutzerklärung und Original-AGB-PDF erfolgreich abgerufen und gelesen. Die frühere Netzwerkblockade ist behoben.
- [x] Originale im PR-Branch archiviert; Abrufzeiten und SHA-256-Prüfsummen dokumentiert. AGB-PDF vollständig und bytegleich gesichert; kein Klauseltext verändert.
- [x] Anschrift, Uwe/Claudia Grittmann als Vertretung laut Quelle, HRA 332650, USt-ID DE 186768455, Telefax und unveränderte Kontaktangaben ins Impressum übernommen.
- [x] „Amtsgericht Heidelberg“ ausschließlich als Bestandsangabe mit ausdrücklichem Prüfvermerk dokumentiert; kein anderes Gericht erfunden.
- [x] Datenschutzerklärung abschnittsweise abgeglichen; Anschrift, Betroffenenrechte, TLS- und Werbewiderspruchshinweise berücksichtigt. Neue Kontakt-/Hostingtechnik beschrieben.
- [x] Google Maps/reCAPTCHA aus den Aussagen über eingesetzte Dienste herausgehalten: keine Einbindung im neuen Website-Code. Die zuvor externe Google-Fonts-Einbindung wurde im PR-Branch durch Systemschriftarten ersetzt.
- [x] AGB-Seite verlinkt die lokale unveränderte PDF und zusätzlich die Originalquelle; Bestandsfassung sichtbar als prüfpflichtig gekennzeichnet.
- [x] Statische Rechtslinks auf allen HTML-Seiten; Rechtstexte auch ohne JavaScript erreichbar. Neue Rechtsseiten nutzen ausschließlich lokale CSS/Systemschriften.

Details, vollständiger Abschnittsvergleich und Originalnachweise: [docs/recht/QUELLENABGLEICH.md](docs/recht/QUELLENABGLEICH.md).

## Noch offen: Angaben und fachliche/rechtliche Freigabe

- [ ] **Aktueller Registerauszug:** Firma, Sitz, Anschrift, Vertretung, HRA 332650 und insbesondere heutiges zuständiges Registergericht amtlich abgleichen. Der Alttext nennt „Amtsgericht Heidelberg“; das ist keine aktuelle amtliche Bestätigung.
- [ ] **Persönlich haftende Gesellschafterin:** Firma, Sitz, Registergericht, Registernummer und vertretungsberechtigte Geschäftsführung ergänzen. Im Alt-Impressum fehlen diese gesonderten Angaben. Nicht aus den Teamdaten ableiten.
- [ ] **Unternehmensbestätigung:** Aktualität von Anschrift, Vertretung, Telefax und USt-ID DE 186768455 bestätigen. Die Websitequelle allein belegt nicht deren heutige Gültigkeit.
- [ ] **Weitere Pflichtangaben:** Vollständigkeit nach § 5 DDG und gegebenenfalls § 18 Abs. 2 MStV prüfen. Erklärung zur Nichtteilnahme an Verbraucherschlichtung aus der Quelle aktuell bestätigen; §§ 36, 37 VSBG prüfen. Eingestellte EU-OS-Plattform nicht wieder als aktiven Dienst verlinken.
- [ ] **Datenschutzbeauftragter:** Klären, ob benannt beziehungsweise erforderlich; gegebenenfalls Kontaktdaten ergänzen. In der alten Erklärung ist kein Beauftragter benannt.
- [ ] **GitHub Pages:** Tatsächlichen Produktivhost, zuständige Vertragsgesellschaft, Rollenverteilung, gegebenenfalls Vereinbarung nach Art. 28 DSGVO, Datenkategorien, Log-Speicherfristen, Unterauftragnehmer und Drittlandtransfers bestätigen. Konkrete Garantien/Angemessenheitsgrundlage nur mit zutreffenden aktuellen Nachweisen angeben. Die offizielle Dokumentation bestätigt Besucher-IP-Protokollierung, aber nicht die hier noch offenen Betriebsdetails.
- [ ] **HTTPS:** Erzwingung, Zertifikat und etwaige eigene Domain für die neue Website bestätigen. Die bisherige Website- oder Cloud-Umgebungskonfiguration ersetzt diese Prüfung nicht.
- [x] **Externe Google Fonts entfernt:** `styles.css` verwendet statt DM Sans/Manrope lokale Systemschriftarten; der externe Google-Fonts-Import ist entfernt und die Datenschutzerklärung angepasst. Vor Freigabe alle tatsächlich ausgelieferten Seiten und Netzwerkaufrufe im Browser nochmals prüfen.
- [ ] **E-Mail-Verarbeitung:** Tatsächliche Mailanbieter, Empfänger, Drittlandbezüge, Zuständigkeiten und konkrete Lösch-/Aufbewahrungsfristen bestätigen. Rechtsgrundlagen für den Betriebsablauf prüfen. Telefon bleibt freiwillig, Name/E-Mail/Nachricht sind im Formular erforderlich.
- [ ] **Bestands-AGB:** Aktuell verwendete Fassung, Fassungsdatum/etwaige weitere Anlagen, Kundengruppen und wirksame Einbeziehung bestätigen. Insbesondere Lieferverzug, Gefahrübergang, Eigentumsvorbehalt, Gewährleistung/Haftung und Gerichtsstand rechtlich prüfen; Verbraucherinformationen gegebenenfalls gesondert ergänzen. Kein eindeutiges Fassungsdatum im sichtbaren PDF-Text; Uploadpfad ist kein Nachweis.
- [ ] **Bild- und Urheberrechte:** Lizenzen, Bildnachweise, Mitarbeiter-/Projektfreigaben und Referenznennungen für die tatsächlich verwendeten Bilder bestätigen. Alte Nennungen Istockphoto und FLYINGFOX CREATIONS / Reinhard Wedemeyer sind kein pauschaler Rechtenachweis für die neue Website. Bestehende Bilder bleiben unverändert.
- [ ] **Endfreigabe:** Prüfhervorhebungen erst nach Klärung ersetzen. Entwurfsbanner und `noindex, nofollow` vor gewünschter Veröffentlichung bewusst prüfen; `noindex` ist keine Zugriffssperre. Keine Veröffentlichung ohne ausdrückliche Freigabe.

## Technisch festgestellter Stand

Statische HTML/CSS/JavaScript-Website; GitHub Pages als Zielhosting vorgesehen. Kontaktformulare erzeugen `mailto:`-Links ohne Formularserver. Telefonnummer und aktuelle Produktauswahl gehen in den Entwurf; Versand erfolgt im E-Mail-Programm. Sieben Produktbereiche, kein Checkout oder Zahlungsdienst. Lokale/eingebettete Bilder, Galerie, Bildvergrößerung und vier Laborbilder bleiben erhalten. Im geprüften Code keine Analyse-/Werbetracker, Karten, Video-Plugins, Social-Media-Plugins, CAPTCHA, Anwendungscookies oder Nutzung von Local-/Session-Storage festgestellt. Hosting- und Schriftartenverarbeitung sind davon getrennt zu beurteilen.

## Originalquellen

- https://laborbau-grittmann.de/impressum/
- https://laborbau-grittmann.de/datenschutzerklaerung/
- https://laborbau-grittmann.de/wp-content/uploads/2015/05/ALLGEMEINE-GESCH%C3%84FTS-u.-LIEFERBEDINGUNGEN.pdf
