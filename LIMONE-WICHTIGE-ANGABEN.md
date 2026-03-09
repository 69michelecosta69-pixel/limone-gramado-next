# Limone Gramado – Wichtige Angaben

Stand: 2026-03-07

## 1) Schnellzugriff
- Website: https://www.limonegramado.com.br
- Vercel Projekt: https://vercel.com/69michelecosta69-6315s-projects/limone-gramado-next
- Registro.br DNS Panel: https://registro.br/painel/dominios/?dominio=limonegramado.com.br
- Zoho Mail Inbox: https://mail.zoho.eu/zm/#mail/folder/inbox

## 2) Domain/DNS (nicht loeschen)
- A
  - Host: limonegramado.com.br
  - Wert: 76.76.21.21
- CNAME
  - Host: www.limonegramado.com.br
  - Wert: 2eb9f8478247ce85.vercel-dns-017.com

## 3) Mail DNS
- MX
  - Prioritaet 10 -> mx.zoho.eu
  - Prioritaet 20 -> mx2.zoho.eu
  - Prioritaet 50 -> mx3.zoho.eu
- SPF (TXT @)
  - v=spf1 include:zohomail.eu ~all
- DKIM (TXT)
  - Host: zmail._domainkey
  - Wert: Zoho DKIM Schluessel (lang)
- DMARC (TXT)
  - Host: _dmarc
  - Wert: v=DMARC1; p=none; rua=mailto:info@limonegramado.com.br; adkim=s; aspf=s; pct=100

## 4) Wichtige E-Mail Daten
- Hauptadresse: info@limonegramado.com.br
- Zoho Absendername: Limone Gramado
- FormSubmit Token Action:
  - https://formsubmit.co/32f3485ad8208f3fe295002ef1f321a2

## 5) Website-Dateien (wichtig)
- Kontaktformular:
  - C:\Users\69mic\Downloads\limone-gramado-next\components\ContactSection.tsx
- Erfolgsseite Kontakt:
  - C:\Users\69mic\Downloads\limone-gramado-next\app\contato\page.tsx
- Story Startseite:
  - C:\Users\69mic\Downloads\limone-gramado-next\components\StorySection.tsx
- Story Unterseite:
  - C:\Users\69mic\Downloads\limone-gramado-next\app\historia\page.tsx
- SEO/OG Metadata:
  - C:\Users\69mic\Downloads\limone-gramado-next\app\layout.tsx
- Strukturierte Daten (Telefon etc.):
  - C:\Users\69mic\Downloads\limone-gramado-next\app\page.tsx

## 6) OG/Social Vorschau
- OG Bild Datei:
  - C:\Users\69mic\Downloads\limone-gramado-next\public\assets\og-limone-1200x630.jpg
- Testlink fuer neue Vorschau:
  - https://www.limonegramado.com.br/?v=3

## 7) Git/Deploy Kurzablauf
1. In Projektordner gehen:
   - cd C:\Users\69mic\Downloads\limone-gramado-next
2. Aenderungen committen:
   - git add .
   - git commit -m "update"
   - git push origin main
3. Vercel Deployment pruefen und danach Seite mit Strg+F5 neu laden.

## 8) Offene Firmendaten (spater einsetzen)
- CNPJ final
- Vollstaendige Adresse
- Optional getrennte Business-Nummer

## 9) Wenn etwas nicht funktioniert
- Formular sendet nicht:
  - Pruefe ContactSection.tsx Action URL + FormSubmit Aktivierungsmail
- Mail landet nicht:
  - Pruefe MX/SPF/DKIM/DMARC in Registro.br
- Falsche Vorschau in WhatsApp:
  - Link mit Query senden (z. B. ?v=4)
- Aenderung nicht live:
  - Vercel letzter Deploy auf main + Browser Hard Reload

