import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ExpertiseShowcase from '../components/ExpertiseShowcase.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Photo from '../components/Photo.jsx';
import team800 from '../assets/img/presen3-800.webp';
import team1280 from '../assets/img/presen3-1280.webp';
import field480 from '../assets/img/histoire-480.webp';
import field768 from '../assets/img/histoire-768.webp';
import logo from '../assets/img/logo-160.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import { projects } from '../data/projects';
import '../styles/home.css';

const PROJECTS = ['kankan', 'dubreka', 'ansoumania'].map(key => projects.find(project => project.key === key));
const FACT_ICONS = ['bi-building', 'bi-geo-alt-fill', 'bi-check2'];
export default function Home() {
  const { t } = useI18n();
  const copy = t('referenceUi');
  const process = t('expertiseServicesPage.process');
  return (
    <main className="page-with-hero ecg-home">
      <HomeHero />
      <div className="ds-container">
        <div className="ecg-home-facts" role="group" aria-label={t('homePage.company.factsLabel')}>
          {copy.facts.map((fact, index) => <div key={fact.title}>
            <i className={`bi ${FACT_ICONS[index]}`} aria-hidden="true" />
            <dl><dt>{fact.title}</dt><dd>{fact.text}</dd></dl>
          </div>)}
        </div>
      </div>
      <section className="ecg-section ecg-home-company" aria-labelledby="home-company-title">
        <div className="ds-container ecg-home-company__grid">
          <div data-reveal>
            <p className="ecg-eyebrow">{copy.companyEyebrow}</p>
            <h2 id="home-company-title" className="ecg-title">{copy.companyTitle}</h2>
            <p className="ecg-home-company__text">{copy.companyText}</p>
            <Link to="/presentation" className="ecg-link"><span>{t('homePage.company.cta')}</span><i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
          <div className="ecg-home-company__visual" data-reveal>
            <Photo image={{src:team1280,srcSet:`${team800} 800w, ${team1280} 1280w`,width:1280,height:960}}
              alt={t('presentationPage.hero.imageAlt')} caption={copy.companyCaption} zoom={false} />
            <div className="ecg-home-company__brand" aria-hidden="true"><img src={logo} width="160" height="141" alt="" loading="lazy" /></div>
          </div>
        </div>
      </section>
      <section className="ecg-section ecg-section--paper ecg-home-expertises" aria-labelledby="home-expertises-title">
        <div className="ds-container">
          <div data-reveal><SectionHead eyebrow={t('homePage.expertises.eyebrow')} title={copy.expertiseTitle} titleId="home-expertises-title" lead={t('homePage.expertises.intro')} /></div>
          <ExpertiseShowcase />
        </div>
      </section>
      <section className="ecg-section ecg-home-method" aria-labelledby="home-method-title">
        <div className="ds-container ecg-home-method__grid">
          <div data-reveal>
            <SectionHead eyebrow={process.eyebrow} title={process.title} titleId="home-method-title" lead={process.intro} />
            <Photo image={{src:field768,srcSet:`${field480} 480w, ${field768} 768w`,width:768,height:1024}}
              alt={t('homePage.company.imageAlt')} caption={copy.methodCaption} />
          </div>
          <div>
            <ol className="ecg-principles" data-reveal-group>
              {process.steps.map((step, index) => <li key={step.title} data-reveal><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}
            </ol>
            <Link to="/expertiseservices#methode" className="ecg-link"><span>{t('homePage.method.cta')}</span><i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section id="realisations" className="ecg-section ecg-section--paper ecg-home-projects" aria-labelledby="home-projects-title">
        <div className="ds-container">
          <div data-reveal><SectionHead eyebrow={t('homePage.projects.eyebrow')} title={t('homePage.projects.title')} titleId="home-projects-title" lead={t('homePage.projects.intro')}
            action={<Link to="/realisations" className="ecg-link"><span>{t('homePage.projects.cta')}</span><i className="bi bi-arrow-right" aria-hidden="true" /></Link>} /></div>
          <ul className="ecg-card-grid" data-reveal-group>{PROJECTS.map(project => <li key={project.key} data-reveal><ProjectCard project={project} from="/" /></li>)}</ul>
        </div>
      </section>
      <CtaBand id="home-contact-title" eyebrow={copy.contactEyebrow} title={copy.contactTitle} text={t('homePage.contact.text')}
        primary={{to:'/contact',label:t('homePage.hero.ctaSecondary')}} details />
    </main>
  );
}
