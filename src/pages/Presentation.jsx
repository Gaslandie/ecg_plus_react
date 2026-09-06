import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import team640 from '../assets/img/presen3-640.webp';
import team1280 from '../assets/img/presen3-1280.webp';
import field480 from '../assets/img/histoire-480.webp';
import field768 from '../assets/img/histoire-768.webp';
import '../styles/presentation.css';

const SECTIONS = ['equipe', 'engagements', 'identite'];
const revealSection = (id) => {
  const target = document.getElementById(id);
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({ behavior: 'instant', block: 'start' });
};

export default function Presentation() {
  const { t } = useI18n();
  const { hash } = useLocation();
  const content = t('presentationPage');

  useEffect(() => {
    // Les ancres gèrent leur position, y compris au retour dans l’historique.
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useEffect(() => {
    const id = hash.slice(1);
    if (!SECTIONS.includes(id)) return undefined;
    let cancelled = false;
    let frame;
    revealSection(id);
    // Les polices peuvent modifier la hauteur du contenu au-dessus de l’ancre.
    document.fonts.ready.then(() => {
      if (!cancelled) frame = window.requestAnimationFrame(() => revealSection(id));
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [hash]);

  return (
    <main className="company-page page-without-hero">
      <header className="company-intro ecg-page-intro ds-container">
        <h1>{t('simple.company')}</h1>
        <p>{content.hero.intro}</p>
        <figure className="company-intro__visual">
          <img src={team1280} srcSet={`${team640} 640w, ${team1280} 1280w`}
            sizes="(max-width: 1280px) calc(100vw - 32px), 1200px" width="1280" height="960"
            alt={content.hero.imageAlt} fetchPriority="high" decoding="async" />
        </figure>
      </header>

      <section className="company-team ds-container" aria-labelledby="equipe">
        <div className="company-team__body">
          <h2 id="equipe" tabIndex={-1}>{t('simple.team')}</h2>
          <p className="company-team__lead">{content.team.intro}</p>
        </div>
        <figure className="company-team__visual">
          <img src={field768} srcSet={`${field480} 480w, ${field768} 768w`}
            sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 45vw, 500px"
            width="768" height="1024" alt={content.team.imageAlt} loading="lazy" decoding="async" />
        </figure>
      </section>

      <section className="company-values" aria-labelledby="engagements">
        <div className="ds-container">
          <div className="ecg-section-head">
            <h2 id="engagements" tabIndex={-1}>{t('simple.commitments')}</h2>
          </div>
          <ul className="company-values__list">
            {content.values.items.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="company-identity" aria-labelledby="identite">
        <div className="ds-container">
          <div className="company-identity__head">
            <h2 id="identite" tabIndex={-1}>{t('simple.identity')}</h2>
          </div>
          <div className="company-identity__grid">
            <dl className="company-facts">
              {content.identity.facts.map(fact => (
                <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="company-contact ds-container">
        <Link to="/contact" className="ecg-content-link">{t('homePage.contact.cta')}</Link>
      </div>
    </main>
  );
}
