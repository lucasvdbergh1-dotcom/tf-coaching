# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In progress — first design prototype

## Current Goal

- Recreate the reference design
  (`gymnastictemplate.webflow.io_home-pages_home-v1.png`)
  as a coded landing page for TF Coaching.

## Completed

- `index.html` — single-file static landing page recreating
  the reference screenshot: nav, hero, marquee, programs,
  story, trainers, testimonial, video banner, articles,
  Instagram grid, newsletter, footer. Dark theme
  (near-black `#0b0b0c`), red accent (`#e32720`),
  Anton display font + Archivo body font, Unsplash
  placeholder images, scroll-reveal animations.
- Personalized `index.html` with real content from
  https://www.thomfiddercoaching.com/ (Dutch): hero
  "Sterker. Fitter. Zelfverzekerder.", Thom's bio
  (26, Hulshorst, -56 kg eigen transformatie, 8+ jaar
  ervaring), 3 diensten, 4 "wat kun je verwachten"
  cards, Thom's philosophy quote (replaces invented
  client testimonial), "eerste sessie altijd gratis"
  CTA banner (replaces video section), fake blog
  articles removed, real contact info (mail, tel,
  adres, KVK 95025065) and socials (Instagram
  @thomfiddercoaching, TikTok @thom.fidder).

## In Progress

- None.

## Next Up

- Fill in the context files (project-overview, ui-context,
  architecture) — they are still blank templates.
- Replace Unsplash placeholders with real TF Coaching
  photos and copy.
- Decide on final stack (keep static HTML vs. migrate to a
  framework) before building further pages.

## Completed (continued)

- Added Thom's real photos from his Squarespace site,
  downloaded to `assets/`: `thom-home.jpg` (B&W portrait,
  now the hero background), `thom-overmij.png` (Thom
  coaching a client, now the Over mij image),
  `favicon.ico` (linked in head), plus `logo.png` /
  `logo-2.png` (triangle "Coaching" logo, not yet placed
  — black-on-white, needs a white/transparent version
  for the dark theme).

## Completed (session 2026-07-29, part 3)

- Hero rebuilt as split layout per the gymnastic template
  reference (`assets/refs/gymnastic-full.png`): solid black
  left with ghost outline word "COACHING" behind the
  heading, Thom's photo filling the right half, and a
  stats strip below (8+ jaar, -56 kg, 1e sessie gratis,
  100% persoonlijk plan) with red accent glyphs.
- Contact section rebuilt in Flexova style
  (`assets/refs/flexova-contact.png`): photo left with red
  mail/tel tags overlapping the edge, "Klaar om te
  starten?" heading, contact form (naam, e-mail, telefoon,
  doel-select, bericht) that composes a mailto to
  Info@thomfiddercoaching.com, followed by a red
  "Wacht niet tot 'ooit'" CTA band.
- Reference screenshots stored in `assets/refs/`.

## Completed (session 2026-07-29, part 15 — GitHub + hosting)

- Git-repo geïnitialiseerd (main), eerste commit, gepusht
  naar GitHub: https://github.com/lucasvdbergh1-dotcom/tf-coaching
  (public). GitHub Pages aangezet (main, root):
  https://lucasvdbergh1-dotcom.github.io/tf-coaching/
  .gitignore sluit node_modules/, assets/refs/ en losse
  Schermafbeelding*.png uit.

## Completed (session 2026-07-29, part 14 — niveaus-sectie (licht blok))

