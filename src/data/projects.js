import kankan640 from '../assets/img/kankan-640.webp';
import kankan1000 from '../assets/img/kankan-1000.webp';
import dubreka640 from '../assets/img/dubreka-640.webp';
import dubreka1080 from '../assets/img/dubreka-1080.webp';
import ansoumania640 from '../assets/img/ansoumania-640.webp';
import ansoumania1200 from '../assets/img/ansoumania-1200.webp';
import kagbelen640 from '../assets/img/kagbelen-640.webp';
import kagbelen1280 from '../assets/img/kagbelen-1280.webp';
import r4640 from '../assets/img/r4-640.webp';
import r41280 from '../assets/img/r4-1280.webp';
import hangar640 from '../assets/img/hangar-640.webp';
import hangar1280 from '../assets/img/hangar-1280.webp';

const photo = (small, large, width, height, smallWidth = 640) => ({
  src: large, srcSet: `${small} ${smallWidth}w, ${large} ${width}w`, width, height,
});

// Informations reprises de la galerie existante. Aucun statut de livraison,
// client, budget, résultat ou périmètre contractuel n'est déduit des images.
export const projects = [
  { key: 'kankan', slug: 'bibliotheque-municipale-kankan', category: 'batiment',
    imageKind: 'photo', location: 'Kankan', period: '2023',
    image: photo(kankan640, kankan1000, 1000, 750) },
  { key: 'dubreka', slug: 'residence-dubreka-fihaima', category: 'batiment',
    imageKind: 'mixed', location: 'Dubréka', period: '2020 – 2021',
    image: photo(dubreka640, dubreka1080, 1080, 1080) },
  { key: 'ansoumania', slug: 'immeuble-ansoumaniah', category: 'batiment',
    imageKind: 'mixed', location: 'Cimenterie', period: '2023 – 2024',
    image: photo(ansoumania640, ansoumania1200, 1200, 1200) },
  { key: 'kagbelen', slug: 'kagbelen-dondolikhoure', category: 'genie-civil',
    imageKind: 'mixed', location: 'Kagbelen',
    image: photo(kagbelen640, kagbelen1280, 1280, 1280) },
  { key: 'hangar', slug: 'hangars-logistiques', category: 'industrie', imageKind: 'render',
    image: photo(hangar640, hangar1280, 1280, 721, 639) },
  { key: 'r4', slug: 'conceptions-modelisations-r4', category: 'etudes', imageKind: 'render',
    image: photo(r4640, r41280, 1280, 721, 639) },
];

export const projectCategories = ['all', 'batiment', 'genie-civil', 'industrie', 'etudes'];
export const projectPath = (project) => `/realisations/${project.slug}`;
