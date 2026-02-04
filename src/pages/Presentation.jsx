import ecgbg from '../assets/img/ecgbg.jpeg';
import batiment from '../assets/img/batiment.jpeg';
import commerce from '../assets/img/commerce.jpeg';
import hangar from '../assets/img/hangar.png';
import nongo from '../assets/img/nongo.jpeg';

const Presentation = () => (
  <main className="page-without-hero presentation-page">

    {/* Section Identité */}
    <section className="plaque-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="plaque-info shadow-lg p-4 rounded border-start border-orange border-5 bg-white">
              <h2 className="text-primary fw-bold mb-4">Identité de l'Entreprise</h2>
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td><strong>Raison Sociale :</strong></td>
                    <td>ECG PLUS SARL</td>
                  </tr>
                  <tr>
                    <td><strong>Statut Légal :</strong></td>
                    <td>SARL</td>
                  </tr>
                  <tr>
                    <td><strong>Capital :</strong></td>
                    <td>10.000.000 GNF</td>
                  </tr>
                  <tr>
                    <td><strong>RCCM :</strong></td>
                    <td>GN.TCC.2021.B.00331</td>
                  </tr>
                  <tr>
                    <td><strong>Siège :</strong></td>
                    <td>Manéah / Coyah / Guinée</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="experience-badge d-flex align-items-center p-4 mb-3">
              <div className="number display-1 fw-bold text-orange">18</div>
              <div className="text ms-3">
                <h3 className="fw-bold mb-0">Ans d'Expertise</h3>
                <p className="mb-0 text-muted">
                  Un acteur majeur en Guinée et dans la sous-région.
                </p>
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

    {/* Section Historique */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3 gradient-text">Notre Histoire</h2>
            <p className="lead">
              Depuis sa fondation il y a 18 ans, ECG PLUS s'est imposé comme un acteur majeur
              dans la construction et l’expertise bâtiment en Guinée et dans la sous-région.
            </p>
            <ul className="list-unstyled mt-4">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>18 ans d’expérience</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>50+ projets réalisés</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Équipe multidisciplinaire</li>
            </ul>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src={ecgbg}
              alt="Historique ECG PLUS"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section Vision & Équipe */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 rounded shadow-sm bg-white h-100">
              <h3 className="fw-bold text-primary">Notre Vision</h3>
              <p>
                Construire durablement selon les exigences de nos clients,
                dans le respect des normes nationales et internationales.
              </p>
              <h4 className="fw-bold mt-4">Nos Valeurs</h4>
              <ul className="list-unstyled">
                <li><i className="bi bi-award-fill text-orange me-2"></i>Excellence & innovation</li>
                <li><i className="bi bi-people-fill text-orange me-2"></i>Esprit d’équipe</li>
                <li><i className="bi bi-shield-check text-orange me-2"></i>Sécurité</li>
                <li><i className="bi bi-globe2 text-orange me-2"></i>Environnement</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 rounded shadow-sm bg-white h-100">
              <h3 className="fw-bold text-primary">Notre Équipe</h3>
              <p>
                Ingénieurs, techniciens, ouvriers qualifiés et gestionnaires
                engagés pour la réussite de vos projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Chiffres clés */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="display-4 fw-bold text-orange">18</div>
              <div>Années d’Expérience</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="display-4 fw-bold text-orange">50+</div>
              <div>Projets Livrés</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="display-4 fw-bold text-orange">10M</div>
              <div>GNF Capital</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="fw-bold text-orange">RCCM</div>
              <div>GN.TCC.2021.B.00331</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Galerie – CORRIGÉE */}
    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5">
          ECG Plus en images
        </h2>

        <div
          id="presentationCarousel"
          className="carousel slide shadow-lg rounded overflow-hidden"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ecgbg} className="d-block w-100" alt="ECG PLUS" />
            </div>
            <div className="carousel-item">
              <img src={batiment} className="d-block w-100" alt="Bâtiment" />
            </div>
            <div className="carousel-item">
              <img src={commerce} className="d-block w-100" alt="Commerce" />
            </div>
            <div className="carousel-item">
              <img src={hangar} className="d-block w-100" alt="Hangar" />
            </div>
            <div className="carousel-item">
              <img src={nongo} className="d-block w-100" alt="Nongo" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
);

export default Presentation;