- Nieuwe sectie #niveaus toegevoegd onder Mijn aanpak,
  naar referentie "Schermafbeelding 2026-07-29 173131.png"
  (projectroot): licht crème contrastblok (#e9e7e0) met
  groene diamant-eyebrow "Trainingsimpact", donkere kop
  "Transformeer lichaam en geest", accordion met 3 niveaus
  (Nieuw met fitness / Kracht & conditie opbouwen /
  Presteren op topniveau — niveau 1 standaard open, één
  tegelijk open, aria-expanded), donkere gymfoto rechts
  (Unsplash-placeholder). Responsive: 1 kolom + foto 340px
  onder 960px. Na review omgezet van het lichte crème blok
  naar de donkere sitestijl (rgba(20,20,22,0.55) over de
  noise-textuur, witte kop, lichte dividers, muted
  bodytekst).

## Completed (session 2026-07-29, part 13 — definitieve accentkleur)

- Alle stappen kregen eerst uniform de 03-kleur (#0c5a2a);
  daarna is die kleur sitebreed als accent ingesteld en op
  verzoek één tint lichter gemaakt. DEFINITIEF:
  --accent-primary #0e6b32, --accent-hover #16a34a. De
  stappen verwijzen nu naar var(--accent-primary) (geen
  eigen kleuren meer). Afgeleide tinten: card-hoverborder
  rgba(14,107,50,0.55), insta-overlay rgba(14,107,50,0.82),
  tag-vouw #073a1e, contact-band em #063418.

## Completed (session 2026-07-29, part 12e — stap 04 volwaardig)

- Stap 04 kreeg alsnog een foto (Unsplash-placeholder) en
  een zichtbare doelkleur (#084a22, sluitstuk van de
  groene reeks i.p.v. donkergrijs), zodat de scroll-
  animatie er net zo zichtbaar is als bij stap 1-3.
  Weesregels (margin-left 40%, media display none)
  opgeruimd.

## Completed (session 2026-07-29, part 12d — stapnummers naar referentie)

- Stapnummers omgezet naar de referentie-look: Archivo 900
  (vet/rond, geen condensed Anton), 150px op desktop
  (96px/76px op kleinere schermen), vol wit, en aan de
  ONDERZIJDE afgesneden (container height 0.52em +
  overflow hidden — ronde bovenkanten zichtbaar, onderkant
  loopt weg achter de titel). Archivo weight 900
  toegevoegd aan de Google Fonts-link.

## Completed (session 2026-07-29, part 12c — stappen exact naar referentie)

- Stappensectie herbouwd na nauwkeurige herlezing van de
  referentie: kop links uitgelijnd met per regel vervagende
  kleuren (wit/grijs/donkergrijs), foto en gekleurd paneel
  flush als één rij (geen trap-insprong), witte verticale
  lijn op vaste x DOOR de panelen met het target-icoon als
  marker ín het paneel, enorme witte nummers die aan de
  bovenrand van het paneel worden afgesneden, witte knop
  alleen bij stap 1, en stap 4 zonder foto (paneel op
  panelen-x, donkergrijs) zoals de laatste stap in de
  referentie. Scroll-gedreven kleur- en foto-fade (--p)
  behouden. Mobiel: gestapeld, lijn/markers verborgen,
  0px overflow.

## Completed (session 2026-07-29, part 12b — scroll-gedreven kleur + foto's)

- Stappen-tijdlijn uitgebreid met het volledige Flexova-
  gedrag: elke stapkaart heeft nu een foto links (Unsplash-
  placeholder) en een eigen doelkleur (aflopend groen
  #16a34a / #107c39 / #0b5c2b, stap 4 donkergrijs #26262b
  zoals de grijze eindstap in de referentie). Scroll-
  gedreven via CSS-var --p per stap (JS scroll-listener):
  kaartkleur mengt van donker naar vol (::before-laag,
  opacity = --p) en de foto gaat van geshaded naar helder
  (brightness 0.25→1). Mobiel: foto boven tekst, insliden
  via translateY (translateX gaf 40px overflow), 0px
  overflow.

## Completed (session 2026-07-29, part 12 — aanpak als scroll-tijdlijn)

- "Mijn aanpak" omgebouwd naar de Flexova "Simple Steps"-stijl
  (referentie: "Schermafbeelding 2026-07-29 165211.png" in
  projectroot): verticale tijdlijn met de 4 SVG-iconen als
  knooppunten, kaarten met grote omlijnde nummers (01-04)
  die trapsgewijs inspringen op desktop. Scroll-animatie:
  kaarten schuiven één voor één in beeld
  (IntersectionObserver, threshold 0.4), knooppunten lichten
  groen op, en de tijdlijn vult zich groen mee met de
  scrollpositie (scroll-listener zet --steps-progress).
  Mobiel: geen insprong, compactere nodes, lijn op 21px,
  0px overflow.

## Completed (session 2026-07-29, part 11 — kaarttekst groter)

- Leesbaarheid kaarten: dienstentitels 24→29px (+ 0.02em
  letter-spacing), bodytekst 15→16px; aanpak-titels
  20→24px, bodytekst 14→15px. Lettertypes ongewijzigd
  (Anton + Archivo).

## Completed (session 2026-07-29, part 10 — SVG-iconen op kaarten)

- Omlijnde cijfers (01/02/03...) op beide kaartensets
  vervangen door passende inline SVG-lijniconen in
  accentgroen (stroke currentColor, 42px): diensten =
  halter / hart / blad; aanpak = persoon / stijgende
  grafiek / medaille / vlam. `.program-num`-CSS vervangen
  door `.program-icon`.

## Completed (session 2026-07-29, part 9 — mobile responsive)

- Mobiel geverifieerd met Playwright op 390px (iPhone-breedte,
  @2x): 12px horizontale overflow opgespoord (footer-grid met
  lang mailadres) en gefixt. Fixes: footer 1 kolom onder
  600px + overflow-wrap anywhere, overtuiging-foto 320px en
  contactfoto 380px hoog op mobiel (geen enorme fotoblokken),
  cta-banner background-attachment: scroll onder 960px
  (iOS-jank), kleinere knoppen en marquee-tekst onder 600px.
  Bestaande breakpoints (960/600) met hamburger-menu,
  gestapelde grids en 2x2-stats werkten al. Horizontale
  overflow nu 0px. Let op: lazy-loaded Unsplash-afbeeldingen
  lijken zwart in headless full-page captures — capture-
  artefact, geen site-bug.

## Completed (session 2026-07-29, part 8 — contact-tags Flexova-stijl)

- Contact-tags (mail + telefoon op de foto) herbouwd naar het
  Flexova-ontwerp o.b.v. nieuwe screenshot ("Schermafbeelding
  2026-07-29 162734.png", staat in projectroot): witte cirkel
  met envelop-/telefoon-icoon (inline SVG), twee tekstregels
  (normale regel + vette contactregel, sentence case), en een
  donkergroene ribbon-vouwdriehoek onder het deel dat links
  over de fotorand uitsteekt.

## Completed (session 2026-07-29, part 7 — groen accent, experiment)

- Accentkleur omgezet van rood naar groen; na feedback
  ("iets donkerder, maar nog fel") definitief:
  --accent-primary #16a34a, --accent-hover #22c55e, plus de
  hardcoded plekken (card-hoverborder rgba(22,163,74,0.4),
  insta-overlay rgba(22,163,74,0.78), contact-band em
  #08421f). Terugzetten naar rood = die vijf waarden terug
  naar #e32720 / #ff3b32 / rgba(227,39,32,x) / #7e120d.

## Completed (session 2026-07-29, part 6 — noise-achtergrond)

- "De achtergrond" bleek de gespikkelde noise-textuur van het
  live template (https://gymnastictemplate.webflow.io/home-pages/
  home-v1): een herhalende JPG met donkere overlay op de
  page-wrapper. Textuur gedownload naar `assets/bg-noise.jpg`
  en exact toegepast zoals het template: body krijgt
  `linear-gradient(rgba(7,7,8,0.6),...) + url(bg-noise.jpg)
  repeat`; de hero en de bg-surface-secties (diensten, aanpak,
  instagram, contact) zijn doorschijnend gemaakt
  (rgba(20,20,22,0.55)) zodat de spikkels overal zichtbaar
  zijn. De oude 5%-SVG-graincorrectie is verwijderd.

## TERUGGEDRAAID (parts 4 & 5)

De wijzigingen hieronder (part 4 en part 5) zijn op verzoek
van Lucas volledig teruggedraaid — `index.html` is hersteld
naar de staat van eind part 3 (Anton-font, 100vh split-hero
met fade, donkere 4-stats-balk, Flexova-contact). De
vergelijkingsbeelden in `assets/refs/` bestaan nog als
referentie voor een eventuele latere, selectieve toepassing.

## Completed (session 2026-07-29, part 4 — screenshot-to-code pass) [TERUGGEDRAAID]

- Ran the screenshot-to-code skill loop against the original
  template capture: sliced/cropped the reference, studied every
  section, screenshotted the rebuild headless (Playwright) and
  fixed fidelity gaps: display font Anton → Archivo Black
  (template uses a heavy extended sans), ghost words now filled
  low-opacity instead of outlined, program cards flat/borderless
  with line icons + dual CTA buttons under the grid, story
  section flipped to text-left/photo-right, philosophy quote in
  a dark card (template testimonial style), red "Volg mij"
  button under the Instagram grid.
- Verification artifacts kept in `assets/refs/` (reference
  crops in `slices/`, final `rebuild-desktop.png`).
- Side quest: het abi/screenshot-to-code app-repo is
  geïnstalleerd op `C:\Users\LucasvandenBergh\Projects\
  screenshot-to-code` (backend poort 7001 + frontend 5173,
  API-key nog niet ingevuld) — vervangen door de md-skill,
  servers kunnen gestopt worden.

## Completed (session 2026-07-29, part 5 — hero-achtergrond pass) [TERUGGEDRAAID]

- Screenshot-to-code loop gericht op de hero-achtergrond:
  foto begint nu onder de navbar (navbar op massief zwart),
  hangt over de statistiekenbalk heen (foto absoluut in een
  .hero-wrap over hero + balk), harde linkerrand (gradient-fade
  verwijderd), statistiekenbalk lichtgrijs (#ececea) met zwarte
  cijfers en rode accenten, stats beperkt tot de linkerhelft
  (3 stats; "100% persoonlijk plan" vervallen), hero compacter
  (78vh) met kleinere kop. Vergelijkingsbeelden:
  `assets/refs/slices/hero-orig.png` vs `hero-rebuild.png`.
- `npm run dev` toegevoegd (package.json + live-server op
  poort 5500); Python-servers en de screenshot-to-code app
  (7001/5173) gestopt.

## Open Questions

- Static site or framework (Next.js/Astro)?
- Remaining imagery is still Unsplash placeholder
  (overtuiging-quote foto, Instagram-grid). More real
  photos of Thom welcome; `thom-overmij.png` is a heavy
  3.5 MB PNG and should be compressed for production.
- Logo integration: nav/footer use a text logo; his
  actual logo mark needs a white cutout version.
- Facebook URL unknown (old site links a generic
  Squarespace placeholder); privacy policy page not
  built yet.
- Does Thom want the WhatsApp chat widget from his
  current site carried over?

## Architecture Decisions

- Prototype is a single self-contained `index.html`
  (embedded CSS/JS, no build step) so the design can be
  reviewed instantly; stack decision deferred.

## Session Notes

- Reference screenshot is the Gymnastix Webflow template
  home v1. Fonts loaded from Google Fonts; images
  hotlinked from Unsplash (need replacement for
  production).
