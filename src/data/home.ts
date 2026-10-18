import { siteConfig } from './site';
import type { CTA } from '../components/sections/Hero.astro';
import type { FeatureItem } from '../components/sections/FeatureCards.astro';
import type { HighlightCard } from '../components/sections/MasonryHighlights.astro';
import type { TestimonialItem } from '../components/sections/QuoteCarousel.astro';

export interface HomeData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badgeImage: string;
    letteringImage: string;
    bgImage: string;
    bgParallax: boolean;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    showBottomWave: boolean;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    columns: 2 | 3 | 4;
    background: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string;
    items: FeatureItem[];
  };
  map: {
    badge: string;
    title: string;
    subtitle: string;
    address: string;
    zoom: number;
    height: string;
  };
  masonry: {
    photoSrc: string;
    photoAlt: string;
    cards: HighlightCard[];
    ctaText: string;
    ctaHref: string;
  };
  testimonials: {
    badge: string;
    title: string;
    showTopShape: boolean;
    backgroundGradient: string;
    items: TestimonialItem[];
  };
}

export const homeData: HomeData = {
  meta: {
    title: 'Home | Bosque das Águas',
    description:
      'Refúgio natural em Caraá, RS. Chalé confortável cercado pela mata atlântica, banho de rio no Fervedor, trilhas e café colonial incluso.',
  },
  hero: {
    title: 'Bosque das Águas',
    subtitle: '',
    badgeImage: '/images/hero-badge-orig.png',
    letteringImage: '/images/brand-letras-emcor-processed.png',
    bgImage: '/images/hero-bg-cover.jpg',
    bgParallax: true,
    showBottomWave: true,
  },
  features: {
    badge: '',
    title: '',
    subtitle: '',
    columns: 3,
    background: 'cc-3',
    items: [
      {
        title: 'Ambiente',
        description:
          'Oportunidades para trilha, banho em rio e cachoeiras. Natureza exuberante para curtir e tirar fotos.',
        image: '/shapes/feature-pousada.svg',
      },
      {
        title: 'Pousada',
        description:
          'Casa confortável, com vista para a floresta, churrasqueira ao ar livre e utensílios de cozinha.',
        image: '/shapes/feature-bosque.svg',
      },
      {
        title: 'Café',
        description:
          'Serviço incluso* à estadia, preparado toda manhã com produtos da região.',
        image: '/shapes/feature-acomodacoes.svg',
        link: {
          label: 'Consultar Preços',
          href: '/pricing',
        },
      },
    ],
  },
  map: {
    badge: 'Localização',
    title: 'Como Chegar',
    subtitle: 'Situado em Vila Fraga, no município de Caraá, Rio Grande do Sul.',
    address: siteConfig.contact.address,
    zoom: 9,
    height: 'clamp(520px, 72vh, 720px)',
  },
  masonry: {
    photoSrc: '/images/home-masonry-casa-bosque-thumb.jpg',
    photoAlt: 'Casa do Bosque iluminada ao anoitecer',
    cards: [
      {
        title: 'A Cabana',
        description:
          'Casa de dois andares com área para churrasco, cercado pela natureza. Equipada com todos os utensílios necessários e ar condicionado split.',
        colorScheme: 'cc-2',
      },
      {
        title: 'O Rio',
        description:
          'Local alguns minutos de distância do Fervedor, ponto turístico do Rio dos Sinos. Próprio para banho e trilhas aquáticas.',
        colorScheme: 'cc-3',
      },
      {
        title: 'A Natureza',
        description:
          'Estamos cercados por reservas de mata atlântica, com fauna e flora autêntica do bioma. Amplas oportunidades para se reconectar.',
        colorScheme: 'cc-4',
      },
      {
        title: 'As Trilhas',
        description:
          'As terras da região proporcionam inúmeras oportunidades de trilha e exploração, de inúmeras distâncias e dificuldades.',
        colorScheme: 'cc-2',
      },
    ],
    ctaText: 'Mais Informações e Fotos',
    ctaHref: '/info',
  },
  testimonials: {
    badge: '',
    title: '',
    showTopShape: false,
    backgroundGradient: 'linear-gradient(180deg, #5E9E42 0%, #00B3CC 100%)',
    items: [
      {
        author: 'Martin • Hóspede',
        quote:
          'Lugar perfeito pra se conectar consigo mesmo, é um dreno de estresse pois saimos de la muito renovados! além de lindo o local é bem caprichado e o José é uma pessoa muito bacana e solicita! certamente vale muito a pena a experiência!',
        avatar: '/images/testimonial-martin.jpg',
      },
      {
        author: 'Ana Silvia • Hóspede',
        quote:
          'Lugar de natureza exuberante, casa confortável, rio de água fresca e límpida , mata densa, plantas, animais e café da manhã com produtos coloniais deliciosos e frescos.\n\nO Zé foi um super anfitrião, disponível para atender todas as necessidades, deu dicas de lugares para conhecer nas redondezas e nos brindou com algumas surpresas.\n\nOs vagalumes, grilos e cigarras anunciavam as noites e fomos surpreendidos com um luau regado de estrelas e música boa de violão tocado por ele.',
        avatar: '/images/testimonial-carolina.jpg',
      },
      {
        author: 'Ana • Hóspede',
        quote:
          'Casal anfitrião, Jose Luiz e Ana foram maravilhosos, gentis, prestativos, muito simpáticos. O chalé muito acolhedor, limpissimo e muito bem equipado.\n\nA cesta do café da manhã maravilhosa ( pago parte) valor super em conta, com muitas iguarias, frutas variadas, cafezinho passado hora, nos deixando com vontade de "quero mais".\n\nSuper recomendo, lugar lindo, aconchegante e bem perto Poa/RS.',
        avatar: '/images/testimonial-viviane.png',
      },
    ],
  },
};
