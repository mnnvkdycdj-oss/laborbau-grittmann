# Quellenabgleich und Änderungen an den Rechtstexten

Stand: 1. November 2026. Technischer und redaktioneller Vergleich, keine rechtliche Freigabe. Nur im Branch `review/website-kontaktformulare` für PR #1.

## Abruf und Sicherung

Alle drei vom Unternehmen angegebenen Quellen wurden erfolgreich über HTTPS abgerufen. Die genaue Quelle, Abrufzeit und SHA-256-Prüfsumme stehen in [abrufnachweis.json](quellen/abrufnachweis.json). Die alten HTML-Seiten sind unverändert als Textdateien gesichert; sie werden nicht als aktive WordPress-Seiten eingebunden. Zusätzlich existieren extrahierte Lesefassungen. Maßgeblich für den Originalinhalt sind die gespeicherten Originaldateien, nicht die Textextraktion.

- [Impressum – Original-HTML als Text](quellen/impressum-original.html.txt)
- [Datenschutz – Original-HTML als Text](quellen/datenschutz-original.html.txt)
- [AGB – unveränderte Original-PDF](../../dokumente/agb-bestandsfassung.pdf)

Die AGB-PDF ist eine Seite lang und enthält 13 nummerierte Abschnitte. Die heruntergeladene und die eingecheckte Datei sind bytegleich. Der sichtbare Text weist kein eindeutiges Fassungsdatum aus. Die PDF-Metadaten nennen den 16. September 2014 als Erstellungs- und Änderungsdatum; dies belegt keine aktuell freigegebene Vertragsfassung. Das Upload-Verzeichnis `2015/05` wurde ebenfalls nicht als Fassungsdatum ausgegeben. Neue Vertragsklauseln wurden nicht erstellt.

## Impressum: vollständig aus der Quelle übernehmbare Angaben

| Angabe | Bestandsquelle / Übernahme | Noch zu prüfen |
| --- | --- | --- |
| Firma | A. Grittmann GmbH & Co. KG | Aktuelle Registerfirma bestätigen |
| Anschrift | Friedrich-Schott-Straße 4, 69123 Heidelberg | Aktuellen Sitz / ladungsfähige Anschrift bestätigen |
| Telefon | 06221 7495-0; bisherige Darstellung der neuen Website `06221 74 95-0` beibehalten | Keine Nummernänderung |
| Telefax | 06221 707429 | Weiterhin gültig? |
| E-Mail | info@laborbau-grittmann.de | Unverändert |
| Vertretung | Uwe Grittmann, Claudia Grittmann | Aktuelle Befugnisse und gesellschaftsrechtliche Vertretungskette nachweisen |
| Handelsregisternummer | HRA 332650 | Aktuellen Auszug abgleichen |
| Registergericht | Amtsgericht Heidelberg, ausdrücklich nur **laut Alt-Impressum** | Heutige Zuständigkeit amtlich prüfen; kein Ersatzgericht geraten |
| USt-ID | DE 186768455 | Gültigkeit / Zuordnung bestätigen |
| Schlichtung | Nicht bereit oder verpflichtet laut Alt-Impressum | Als heutige Unternehmenserklärung bestätigen; §§ 36, 37 VSBG prüfen |

**In der Quelle nicht gesondert vorhanden:** Firma/Sitz/Registerdaten der persönlich haftenden Gesellschafterin und deren vertretungsberechtigte Geschäftsführung. Diese Angaben bleiben offen. Aus Namen im Team wird keine zusätzliche Register- oder Vertretungsangabe abgeleitet.

| Weitere Bestandsabschnitte | Behandlung im Entwurf |
| --- | --- |
| Verweis auf § 5 TMG / §§ 7–10 TMG | Nicht ungeprüft fortgeschrieben; heutige Pflichtprüfung nach DDG gekennzeichnet |
| OS-Plattform-Link | Nicht fortgeführt: EU-OS-Plattform eingestellt; keine als aktiv dargestellte Verlinkung |
| Haftung für Inhalte / Links | Auf allgemeine Verantwortlichkeit und Meldung möglicher Rechtsverletzungen beschränkt; keine unbelegte Behauptung einer Prüfung aller Fremdinhalte |
| Urheberrecht | Rechtehinweis erhalten; konkrete Nutzungsrechte und Nachweise bleiben prüfpflichtig |
| Gestaltung FLYINGFOX CREATIONS / Reinhard Wedemeyer; Bildmaterial Istockphoto | Als Bestandsnennungen dokumentiert; keine unbelegte Zuordnung zu allen neuen Bildern oder zur neuen Gestaltung |

