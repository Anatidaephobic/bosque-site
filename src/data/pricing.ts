import { siteConfig } from './site';

export interface PriceRate {
  id: string;
  title: string;
  price: string;
  period?: string;
  note?: string;
  highlighted?: boolean;
}

export interface PricingPageContent {
  title: string;
  description: string;
  banner: {
    title: string;
    subtitle?: string;
    background: string;
    height: string;
  };
  catalog: {
    badge?: string;
    title?: string;
    subtitle?: string;
    rates: PriceRate[];
    extraGuestNote: string;
    footnote: string;
    bgImageDesktop: string;
    bgImageMobile: string;
    cta: {
      label: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'light' | 'outline';
      isExternal?: boolean;
    };
    secondaryCta: {
      label: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'light' | 'outline';
      isExternal?: boolean;
    };
  };
}

/**
 * Canonical pricing rates for Bosque das Águas.
 * Edit values here to update rates across the site.
 */
export const pricingRates: PriceRate[] = [
  {
    id: 'weekdays',
    title: 'De segunda a quinta',
    price: 'R$350/dia',
  },
  {
    id: 'saturday',
    title: 'Sábado',
    price: 'R$400/dia',
  },
  {
    id: 'sunday-holidays',
    title: 'Domingos e feriados',
    price: 'R$450/dia',
  },
];

export const pricingContent: PricingPageContent = {
  title: 'Preços | Bosque das Águas',
  description:
    'Consulte as diárias e valores do Bosque das Águas em Caraá, RS: dias de semana, sábados, domingos e feriados, além de eventos especiais.',
  banner: {
    title: 'Preços',
    background: 'cc-3',
    height: '240px',
  },
  catalog: {
    rates: pricingRates,
    extraGuestNote: '+ R$50,00 para cada hóspede adicional, até o máximo de 5 pessoas',
    footnote: 'Consultar disponibilidade para eventos.',
    bgImageDesktop: '/images/pricing-bg-desktop.jpg',
    bgImageMobile: '/images/pricing-bg-mobile.jpg',
    cta: {
      label: 'Reservar pelo WhatsApp',
      href: siteConfig.bookingUrl,
      variant: 'primary',
      isExternal: true,
    },
    secondaryCta: {
      label: 'Ver no Airbnb',
      href: siteConfig.airbnbUrl,
      variant: 'light',
      isExternal: true,
    },
  },
};
