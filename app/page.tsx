"use client";

import { useEffect, useState } from "react";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stepMarker = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="5.4" strokeWidth="1.6" />
    <circle
      cx="12"
      cy="12"
      r="8.6"
      strokeWidth="2.4"
      strokeDasharray="7.5 6"
      transform="rotate(22 12 12)"
    />
  </svg>
);

const levels = [
  {
    tag: "Niveau 1",
    title: "Nieuw met fitness",
    body: "Bouw kracht, conditie en techniek op met gestructureerde trainingen die je veilig en effectief uitdagen — in jouw tempo.",
  },
  {
    tag: "Niveau 2",
    title: "Kracht & conditie opbouwen",
    body: "Progressieve programmering om meetbaar sterker en fitter te worden, met techniek-eerst coaching op elke oefening.",
  },
  {
    tag: "Niveau 3",
    title: "Presteren op topniveau",
    body: "Voor gevorderden: alles uit je training halen met scherpe periodisering, voeding en herstel volledig op elkaar afgestemd.",
  },
];

const instaImages = [
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80",
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openLevel, setOpenLevel] = useState<number | null>(0);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            stepObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    const stepEls = document.querySelectorAll<HTMLElement>(".step");
    stepEls.forEach((el) => stepObserver.observe(el));

    function updateStepsScroll() {
      const vh = window.innerHeight;
      stepEls.forEach((s) => {
        const sr = s.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.85 - sr.top) / (vh * 0.45)));
        s.style.setProperty("--p", p.toFixed(3));
      });
    }
    window.addEventListener("scroll", updateStepsScroll, { passive: true });
    updateStepsScroll();

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countObserver.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => countObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      stepObserver.disconnect();
      countObserver.disconnect();
      window.removeEventListener("scroll", updateStepsScroll);
    };
  }, []);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const subject = encodeURIComponent(
      "Aanvraag kennismakingsgesprek — " + get("naam")
    );
    const body = encodeURIComponent(
      "Naam: " + get("naam") +
        "\nE-mail: " + get("email") +
        "\nTelefoon: " + get("telefoon") +
        "\nDoel: " + get("doel") +
        "\n\n" + get("bericht")
    );
    window.location.href =
      "mailto:Info@thomfiddercoaching.com?subject=" + subject + "&body=" + body;
  }

  return (
    <>
      <nav className={`nav${navOpen ? " open" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="logo">
            Thom Fidder<span> Coaching</span>
          </a>
          <ul className="nav-links">
            <li><a href="#diensten">Diensten</a></li>
            <li><a href="#over-mij">Over mij</a></li>
            <li><a href="#aanpak">Aanpak</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary">Gratis kennismaking</a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setNavOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </nav>

      <header className="hero">
        <img
          src={`${BP}/assets/thom-home.jpg`}
          alt="Thom Fidder traint met dumbbells"
          className="hero-photo"
        />
        <div className="hero-photo-fade" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-ghost" aria-hidden="true">Coaching</span>
            <span className="eyebrow">Thom Fidder — Personal Training in Hulshorst</span>
            <h1 className="display">
              <span>Sterker.</span><br /><span>Fitter.</span><br /><span>Zelfverzekerder.</span>
            </h1>
            <p>
              Geen snelle fixes, maar een praktisch en haalbaar plan dat écht bij
              jou past. Samen zetten we een duurzame stap richting een fitter en
              gezonder leven.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Boek een gratis kennismaking</a>
              <a href="#over-mij" className="btn btn-ghost">Mijn verhaal</a>
            </div>
          </div>
        </div>
      </header>

      <div className="stats-strip">
        <div className="container stats-strip-inner">
          <div className="stat"><strong><span data-count="8">8</span> <em>+</em></strong><span>Jaar ervaring</span></div>
          <div className="stat"><strong><em>-</em> <span data-count="56">56</span> kg</strong><span>Eigen transformatie</span></div>
          <div className="stat"><strong>1<em>e</em></strong><span>Sessie altijd gratis</span></div>
          <div className="stat"><strong><span data-count="100">100</span> <em>%</em></strong><span>Gepersonaliseerd plan</span></div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              Kracht • Voeding • Mindset • Duurzaam resultaat • Persoonlijke begeleiding •
            </span>
          ))}
        </div>
      </div>

      <section className="programs" id="diensten">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-ghost" aria-hidden="true">Focus</span>
            <span className="eyebrow">Dit kan ik voor jou betekenen</span>
            <h2 className="display section-title">Waar ik je mee <em>help</em></h2>
          </div>
          <div className="program-grid">
            <article className="program-card reveal">
              <div className="program-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
                </svg>
              </div>
              <h3>Sterker worden</h3>
              <p>
                Krachttraining die aansluit bij jouw lichaam en niveau. Ik leer
                jouw lichaam kennen, zodat elke training en elk advies bij jouw
                behoeften past.
              </p>
              <a href="#contact" className="card-link">Plan een gratis sessie →</a>
            </article>
            <article className="program-card reveal">
              <div className="program-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20.5s-7.5-4.9-9.5-9C1 8.4 2.8 5 6.2 5c2.2 0 3.5 1.2 5.8 3.7C14.3 6.2 15.6 5 17.8 5c3.4 0 5.2 3.4 3.7 6.5-2 4.1-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h3>Duurzaam afvallen</h3>
              <p>
                Geen crashdiëten of extreme methodes, maar een aanpak gericht op
                blijvende verandering en een gezonde levensstijl.
              </p>
              <a href="#contact" className="card-link">Plan een gratis sessie →</a>
            </article>
            <article className="program-card reveal">
              <div className="program-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 20C5 11.5 10 4.5 20 4.5c0 10-5 15.5-15 15.5z" />
                  <path d="M5 20c3-6 7-10 11.5-13" />
                </svg>
              </div>
              <h3>Gezonder leven</h3>
              <p>
                Een gezond, gedisciplineerd leven opbouwen met haalbare
                gewoontes. Jouw verhaal is belangrijk — ik luister aandachtig en
                we maken samen een praktisch plan.
              </p>
              <a href="#contact" className="card-link">Plan een gratis sessie →</a>
            </article>
          </div>
        </div>
      </section>

      <section id="over-mij">
        <div className="container story-grid">
          <div className="story-media reveal">
            <img
              src={`${BP}/assets/thom-overmij.png`}
              alt="Thom Fidder begeleidt een klant tijdens een ringtraining"
              loading="lazy"
            />
          </div>
          <div className="story-copy reveal">
            <span className="section-ghost" aria-hidden="true">Verhaal</span>
            <span className="eyebrow">Over mij</span>
            <h2 className="display section-title">Van onzeker naar <em>onverslaanbaar</em></h2>
            <p>
              Welkom! Mijn naam is Thom, ik ben 26 jaar en kom uit Hulshorst.
              Mijn reis begon vanuit een moeilijke plek: als onzekere jongen met
              overgewicht worstelde ik met mijn zelfbeeld en gezondheid. Maar op
              een dag besloot ik dat het anders moest.
            </p>
            <p>
              Met vastberadenheid viel ik 56 kilo af. Wat begon als een
              persoonlijke strijd, groeide uit tot een passie: bodybuilding. Die
              transformatie was niet alleen fysiek, maar ook mentaal. Nu gebruik
              ik mijn ervaringen om anderen te helpen hun zelfbeeld en fitheid
              te verbeteren.
            </p>
            <ul className="story-list">
              <li>Geen crashdiëten, maar echte, duurzame verandering</li>
              <li>Een persoonlijk plan, afgestemd op jouw doelen</li>
              <li>Rustige en motiverende begeleiding</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Boek een kennismakingsgesprek</a>
          </div>
        </div>
      </section>

      <section className="expect" id="aanpak">
        <div className="container">
          <div className="steps-head reveal">
            <span className="section-ghost" aria-hidden="true">Proces</span>
            <span className="eyebrow">Mijn aanpak</span>
            <h2 className="display">
              <span>Wat kun je</span><br /><span>van mij</span><br /><span>verwachten?</span>
            </h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-media" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" alt="" loading="lazy" />
              </div>
              <div className="step-panel">
                <div className="step-marker" aria-hidden="true">{stepMarker}</div>
                <div className="step-num" aria-hidden="true">01</div>
                <h3>Persoonlijke begeleiding</h3>
                <p>
                  Jouw doelen en behoeften staan centraal. Sterker worden,
                  afvallen of gezonder leven — ik help je op een manier die écht
                  bij jou past.
                </p>
                <a href="#contact" className="btn-white">Boek een gratis kennismaking</a>
              </div>
            </div>
            <div className="step">
              <div className="step-media" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" alt="" loading="lazy" />
              </div>
              <div className="step-panel">
                <div className="step-marker" aria-hidden="true">{stepMarker}</div>
                <div className="step-num" aria-hidden="true">02</div>
                <h3>Duurzame resultaten</h3>
                <p>
                  Geen crashdiëten of extreme methodes, maar een aanpak gericht
                  op blijvende verandering en een gezonde levensstijl.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-media" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" alt="" loading="lazy" />
              </div>
              <div className="step-panel">
                <div className="step-marker" aria-hidden="true">{stepMarker}</div>
                <div className="step-num" aria-hidden="true">03</div>
                <h3>8 jaar expertise</h3>
                <p>
                  Je werkt met een ervaren trainer die weet wat werkt en jou
                  begeleidt met de nieuwste technieken en inzichten.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-media" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80" alt="" loading="lazy" />
              </div>
              <div className="step-panel">
                <div className="step-marker" aria-hidden="true">{stepMarker}</div>
                <div className="step-num" aria-hidden="true">04</div>
                <h3>Motiverende aanpak</h3>
                <p>
                  Met mijn rustige en motiverende stijl zorg ik ervoor dat je
                  vol vertrouwen aan de slag gaat — en blijft.
                </p>
              </div>
            </div>
          </div>
          <div className="center-cta reveal" style={{ textAlign: "center", marginTop: 52 }}>
            <a href="#contact" className="btn btn-primary">Maak vandaag de keuze voor jezelf</a>
          </div>
        </div>
      </section>

      <section className="levels" id="niveaus">
        <div className="container levels-grid">
          <div className="levels-copy reveal">
            <span className="section-ghost" aria-hidden="true">Groei</span>
            <span className="eyebrow">Trainingsimpact</span>
            <h2 className="display">Transformeer <em>lichaam en geest</em></h2>
            <div className="levels-list">
              {levels.map((level, i) => (
                <div key={level.tag} className={`level${openLevel === i ? " open" : ""}`}>
                  <button
                    className="level-head"
                    type="button"
                    aria-expanded={openLevel === i}
                    onClick={() => setOpenLevel(openLevel === i ? null : i)}
                  >
                    <span className="level-tag">{level.tag}</span>
                    <span className="level-title">{level.title}</span>
                  </button>
                  <div className="level-body">
                    <p>{level.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="levels-media reveal">
            <img
              src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=900&q=80"
              alt="Training aan een fitnessapparaat"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="tinted">
        <div className="container testimonial-grid">
          <div className="testimonial-media reveal">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80"
              alt="Barbell in de sportschool"
              loading="lazy"
            />
          </div>
          <div className="testimonial-copy reveal">
            <span className="section-ghost" aria-hidden="true">Mindset</span>
            <span className="eyebrow">Mijn overtuiging</span>
            <h2 className="display section-title" style={{ margin: "14px 0 40px" }}>
              Geen <em>snelle fixes</em>
            </h2>
            <blockquote>
              <span className="quote-mark">“</span>
              <p>
                “Ik geloof niet in crashdiëten, maar in echte, duurzame
                verandering. Jouw verhaal is belangrijk — ik luister aandachtig
                om de juiste weg naar jouw doelen in te slaan.”
              </p>
              <div className="quote-author">
                <strong>Thom Fidder</strong>
                <span>Personal trainer — Hulshorst</span>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div className="reveal">
            <span className="eyebrow">Kennismaken</span>
            <h2 className="display section-title" style={{ marginTop: 14 }}>
              De eerste sessie is <em>altijd gratis</em>
            </h2>
            <p className="muted" style={{ maxWidth: 520, marginTop: 18 }}>
              De perfecte kans om kennis te maken en samen jouw doelen en wensen
              te bespreken. Vrijblijvend en zonder verplichtingen.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary reveal">Plan je gratis sessie</a>
        </div>
      </section>

      <section className="insta">
        <div className="container section-head reveal">
          <span className="section-ghost" aria-hidden="true">Community</span>
          <span className="eyebrow">Social</span>
          <h2 className="display section-title">Volg mij op <em>Instagram</em></h2>
        </div>
        <div className="insta-grid">
          {instaImages.map((src) => (
            <a
              key={src}
              href="https://www.instagram.com/thomfiddercoaching"
              target="_blank"
              rel="noopener"
              aria-label="Instagram @thomfiddercoaching"
            >
              <img src={src} alt="Trainingsmoment" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-media reveal">
            <img
              src={`${BP}/assets/thom-home.jpg`}
              alt="Thom Fidder met dumbbells in de sportschool"
              loading="lazy"
            />
            <div className="contact-tag mail">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="5" width="19" height="14" rx="2" />
                  <path d="M2.5 7l9.5 6.5L21.5 7" />
                </svg>
              </span>
              <div>
                <strong>Ik reageer binnen 2 werkdagen</strong>
                <a href="mailto:Info@thomfiddercoaching.com">Info@thomfiddercoaching.com</a>
              </div>
            </div>
            <div className="contact-tag tel">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" />
                  <path d="M11 18.5h2" />
                </svg>
              </span>
              <div>
                <strong>Bel of app me</strong>
                <a href="tel:+31612300288">+31 6 12300288</a>
              </div>
            </div>
          </div>
          <div className="contact-copy reveal">
            <span className="section-ghost" aria-hidden="true">Start</span>
            <span className="eyebrow">Contact</span>
            <h2 className="display section-title" style={{ marginTop: 14 }}>
              Klaar om te starten? <em>Ik help je op weg.</em>
            </h2>
            <p>
              Vragen over personal training, of meteen jouw gratis
              kennismakingsgesprek inplannen? Stuur een bericht en ik neem zo
              snel mogelijk contact met je op.
            </p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <input type="text" name="naam" placeholder="Naam" required aria-label="Naam" />
                <input type="email" name="email" placeholder="E-mailadres" required aria-label="E-mailadres" />
              </div>
              <input type="tel" name="telefoon" placeholder="Telefoonnummer" aria-label="Telefoonnummer" />
              <select name="doel" aria-label="Waar kan ik je mee helpen?" defaultValue="">
                <option value="">Waar kan ik je mee helpen?</option>
                <option>Sterker worden</option>
                <option>Duurzaam afvallen</option>
                <option>Gezonder leven</option>
                <option>Iets anders</option>
              </select>
              <textarea name="bericht" placeholder="Vertel kort iets over jouw doelen" aria-label="Bericht"></textarea>
              <button type="submit" className="btn btn-primary">Verstuur aanvraag</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-band" style={{ padding: "72px 0" }}>
        <div className="container contact-band-inner">
          <div>
            <h2 className="display">Wacht niet tot <em>“ooit”</em></h2>
            <p>
              Train met structuur, bouw momentum op en zie het verschil. De
              eerste sessie is altijd gratis.
            </p>
          </div>
          <div className="contact-actions">
            <a href="#contact" className="btn btn-dark">Plan je gratis sessie</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#" className="logo">Thom Fidder<span> Coaching</span></a>
              <p>
                Personal training in Hulshorst en omgeving. Geen snelle fixes,
                maar duurzame verandering — de eerste sessie is altijd gratis.
              </p>
            </div>
            <div>
              <h4>Pagina&apos;s</h4>
              <ul>
                <li><a href="#diensten">Diensten</a></li>
                <li><a href="#over-mij">Over mij</a></li>
                <li><a href="#aanpak">Aanpak</a></li>
                <li><a href="#contact">Kennismakingsgesprek</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:Info@thomfiddercoaching.com">Info@thomfiddercoaching.com</a></li>
                <li><a href="tel:+31612300288">+31 6 12300288</a></li>
                <li>Onder de Bos 109<br />8077 TE Hulshorst</li>
              </ul>
            </div>
            <div>
              <h4>Volg mij op</h4>
              <ul>
                <li><a href="https://www.instagram.com/thomfiddercoaching" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@thom.fidder" target="_blank" rel="noopener">TikTok</a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Thom Fidder Coaching · KVK 95025065</span>
            <span><a href="#">Privacybeleid</a></span>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/31612300288"
        target="_blank"
        rel="noopener"
        className="wa-float"
        aria-label="Stuur Thom een WhatsApp-bericht"
      >
        <span className="wa-bubble">Vragen? App me gerust!</span>
        <span className="wa-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
      </a>
    </>
  );
}
