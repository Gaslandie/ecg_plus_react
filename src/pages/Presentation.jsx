import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import team800 from '../assets/img/presen3-800.webp';
import team1280 from '../assets/img/presen3-1280.webp';
import team1600 from '../assets/img/presen3-1600.webp';
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
    <main className="company-page ecg-page page-without-hero">
      <PageHeader
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        lead={content.hero.intro}
        actions={(
          <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--dark">
            {t('homePage.contact.cta')}<i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        )}
        media={(
          <figure>
            <img src={team1600} srcSet={`${team800} 800w, ${team1280} 1280w, ${team1600} 1600w`}
              sizes="(max-width: 1440px) calc(100vw - 2 * var(--ds-gutter)), 1600px" width="1600" height="1200"
              alt={content.hero.imageAlt} fetchPriority="high" decoding="async" />
            <figcaption>{content.hero.caption}</figcaption>
          </figure>
        )}
      />

      <nav className="ecg-subnav-bar" aria-label={content.navigation.label}>
        <div className="ds-container">
          <p className="ecg-subnav-bar__title">{content.navigation.label}</p>
          <ul className="ecg-subnav">
            {SECTIONS.map(id => <li key={id}><a href={`#${id}`}>{content.navigation[id]}</a></li>)}
          </ul>
        </div>
      </nav>

      <section className="ecg-section company-team" aria-labelledby="equipe">
        <div className="ds-container company-team__grid">
          <div className="company-team__body" data-reveal>
            <p className="ecg-eyebrow ecg-eyebrow--indexed">
              <span className="ecg-eyebrow__num">01</span><span>{content.team.eyebrow}</span>
            </p>
            <h2 id="equipe" tabIndex={-1} className="ecg-title">{content.team.title}</h2>
            <p className="ecg-lead">{content.team.intro}</p>
            <ol className="company-roles">
              {content.team.roles.map((role, index) => (
                <li key={role.title}>
                  <span className="company-roles__num">0{index + 1}</span>
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/expertiseservices" className="ecg-link">
              <span>{content.team.cta}</span><i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <figure className="company-team__visual" data-reveal>
            <img src={field768} srcSet={`${field480} 480w, ${field768} 768w`}
              sizes="(max-width: 900px) calc(100vw - 2.5rem), 36vw" width="768" height="1024"
              alt={content.team.imageAlt} loading="lazy" decoding="async" />
            <figcaption>{content.team.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="ecg-section ecg-section--paper company-values" aria-labelledby="engagements">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead index="02" eyebrow={content.values.eyebrow} title={content.values.title} titleId="engagements"
              focusableTitle lead={content.values.vision} />
          </div>
          <ol className="ecg-steps ecg-steps--3" data-reveal-group>
            {content.values.items.map((value, index) => (
              <li key={value.title} data-reveal>
                <span className="ecg-steps__num">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ecg-section company-identity" aria-labelledby="identite">
        <div className="ds-container company-identity__grid">
          <div className="company-identity__main" data-reveal>
            <SectionHead index="03" eyebrow={content.identity.eyebrow} title={content.identity.title} titleId="identite" focusableTitle align="stack" />
            <dl className="ecg-facts">
              {content.identity.facts.map(fact => (
                <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
              ))}
            </dl>
          </div>
          <aside className="company-contact-card" data-reveal aria-labelledby="company-contact-title">
            <h3 id="company-contact-title">{content.identity.contactTitle}</h3>
            <dl className="ecg-facts company-contact-card__facts">
              <div>
                <dt>{content.identity.phoneLabel}</dt>
                <dd>{content.identity.phones.map(phone => <a key={phone.href} href={phone.href}>{phone.label}</a>)}</dd>
              </div>
              <div>
                <dt>{content.identity.emailLabel}</dt>
                <dd><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></dd>
              </div>
            </dl>
            <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--dark">
              {content.identity.contactCta}<i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow={content.next.eyebrow}
        title={content.next.title}
        text={content.next.text}
        primary={{ to: '/realisations', label: content.next.cta }}
        secondary={{ to: '/contact', label: t('homePage.contact.cta') }}
      />
    </main>
  );
}
