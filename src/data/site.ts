export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'whatsapp' | 'instagram' | 'airbnb' | 'phone' | 'email' | 'map';
  ariaLabel: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  airbnbUrl: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  title: string;
  description: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  nav: NavItem[];
  bookingUrl: string; // WhatsApp primary booking
  airbnbUrl: string;  // Airbnb secondary booking
  contact: ContactInfo;
  socials: SocialLink[];
  footer: {
    cta: {
      heading: string;
      subheading: string;
      buttonText: string;
      buttonUrl: string;
      secondaryButtonText?: string;
      secondaryButtonUrl?: string;
    };
    copyrightNotice: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Bosque das Águas',
  legalName: 'Portal Bosque das Águas',
  title: 'Bosque das Águas • Pousada & Natureza em Caraá, RS',
  description: 'Pousada e refúgio ecológico em Caraá, RS. Chalé confortável cercado pela mata atlântica, banho de rio no Fervedor, trilhas e café colonial.',
  logo: {
    src: '/logo.png',
    alt: 'Bosque das Águas Logo',
    width: 240,
    height: 80,
  },
  // Only 3 pages per spec
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Sobre o Bosque', href: '/info' },
    { label: 'Preços', href: '/pricing' },
  ],
  bookingUrl: 'https://wa.me/5551984224804',
  airbnbUrl: 'https://www.airbnb.com.br/rooms/54122360',
  contact: {
    address: 'Travessa Um, Estrada Alberto Alminhana, 3833 • Vila Fraga, Caraá • RS, 95515-000',
    email: 'portalbosque.dasaguas@gmail.com',
    phone: '+55 (51) 98422-4804',
    phoneRaw: '+5551984224804',
    whatsappUrl: 'https://wa.me/5551984224804',
    airbnbUrl: 'https://www.airbnb.com.br/rooms/54122360',
  },
  socials: [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5551984224804',
      icon: 'whatsapp',
      ariaLabel: 'Fale conosco pelo WhatsApp',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/portalbosquedasaguas/',
      icon: 'instagram',
      ariaLabel: 'Siga o Bosque das Águas no Instagram',
    },
    {
      name: 'Airbnb',
      url: 'https://www.airbnb.com.br/rooms/54122360',
      icon: 'airbnb',
      ariaLabel: 'Reserve nossa cabana no Airbnb',
    },
  ],
  footer: {
    cta: {
      heading: 'Faça sua reserva agora!',
      subheading: 'Venha ter experiências junto à natureza, desfrutando os viveres e os sabores da terra!',
      buttonText: 'Fazer Reserva',
      buttonUrl: 'https://wa.me/5551984224804',
      secondaryButtonText: 'Ver no Airbnb',
      secondaryButtonUrl: 'https://www.airbnb.com.br/rooms/54122360',
    },
    copyrightNotice: `© ${new Date().getFullYear()} Bosque das Águas. Todos os direitos reservados.`,
  },
};
