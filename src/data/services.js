import batiment480 from '../assets/img/batiment-480.webp';
import batiment800 from '../assets/img/batiment-800.webp';
import energie480 from '../assets/img/ingeelectric-480.webp';
import energie800 from '../assets/img/ingeelectric-800.webp';
import industrie480 from '../assets/img/industrie-480.webp';
import industrie800 from '../assets/img/industrie-800.webp';
import etudes480 from '../assets/img/etudes-480.webp';
import etudes800 from '../assets/img/etudes-800.webp';

const image = (small, large, height) => ({
  src: large, srcSet: `${small} 480w, ${large} 800w`, width: 800, height,
});

// Identifiants partagés avec les liens de l’accueil. Les références viennent
// du catalogue existant ; aucune référence énergétique n’y est documentée.
export const services = [
  { key: 'p1', id: 'batiment', image: image(batiment480, batiment800, 600), projectKey: 'dubreka' },
  { key: 'p2', id: 'energie', image: image(energie480, energie800, 600) },
  { key: 'p3', id: 'industrie', image: image(industrie480, industrie800, 534), projectKey: 'hangar' },
  { key: 'p4', id: 'etudes', image: image(etudes480, etudes800, 534), projectKey: 'r4' },
];

export const servicePath = (service) => `/expertiseservices#${service.id}`;
