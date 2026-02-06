import ecgbg from '../assets/img/ecgbg.jpeg';


const Presentation = () => (
  <main className="page-without-hero presentation-page">

    {/* Hero Section Présentation */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Présentation d'ECG PLUS</h1>
        <p className="lead text-dark mb-4">18 ans d'excellence dans la construction et les travaux publics en Guinée</p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded shadow-sm bg-white">
              <h4 className="fw-bold text-primary mb-2">🏗️ Construction</h4>
              <p className="small mb-0">Bâtiments résidentiels, commerciaux et industriels</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded shadow-sm bg-white">
              <h4 className="fw-bold text-success mb-2">⚡ Énergie</h4>
              <p className="small mb-0">Solutions électriques et systèmes autonomes</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded shadow-sm bg-white">
              <h4 className="fw-bold text-warning mb-2">🔧 Génie Civil</h4>
              <p className="small mb-0">Travaux publics et infrastructures</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Identité Complète */}
    <section className="identity-section py-5" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="plaque-info shadow-lg p-4 rounded border-start border-primary border-5 bg-white">
              <h2 className="text-primary fw-bold mb-4">
                <i className="bi bi-building me-2"></i>Identité de l'Entreprise
              </h2>
              <div className="table-responsive">
                <table className="table table-sm table-borderless mb-0">
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
                      <td><strong>Capital Social :</strong></td>
                      <td>10.000.000 GNF</td>
                    </tr>
                    <tr>
                      <td><strong>RCCM :</strong></td>
                      <td>GN.TCC.2021.B.00331</td>
                    </tr>
                    <tr>
                      <td><strong>Siège Social :</strong></td>
                      <td>Manéah / Préfecture de Coyah / Guinée</td>
                    </tr>
                    <tr>
                      <td><strong>Téléphone :</strong></td>
                      <td>(+224) 623 96 62 78 / 628 33 86 41</td>
                    </tr>
                    <tr>
                      <td><strong>E-mail :</strong></td>
                      <td>contact@ecgplusgn.com</td>
                    </tr>
                    <tr>
                      <td><strong>Site web :</strong></td>
                      <td>www.ecgplusgn.com</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="experience-showcase">
              <div className="experience-badge d-flex align-items-center p-4 mb-4 bg-primary text-white rounded-4 shadow-lg">
                <div className="number display-1 fw-bold me-4">18</div>
                <div>
                  <h3 className="fw-bold mb-1">Ans d'Expertise</h3>
                  <p className="mb-0 opacity-75">
                    Un acteur majeur en Guinée et dans la sous-région
                  </p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-card text-center p-3 bg-success text-white rounded-3">
                      <h4 className="mb-1">25+</h4>
                      <small>Projets Réalisés</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card text-center p-3 bg-warning rounded-3">
                      <h4 className="mb-1">100%</h4>
                      <small>Satisfaction Client</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Présentation Détaillée */}
    <section className="presentation-detailed py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Notre Présentation</h2>

        <div className="row g-5">
          <div className="col-lg-8 mx-auto">
            <div className="presentation-content">
              <div className="content-section mb-5">
                <h3 className="text-primary mb-4">
                  <i className="bi bi-clock-history me-2"></i>Historique
                </h3>
                <p className="lead">
                  Depuis sa fondation il y a 18 ans, ECG PLUS s'est imposé comme un acteur majeur
                  dans le domaine de la construction et de l'expertise des bâtiments en Guinée et
                  aujourd'hui dans la sous-région.
                </p>
                <p>
                  Notre engagement envers l'excellence et notre expertise technique nous permettent
                  de répondre aux défis les plus complexes de nos clients avec efficacité et innovation,
                  ce qui nous a d'ailleurs permis la réalisation de plusieurs ouvrages un peu partout
                  dans les régions guinéennes.
                </p>
              </div>

              <div className="content-section mb-5">
                <h3 className="text-primary mb-4">
                  <i className="bi bi-tools me-2"></i>Notre Expertise
                </h3>
                <p>
                  À ECG PLUS, nous combinons une connaissance approfondie du secteur avec une
                  expérience pratique étendue pour offrir des solutions de construction robustes et durables.
                </p>
                <div className="expertise-list">
                  <div className="expertise-item d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <div>
                      <strong>Construction :</strong> Nous réalisons des projets de construction variés,
                      allant de complexes résidentiels aux structures commerciales et industrielles.
                    </div>
                  </div>
                  <div className="expertise-item d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <div>
                      <strong>Énergie Autonome :</strong> Nous déployons des systèmes autonomes hydriques
                      pour une indépendance totale des bâtiments en électricité.
                    </div>
                  </div>
                  <div className="expertise-item d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <div>
                      <strong>Études & Expertise :</strong> Notre équipe d'experts réalise des études
                      approfondies et des analyses précises pour évaluer l'état des bâtiments.
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-section">
                <h3 className="text-primary mb-4">
                  <i className="bi bi-eye me-2"></i>Notre Vision
                </h3>
                <p className="lead text-primary fw-bold">
                  Construction durable selon les exigences du client en vue de sa satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Valeurs & Engagements */}
    <section className="values-section py-5" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Valeurs & Engagements</h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="value-card text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-people-fill text-primary" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-primary mb-3">Équipe Multidisciplinaire</h5>
              <p className="small">
                Mise en commun de nos compétences individuelles et collectives au service de l'entreprise.
                Notre équipe forme une entité cohérente travaillant dans l'intérêt exclusif et l'honneur de l'entreprise.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-shield-check text-success" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-success mb-3">Qualité & Sécurité</h5>
              <p className="small">
                L'habilité dans le travail avec des ressources qualifiées. Zéro accident de travail.
                Respect des normes et standards nationaux et internationaux.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-hand-thumbs-up-fill text-warning" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-warning mb-3">Satisfaction Client</h5>
              <p className="small">
                Rendre crédible notre entreprise par la qualité de nos prestations.
                Respect de nos engagements et des délais auprès des fournisseurs et clients.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-tree text-info" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-info mb-3">Environnement</h5>
              <p className="small">
                Protection de l'environnement et contribution à la préservation de l'écosystème.
                Engagement citoyen manifeste pour la protection de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Moyens Humains */}
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Moyens Humains</h2>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="team-description">
              <p className="lead mb-4">
                ECG PLUS travaille de commun accord avec une équipe multidisciplinaire composée
                d'ingénieurs, d'administrateurs, de gestionnaires, de sociologue, de technicien,
                pétrie d'expériences dans plusieurs domaines.
              </p>

              <div className="team-categories">
                <div className="category-card p-3 mb-3 bg-primary text-white rounded-3">
                  <h5 className="mb-2">
                    <i className="bi bi-gear-fill me-2"></i>Personnel Technique de Chantier
                  </h5>
                  <ul className="list-unstyled mb-0 small">
                    <li>• Ingénieurs spécialisés</li>
                    <li>• Technicien superviseurs</li>
                    <li>• Ouvriers qualifiés (maçons, peintres, ferrailleurs, chauffeurs)</li>
                    <li>• Équipe de dépannage (mécanicien, soudeurs, électriciens)</li>
                  </ul>
                </div>

                <div className="category-card p-3 bg-success text-white rounded-3">
                  <h5 className="mb-2">
                    <i className="bi bi-people-fill me-2"></i>Personnel d'Appui
                  </h5>
                  <ul className="list-unstyled mb-0 small">
                    <li>• Conseillers techniques</li>
                    <li>• Ingénieur en Génie Civil</li>
                    <li>• Gestionnaires de projet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="team-image-container">
              <div className="team-placeholder bg-gradient text-white d-flex align-items-center justify-content-center rounded-4 shadow-lg" style={{height: '400px', backgroundColor: 'var(--gas-primary)'}}>
                <div className="text-center">
                  <i className="bi bi-people-fill" style={{fontSize: '4rem', opacity: '0.7'}}></i>
                  <h4 className="mt-3">Notre Équipe d'Experts</h4>
                  <p className="mb-0 text-white">Professionnels qualifiés et expérimentés</p>
                  <div className="mt-3">
                    <span className="badge bg-white text-primary me-2">50+ Collaborateurs</span>
                    <span className="badge bg-white text-primary">18 Ans d'Expérience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Documents Juridiques */}
    <section className="documents-section py-5" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Documents Juridiques</h2>

        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-4">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-file-earmark-text text-primary" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-primary mb-3">RCCM</h5>
              <p className="small text-muted mb-2">Registre du Commerce et du Crédit Mobilier</p>
              <div className="document-number p-2 rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                <strong>GN.TCC.2021.B.00331</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-cash-coin text-success" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-success mb-3">Capital Social</h5>
              <p className="small text-muted mb-2">Capital social de l'entreprise</p>
              <div className="document-number p-2 rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                <strong>10.000.000 GNF</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-bank text-warning" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-warning mb-3">Références Bancaires</h5>
              <p className="small text-muted mb-2">Banque partenaire</p>
              <div className="document-number p-2 rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                <strong>FIRSTBANK</strong><br/>
                <small>302203000027011</small>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="legal-notice p-4 bg-white rounded-4 shadow-lg">
            <h5 className="text-primary mb-3">Mentions Légales</h5>
            <p className="small text-muted mb-0">
              ECG PLUS SARL est une société à responsabilité limitée immatriculée au Registre du Commerce
              et du Crédit Mobilier sous le numéro GN.TCC.2021.B.00331, avec un capital social de 10.000.000 GNF.
              Siège social : Manéah / Préfecture de Coyah / République de Guinée.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 section-alt-white">
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
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>25+ projets réalisés</li>
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
    <section className="py-5" style={{backgroundColor: 'var(--gas-primary)'}}>
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
              <div className="display-4 fw-bold text-orange">25+</div>
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

  </main>
);

export default Presentation;
