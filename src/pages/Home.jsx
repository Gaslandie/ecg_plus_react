import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ExpertiseShowcase from '../components/ExpertiseShowcase.jsx';
import CtaBand from '../components/CtaBand.jsx';
import teamWide800 from '../assets/img/presen3-800.webp';
import teamWide1280 from '../assets/img/presen3-1280.webp';
import field480 from '../assets/img/histoire-480.webp';
import field768 from '../assets/img/histoire-768.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import { projects } from '../data/projects';
import '../styles/home.css';

const PROJECTS = ['kankan', 'dubreka', 'ansoumania'].map(key => projects.find(project => project.key === key));

export default function Home() {
  const { t } = useI18n();
  const facts = t('homePage.company.facts');
  const process = t('expertiseServicesPage.process');
  const commitments = t('homePage.company.commitments');

  return (
    <main className="page-with-hero ecg-home">
      <HomeHero />

      {/* ---------- 01 · Réalisations ---------- */}
      <section id="realisations" className="ecg-section ecg-home-projects" aria-labelledby="home-projects-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead
              index="01"
              eyebrow={t('homePage.projects.eyebrow')}
              title={t('homePage.projects.title')}
              titleId="home-projects-title"
              lead={t('homePage.projects.intro')}
              action={(
                <Link to="/realisations" className="ds-btn ds-btn--pill ds-btn--outline-ink">
                  {t('homePage.projects.cta')}<i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              )}
            />
          </div>
          <ul className="ecg-home-projects__grid" data-reveal-group>
            {PROJECTS.map((project, index) => (
              <li key={project.key} data-reveal>
                <ProjectCard
                  project={project}
                  from="/"
                  variant="overlay"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  sizes={index === 0 ? '(max-width: 900px) calc(100vw - 2.5rem), 54vw' : '(max-width: 900px) calc(100vw - 2.5rem), 27vw'}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 02 · Expertises ---------- */}
      <section className="ecg-section ecg-section--paper ecg-home-expertises" aria-labelledby="home-expertises-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead
              index="02"
              eyebrow={t('homePage.expertises.eyebrow')}
              title={t('homePage.expertises.title')}
              titleId="home-expertises-title"
              lead={t('homePage.expertises.intro')}
              action={(
                <Link to="/expertiseservices" className="ecg-link">
                  <span>{t('homePage.expertises.cta')}</span><i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              )}
            />
          </div>
          <ExpertiseShowcase />
        </div>
      </section>

      {/* ---------- 03 · Méthode ---------- */}
      <section className="ecg-section ecg-home-method" aria-labelledby="home-method-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead
              index="03"
              eyebrow={process.eyebrow}
              title={process.title}
              titleId="home-method-title"
              lead={process.intro}
              action={(
                <Link to="/expertiseservices#methode" className="ecg-link ecg-link--light">
                  <span>{t('homePage.method.cta')}</span><i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              )}
            />
          </div>
          <ol className="ecg-steps ecg-home-method__steps" data-reveal-group>
            {process.steps.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="ecg-steps__num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 04 · L'entreprise ---------- */}
      <section className="ecg-section ecg-home-company" aria-labelledby="home-company-title">
        <div className="ds-container">
          <div className="ecg-home-company__grid">
            <div className="ecg-home-company__body" data-reveal>
              <p className="ecg-eyebrow ecg-eyebrow--indexed">
                <span className="ecg-eyebrow__num">04</span><span>{t('homePage.company.eyebrow')}</span>
              </p>
              <h2 id="home-company-title" className="ecg-title ecg-title--wide">{t('homePage.company.title')}</h2>
              <p className="ecg-lead ecg-lead--strong">{t('homePage.company.lead')}</p>
              <p className="ecg-text">{t('homePage.company.text')}</p>
              <div className="ecg-home-company__commitments">
                <h3>{t('homePage.company.commitmentsTitle')}</h3>
                <ul>
                  {Array.isArray(commitments) && commitments.map(commitment => (
                    <li key={commitment}><i className="bi bi-check2" aria-hidden="true" /><span>{commitment}</span></li>
                  ))}
                </ul>
              </div>
              <Link to="/presentation" className="ds-btn ds-btn--pill ds-btn--dark">
                {t('homePage.company.cta')}<i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="ecg-collage" data-reveal>
              <img className="ecg-collage__main" src={teamWide1280} srcSet={`${teamWide800} 800w, ${teamWide1280} 1280w`}
                sizes="(max-width: 900px) calc(100vw - 2.5rem), 42vw" width="1280" height="960"
                alt={t('presentationPage.hero.imageAlt')} loading="lazy" decoding="async" />
              <img className="ecg-collage__second" src={field768} srcSet={`${field480} 480w, ${field768} 768w`}
                sizes="(max-width: 900px) 40vw, 18vw" width="768" height="1024"
                alt={t('homePage.company.imageAlt')} loading="lazy" decoding="async" />
              <span className="ecg-collage__mark" aria-hidden="true">Manéah · Coyah</span>
            </div>
          </div>
          <dl className="ecg-facts ecg-facts--strip ecg-home-company__facts" aria-label={t('homePage.company.factsLabel')} data-reveal>
            {Array.isArray(facts) && facts.map(fact => (
              <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- 05 · Contact ---------- */}
      <CtaBand
        id="home-contact-title"
        eyebrow={t('homePage.contact.eyebrow')}
        title={t('homePage.contact.title')}
        text={t('homePage.contact.text')}
        primary={{ to: '/contact', label: t('homePage.contact.cta') }}
        details
      />
    </main>
  );
}
