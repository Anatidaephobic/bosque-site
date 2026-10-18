import type { SlideImage } from '../components/sections/Carousel.astro';
import type { CTA } from '../components/sections/TextImage.astro';
import { siteConfig } from './site';

export interface SectionContent {
  title: string;
  badge?: string;
  subtitle?: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  hasShapeMask?: boolean;
  background: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5';
  cta?: CTA;
}

export interface CarouselSectionData {
  id: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  images: SlideImage[];
  height: string;
  mobileHeight?: string;
  showThumbnails: boolean;
  autoplay: boolean;
}

export interface InfoPageData {
  meta: {
    title: string;
    description: string;
  };
  titleBanner: {
    title: string;
    subtitle: string;
    bgImage: string;
    bgParallax: boolean;
    overlayOpacity: number;
    height: string;
  };
  cabinSection: SectionContent;
  cabinGallery: CarouselSectionData;
  natureSection: SectionContent;
  natureGallery: CarouselSectionData;
  nightsSection: SectionContent;
  productsSection: SectionContent;
}

export const infoPageData: InfoPageData = {
  meta: {
    title: 'Sobre o Bosque • Bosque das Águas',
    description:
      'Conheça a Casa do Bosque, trilhas ecológicas, banho no Fervedor do Rio dos Sinos, observação astronômica da Via Láctea e produtos artesanais em Caraá, RS.',
  },

  titleBanner: {
    title: 'Sobre nós',
    subtitle: 'Conheça o refúgio ecológico Bosque das Águas em Caraá, RS',
    bgImage: '/images/info-title-bg.jpg',
    bgParallax: true,
    overlayOpacity: 0.5,
    height: '300px',
  },

  cabinSection: {
    title: 'A Casa do Bosque',
    content:
      '<p>A cabana foi construída em madeira e pedra, com arquitetura rústica e aconchegante. Possui dois andares, com sala, cozinha e banheiro no primeiro andar, e quarto no segundo andar.</p><p>No térreo temos uma área externa coberta com churrasqueira e mesa para refeições ao ar livre.</p>',
    imageSrc: '/images/casa-do-bosque-facade.jpeg',
    imageAlt: 'Fachada da Casa do Bosque com deck e cercada pela mata atlântica',
    imagePosition: 'right',
    hasShapeMask: false,
    background: 'cc-1',
    cta: {
      label: 'Veja as fotos',
      href: '#Image-Gallery',
      variant: 'primary',
    },
  },

  cabinGallery: {
    id: 'Image-Gallery',
    height: '580px',
    mobileHeight: '340px',
    showThumbnails: true,
    autoplay: false,
    images: [
      {
        src: '/images/gallery-cabin-02.jpg',
        alt: 'Quarto com parede de vidro panorâmica e vista para a copa das árvores',
        caption: 'Quarto com parede de vidro panorâmica e vista para a mata nativa',
      },
      {
        src: '/images/gallery-cabin-05.jpg',
        alt: 'Vista noturna da cabana iluminada em meio à floresta',
        caption: 'Fachada iluminada ao anoitecer com iluminação aconchegante',
      },
      {
        src: '/images/gallery-cabin-06.jpg',
        alt: 'Deck de madeira com cadeiras de descanso e vista para o vale',
        caption: 'Varanda e deck de descanso com vista panorâmica para o vale',
      },
      {
        src: '/images/gallery-cabin-01.jpg',
        alt: 'Sala de estar com lareira ecológica a lenha e móveis rústicos',
        caption: 'Sala de estar com lareira ecológica e ambiente rústico',
      },
      {
        src: '/images/gallery-cabin-03.jpg',
        alt: 'Cozinha completa com mesa rústica de jantar e utensílios',
        caption: 'Cozinha equipada com mesa de jantar e utensílios completos',
      },
      {
        src: '/images/gallery-cabin-04.jpg',
        alt: 'Banheiro rústico com ampla janela para a natureza',
        caption: 'Banheiro rústico com luz natural e vista para a floresta',
      },
    ],
  },

  natureSection: {
    title: 'O Bosque',
    content:
      '<p>O bosque se destaca por suas oportunidades de trilha e banho. O Fervedor é o ponto favorito da região, com espaço cênico para nado, mergulho e banho de sol. Ainda temos trilhas aquáticas, florestais, e de morro.</p><p>Traga roupas de banho, protetor solar, e repelente.</p>',
    imageSrc: '/shapes/rio-caraa-shape.svg',
    imageAlt: 'Rio dos Sinos e Fervedor em Caraá com águas cristalinas',
    imagePosition: 'left',
    hasShapeMask: true,
    background: 'cc-2',
    cta: {
      label: 'Veja as fotos',
      href: '#nature-gallery',
      variant: 'primary',
    },
  },

  natureGallery: {
    id: 'nature-gallery',
    height: '580px',
    mobileHeight: '340px',
    showThumbnails: true,
    autoplay: false,
    images: [
      {
        src: '/images/gallery-nature-15.jpg',
        alt: 'Neblina matinal nas montanhas de Caraá',
        caption: 'Neblina matinal suave subindo pelas encostas da serra',
      },
      {
        src: '/images/gallery-nature-14.jpg',
        alt: 'Pássaros sobrevoando a mata atlântica na serra',
        caption: 'Pássaros nativos sobrevoando a crista da mata em névoa',
      },
      {
        src: '/images/gallery-nature-13.jpg',
        alt: 'Raios de sol dourados filtrando pela copa das árvores',
        caption: 'Raios de sol dourados iluminando a copa das árvores nativas',
      },
      {
        src: '/images/gallery-nature-12.jpg',
        alt: 'Flora nativa e rica biodiversidade botânica de Caraá',
        caption: 'Riqueza botânica e flora nativa preservada de Caraá',
      },
      {
        src: '/images/gallery-nature-11.jpg',
        alt: 'Riacho de montanha cascateando sobre pedras com musgo',
        caption: 'Água pura de montanha cascateando entre pedras de granito',
      },
      {
        src: '/images/gallery-nature-10.jpg',
        alt: 'Trilha ecológica margeando corredeiras do rio',
        caption: 'Trilha ecológica acompanhando as corredeiras do Rio dos Sinos',
      },
      {
        src: '/images/gallery-nature-09.jpg',
        alt: 'Seixos coloridos e lisos sob águas correntes cristalinas',
        caption: 'Seixos coloridos esculpidos pelas águas cristalinas',
      },
      {
        src: '/images/gallery-nature-08.jpg',
        alt: 'Visibilidade subaquática cristalina revelando o leito de pedras',
        caption: 'Transparência total revelando as pedras no leito do rio',
      },
      {
        src: '/images/gallery-nature-07.jpg',
        alt: 'Amanhecer com sol nascente iluminando o horizonte serrano',
        caption: 'Amanhecer de inverno dourado sobre as colinas serranas',
      },
      {
        src: '/images/gallery-nature-06.jpg',
        alt: "Luz solar reluzindo sobre corredeiras e quedas d'água",
        caption: 'Luz solar dançando sobre as corredeiras límpidas',
      },
      {
        src: '/images/gallery-nature-05.jpg',
        alt: 'Crepúsculo tranquilo com reflexos na curva do rio',
        caption: 'Reflexos do entardecer na tranquilidade da curva do rio',
      },
      {
        src: '/images/gallery-nature-04.jpg',
        alt: 'Poço natural profundo e límpido para nado e mergulho',
        caption: 'Poço natural profundo e convidativo para um banho revigorante',
      },
      {
        src: '/images/gallery-nature-03.jpg',
        alt: 'Névoa matinal suave sobre as piscinas naturais de pedra',
        caption: 'Bruma matinal pairando sobre as piscinas de pedra natural',
      },
      {
        src: '/images/gallery-nature-02.jpg',
        alt: 'Curso de água cristalina serpenteando pela mata nativa',
        caption: 'Riacho límpido serpenteando por trechos intocados da mata',
      },
      {
        src: '/images/gallery-nature-01.jpg',
        alt: 'Piscina natural cor esmeralda no Fervedor do Rio dos Sinos',
        caption: 'Piscina natural cor esmeralda no Fervedor do Rio dos Sinos',
      },
    ],
  },

  nightsSection: {
    title: 'As noites',
    content:
      '<p>Nossa localização, protegida por 3 cadeias de montanhas e distante das luzes urbanas, proporciona a observação astronômica com impressionante nitidez da Via Láctea.</p>',
    imageSrc: '/shapes/noite-starry-galaxy-shape.svg',
    imageAlt: 'Céu estrelado e Via Láctea vistos com nitidez do Bosque das Águas',
    imagePosition: 'right',
    hasShapeMask: true,
    background: 'cc-1',
    cta: {
      label: 'Saiba mais',
      href: siteConfig.bookingUrl,
      variant: 'primary',
      isExternal: true,
    },
  },

  productsSection: {
    title: 'Nossos Produtos',
    content:
      '<p>Deliciosos licores e geleias de frutas nativas colhidos direto de nosso pomar orgânico.</p><p>Solicite com nossos anfitriões!</p>',
    imageSrc: '/images/bebidas.jpg',
    imageAlt: 'Licores e conservas artesanais de frutas nativas do pomar orgânico',
    imagePosition: 'left',
    hasShapeMask: false,
    background: 'cc-2',
    cta: {
      label: 'Descubra mais',
      href: siteConfig.bookingUrl,
      variant: 'primary',
      isExternal: true,
    },
  },
};
