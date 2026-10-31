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
  };
}

/**
 * Canonical pricing rates for Bosque das Águas.
 * Edit values here to update rates across the site.
 */
export const pricingRates: PriceRate[] = [
  {
    id: 'weekdays',
    title: 'De domingo a quinta',
    price: 'R$350/dia',
  },
  {
    id: 'friday',
    title: 'Sexta-feira',
    price: 'R$400/dia',
  },
  {
    id: 'saturday',
    title: 'Sábado',
    price: 'R$450/dia',
  },
  {
    id: 'holidays',
    title: 'Feriados',
    price: 'A combinar',
    note: 'Valores variam conforme as datas.',
  },
];

export const pricingContent: PricingPageContent = {
  title: 'Preços | Bosque das Águas',
  description:
    'Consulte as diárias do Bosque das Águas em Caraá, RS: segunda a quinta, sexta-feira, sábado e domingo. Feriados têm valores a combinar, conforme as datas.',
  banner: {
    title: 'Preços',
    background: 'cc-3',
    height: '240px',
  },
  catalog: {
    rates: pricingRates,
    extraGuestNote: '+ R$50,00 para cada hóspede adicional, até o máximo de 5 pessoas',
    footnote: 'Feriados têm valores a combinar, conforme as datas. Consulte também a disponibilidade para eventos.',
    bgImageDesktop: '/images/pricing-bg-desktop.jpg',
    bgImageMobile: '/images/pricing-bg-mobile.jpg',
    cta: {
      label: 'Reservar pelo WhatsApp',
      href: siteConfig.bookingUrl,
      variant: 'primary',
      isExternal: true,
    },
  },
};