## Datenschutzerklärung: vollständiger Abschnittsvergleich

| Bestandsabschnitt | Umsetzung für die neue Website |
| --- | --- |
| Datenschutz auf einen Blick / allgemeine Hinweise | Beschreibung der tatsächlichen Verarbeitungen: Seitenabruf, Hosting, Schriften und Kontaktanfragen |
| Verantwortliche Stelle | Firma, vollständige Anschrift, Telefon und E-Mail aus der Quelle ergänzt |
| Widerruf der Einwilligung | Betroffenenrechte einschließlich Widerruf und Wirkung für die Zukunft erhalten |
| Beschwerderecht | Erhalten und um verlinkte Landesaufsicht Baden-Württemberg ergänzt; Recht aus Art. 77 DSGVO bleibt weiter gefasst |
| Datenübertragbarkeit | Erhalten, unter gesetzlichen Voraussetzungen |
| SSL/TLS | Auf Browser–Website-Verbindung eingegrenzt; keine Garantie für absolute Sicherheit oder dadurch verschlüsselte E-Mail; Produktivkonfiguration noch zu prüfen |
| Auskunft, Sperrung, Löschung | Als Auskunft, Berichtigung, Löschung und Einschränkung nach heutigen DSGVO-Begriffen erhalten; Unentgeltlichkeit mit gesetzlichen Ausnahmen |
| Widerspruch gegen Werbe-Mails | Erhalten |
| Server-Log-Dateien | Auf GitHub Pages abgestimmt; bestätigte Dokumentation zur IP-Protokollierung für Sicherheit; weitere tatsächliche Daten und Fristen bleiben zu bestätigen |
| Art. 6 Abs. 1 lit. f als angebliche Vertragsgrundlage | Fehler berichtigt: Vertrag/Vorvertrag lit. b, berechtigtes Interesse lit. f |
| Keine Zusammenführung mit anderen Datenquellen | Nicht ungeprüft für GitHub zugesichert |
| Google reCAPTCHA | Nicht als eingesetzter Dienst übernommen: im neuen Code nicht eingebunden |
| Google Maps | Nicht als eingesetzter Dienst übernommen: im neuen Code nicht eingebunden |
| Google Web Fonts | Der ursprüngliche externe CSS-Import wurde im PR-Branch durch Systemschriftarten ersetzt. Die Datenschutzerklärung wurde entsprechend aktualisiert; vor Freigabe Netzwerkprüfung der veröffentlichten Seiten durchführen |
| Kontaktformulare / Produktauswahl | Für neue Technik ergänzt: `mailto:` statt Formularserver, freiwillige Telefonnummer, Pflichtfelder und ausgewählte Produktbereiche |
| Datenempfänger / Löschung / Drittlandtransfers | Nicht geraten; konkrete Host-/Mailkonfiguration und Nachweise weiterhin offen |
| Automatisierte Entscheidungen / Cookies / Tracking | Auf geprüften neuen Website-Code begrenzt; keine Analyse-, Karten-, Video-, CAPTCHA- oder Zahlungseinbindung festgestellt |

## Rechtsquellen und Anbieterinformationen

Erreichbar geprüft wurden die verlinkten GitHub-Pages- und GitHub-Datenschutzdokumente, Google-Fonts-/Google-Datenschutzhinweise, die Website der Landesaufsicht, das Registerportal und § 5 DDG. GitHub bestätigt in der Pages-Dokumentation die Speicherung von Besucher-IP-Adressen für Sicherheitszwecke. Daraus werden keine konkrete Speicherfrist, örtlicher Speicherort oder automatisch passende Vertragsgrundlage für dieses Unternehmen abgeleitet. Die Google-Fonts-Informationsseite leitet zu `fonts.google.com/faq#privacy` weiter. Erreichbarkeit ist keine rechtliche Freigabe oder Zusicherung sämtlicher Anbieterangaben.

Die frühere Datenschutzerklärung belegt keine konkreten E-Mail-Anbieter, AV-Verträge, Speicherfristen oder Drittlandgarantien für die neue Website. Die noch offenen Aufgaben stehen in [RECHTLICHE-PRUEFLISTE.md](../../RECHTLICHE-PRUEFLISTE.md).
