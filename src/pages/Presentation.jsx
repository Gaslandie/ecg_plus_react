
import ecgbg from '../assets/img/ecgbg.jpeg';
import batiment from '../assets/img/batiment.jpeg';
import commerce from '../assets/img/commerce.jpeg';
import hangar from '../assets/img/hangar.png';
import nongo from '../assets/img/nongo.jpeg';

const Presentation = () => (
  <main className="presentation-page">
    <section className="plaque-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="plaque-info shadow-lg p-4 rounded border-start border-orange border-5 bg-white">
              <h2 className="text-primary fw-bold mb-4">Identité de l'Entreprise</h2>
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td><strong>Raison Sociale:</strong></td>
                    <td>ECG PLUS SARL</td>
                  </tr>
                  <tr>
                    <td><strong>Statut Légal:</strong></td>
                    <td>SARL</td>
                  </tr>
                  <tr>
                    <td><strong>Capital:</strong></td>
                    <td>10.000.000 GNF</td>
                  </tr>
                  <tr>
                    <td><strong>RCCM:</strong></td>
                    <td>GN.TCC.2021.B.00331</td>
                  </tr>
                  <tr>
                    <td><strong>Siège:</strong></td>
                    <td>Maneah / Coyah / Guinée</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="experience-badge d-flex align-items-center p-4">
              <div className="number display-1 fw-bold text-orange">18</div>
              <div className="text ms-3">
                <h3 className="fw-bold mb-0">Ans d'Expertise</h3>
                <p className="mb-0 text-muted">Un acteur majeur en Guinée et dans la sous-région.</p>
              </div>
            </div>
            <p className="presentation-text">
              Depuis sa fondation, <strong>ECG PLUS</strong> s'est imposé comme un expert incontournable.
              Notre engagement envers l'excellence technique nous permet de répondre aux défis les plus
              complexes avec efficacité et innovation, partout en Guinée.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 section-title">ECG Plus en images</h2>

        <div id="presentationCarousel" className="carousel slide shadow-lg rounded overflow-hidden" data-bs-ride="carousel" data-bs-pause="true">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="4"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ecgbg} className="d-block w-100 carousel-img" alt="Directeur général" loading="lazy" />
            </div>
            <div className="carousel-item">
              <img src={batiment} className="d-block w-100 carousel-img" alt="Bâtiment" loading="lazy" />
            </div>
            <div className="carousel-item">
              <img src={commerce} className="d-block w-100 carousel-img" alt="Commerce" loading="lazy" />
            </div>
            <div className="carousel-item">
              <img src={hangar} className="d-block w-100 carousel-img" alt="Hangar" loading="lazy" />
            </div>
            <div className="carousel-item">
              <img src={nongo} className="d-block w-100 carousel-img" alt="Nongo" loading="lazy" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#presentationCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#presentationCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </section>

    <section className="vvm-section py-5 bg-light">
      <div className="container">
        <div className="row text-center visionmissionvaleurs" data-aos="fade-up">
          <h2 className="display-6 fw-bold mb-5 section-title text-center">Vision, Mission & Valeurs</h2>
          <div className="col-md-4 mb-4">
            <div className="card card-vvm h-100 shadow-lg bg-white">
              <div className="icon-box">
                <i className="bi bi-eye-fill"></i>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold">Notre Vision</h5>
                <hr className="accent-line" />
                <ul className="list-unstyled text-start mt-3">
                  <li><i className="bi bi-check2-all me-2"></i>Construction durable selon les exigences</li>
                  <li><i className="bi bi-check2-all me-2"></i>Innovation technique constante</li>
                  <li><i className="bi bi-check2-all me-2"></i>Garantie de pleine satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-vvm h-100 shadow-lg featured bg-white">
              <div className="icon-box">
                <i className="bi bi-rocket-takeoff-fill"></i>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold">Notre Mission</h5>
                <hr className="accent-line" />
                <ul className="list-unstyled text-start mt-3">
                  <li><i className="bi bi-check2-all me-2"></i>Synergie des compétences multidisciplinaires</li>
                  <li><i className="bi bi-check2-all me-2"></i>Respect strict des normes et délais</li>
                  <li><i className="bi bi-check2-all me-2"></i>Réalisation d'ouvrages de haute qualité</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-vvm h-100 shadow-lg bg-white">
              <div className="icon-box">
                <i className="bi bi-shield-fill-check"></i>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold">Nos Valeurs</h5>
                <hr className="accent-line" />
                <ul className="list-unstyled text-start mt-3">
                  <li><i className="bi bi-check2-all me-2"></i>Habilité et rigueur dans le travail</li>
                  <li><i className="bi bi-check2-all me-2"></i>Protection et sécurité du personnel</li>
                  <li><i className="bi bi-check2-all me-2"></i>Responsabilité environnementale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Nos Moyens Humains</h2>
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="p-3 shadow-sm rounded bg-white border-bottom border-primary border-3">
              <i className="bi bi-person-badge display-5 text-primary"></i>
              <h6 className="mt-3 fw-bold">Ingénieurs & Architectes</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow-sm rounded bg-white border-bottom border-primary border-3">
              <i className="bi bi-gear-fill display-5 text-primary"></i>
              <h6 className="mt-3 fw-bold">Techniciens Superviseurs</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow-sm rounded bg-white border-bottom border-primary border-3">
              <i className="bi bi-tools display-5 text-primary"></i>
              <h6 className="mt-3 fw-bold">Équipes de Dépannage</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow-sm rounded bg-white border-bottom border-primary border-3">
              <i className="bi bi-people-fill display-5 text-primary"></i>
              <h6 className="mt-3 fw-bold">Ouvriers Spécialisés</h6>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-muted">
          Une équipe multidisciplinaire (gestionnaires, sociologues, ingénieurs) au service de vos projets.
        </p>
      </div>
    </section>
  </main>
);

export default Presentation;
