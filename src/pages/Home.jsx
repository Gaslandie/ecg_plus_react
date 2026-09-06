import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import histoire480 from '../assets/img/histoire-480.webp';
import histoire768 from '../assets/img/histoire-768.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import { projects } from '../data/projects';
import { services, servicePath } from '../data/services';
import '../styles/home.css';
import '../styles/portfolio.css';

const PROJECTS = projects.filter(project => ['kankan', 'dubreka', 'ansoumania'].includes(project.key));

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="page-with-hero ecg-home">
      <HomeHero />

      <section id="realisations" className="ecg-section ecg-home-projects" aria-labelledby="home-projects-title">
        <div className="ds-container">
          <div className="ecg-section-head">
            <h2 id="home-projects-title">{t('simple.projects')}</h2>
            <p>{t('homePage.projects.intro')}</p>
          </div>
          <ul className="portfolio-grid">
            {PROJECTS.map(project => <li key={project.key}><ProjectCard project={project} /></li>)}
          </ul>
          <div className="ecg-section-end">
            <Link to="/realisations" className="ecg-content-link">{t('simple.allProjects')}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="ecg-section ecg-home-expertises" aria-labelledby="home-expertises-title">
        <div className="ds-container">
          <div className="ecg-section-head">
            <h2 id="home-expertises-title">{t('simple.expertise')}</h2>
            <p>{t('homePage.expertises.intro')}</p>
          </div>
          <ul className="ecg-home-expertises__grid">
            {services.map(service => (
              <li key={service.key}>
                <Link to={servicePath(service)} className="ecg-home-expertise">
                  <img {...service.image} sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 1280px) 45vw, 590px"
                    alt="" loading="lazy" decoding="async" />
                  <h3>{t(`expertiseServicesPage.pillars.${service.key}.shortTitle`)}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ecg-section-end">
            <Link to="/expertiseservices" className="ecg-content-link">{t('simple.allServices')}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="ecg-section ecg-home-company" aria-labelledby="home-company-title">
        <div className="ds-container ecg-home-company__grid">
          <div>
            <div className="ecg-section-head">
              <h2 id="home-company-title">{t('simple.company')}</h2>
              <p>{t('homePage.company.lead')}</p>
            </div>
            <Link to="/presentation" className="ecg-content-link">{t('homePage.company.cta')}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
          <img src={histoire768} srcSet={`${histoire480} 480w, ${histoire768} 768w`}
            sizes="(max-width: 760px) calc(100vw - 32px), 540px" width="768" height="1024"
            alt={t('homePage.company.imageAlt')} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="ecg-section ecg-home-cta" aria-labelledby="home-contact-title">
        <div className="ds-container">
          <div className="ecg-section-head">
            <h2 id="home-contact-title">{t('simple.contact')}</h2>
            <p>{t('simple.contactIntro')}</p>
          </div>
          <Link to="/contact" className="ecg-content-link">{t('homePage.contact.cta')}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
