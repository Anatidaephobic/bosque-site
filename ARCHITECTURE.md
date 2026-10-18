# Bosque das Águas — Architecture & Component Reference

This document serves as the canonical technical reference for building pages across the Bosque das Águas Astro site. Every section component, layout, utility, and design token is documented below with TypeScript types and copy-pasteable usage examples.

---

## 1. Directory Structure

```text
bosque-site/
├── public/
│   ├── airbnb-badge.png                # Airbnb Superhost badge (140x46)
│   ├── favicon.ico, favicon.svg        # Site favicons
│   ├── logo.png, logo-300x300.png      # Brand logos
│   ├── images/                         # 50 high-resolution photographic assets
│   │   ├── hero-bg-cover.jpg           # Hero landscape cover
│   │   ├── casa-do-bosque-facade.jpeg  # Cabin exterior
│   │   ├── gallery-cabin-*.jpg         # Cabin interior & exterior photos (01–06)
│   │   ├── gallery-nature-*.jpg        # Nature, river, trails photos (01–15)
│   │   ├── pricing-bg-*.jpg            # Backgrounds for pricing catalog
│   │   ├── testimonial-*.jpg, *.png    # Guest review avatars
│   │   └── bebidas.jpg, etc.           # Artisanal products
│   └── shapes/                         # 13 animated & decorative SVG shapes
│       ├── hero-badge-desktop.svg      # Hero badge with animated raindrops
│       ├── hero-badge-mobile.svg       # Mobile hero circular badge
│       ├── feature-*.svg               # Morphing organic blob illustrations
│       ├── shape-wavy-01-001.svg       # Wave divider (hero bottom)
│       ├── shape-origins-*.svg         # Wave dividers (features & pricing)
│       ├── shape-floats-04.svg         # Floating botanical leaf particles
│       ├── shape-rainy-10.svg          # Diagonal rain pattern (testimonials)
│       └── rio-caraa-shape.svg, etc.   # Shaped photo masks
├── src/
│   ├── data/
│   │   └── site.ts                     # Global metadata, contacts, navigation, socials
│   ├── layouts/
│   │   └── BaseLayout.astro            # Master HTML shell, SEO, fonts, Header & Footer
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro            # Top navbar + offcanvas mobile drawer
│   │   │   └── Footer.astro            # 3-zone footer: CTA, contacts, Airbnb & Instagram
│   │   ├── ui/
│   │   │   ├── Button.astro            # Pill button (primary, secondary, light, outline)
│   │   │   └── SectionHeading.astro    # Badge + title + subtitle header block
│   │   └── sections/
│   │       ├── Hero.astro              # Full-viewport hero with badge & wave
│   │       ├── FeatureCards.astro      # 2/3/4 column card grid with optional wave
│   │       ├── MapEmbed.astro          # Google Maps embed with floating info card
│   │       ├── MasonryHighlights.astro # Circular photo + feature card highlights
│   │       ├── QuoteCarousel.astro     # Translucent testimonials slider
│   │       ├── TitleBanner.astro       # Page header banner with parallax
│   │       ├── TextImage.astro         # 2-col content block (text left/right)
│   │       ├── Carousel.astro          # Single-slide photo slider with thumbnails
│   │       ├── Gallery.astro           # Multi-photo grid/masonry with dialog lightbox
│   │       ├── PricingBlock.astro      # Rates card with parallax forest background
│   │       ├── CTABanner.astro         # Standalone conversion banner (split/center)
│   │       └── ShapeDivider.astro      # SVG section divider (top/bottom)
│   ├── styles/
│   │   ├── tokens.css                  # Colors, fonts, spacing, shadows, radii
│   │   └── global.css                  # Modern reset, typography, CC matrix classes
│   └── pages/
│       └── index.astro                 # Temporary scaffold entrypoint
├── _spec/                              # Original migration specs, MAP.md, and docs
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── ARCHITECTURE.md
```

### Component Consolidation & Redundancy Notes
To keep the codebase maintainable and eliminate confusion:
- **`QuoteCarousel.astro`** is the canonical review component (`Testimonials.astro` was removed as a redundant wrapper).
- **`Carousel.astro`** is the canonical slide-by-slide slideshow component with thumbnail navigation (`Slideshow.astro` was removed as a redundant wrapper).
- **`PricingBlock.astro`** is the canonical pricing catalog block (`PriceList.astro` was removed as a redundant wrapper).
- **`Carousel` vs `Gallery` difference**:
  - `Carousel.astro` displays one large image at a time with arrow buttons, swipe support, and a bottom thumbnail navigation rail (used on `/info` for cabin & nature photo slideshows).
  - `Gallery.astro` displays an entire multi-photo grid or masonry column layout where clicking any photo launches a native HTML5 `<dialog>` lightbox modal.

---

## 2. Design Tokens Summary

All tokens are defined in `src/styles/tokens.css` and applied globally via `src/styles/global.css`.

### Colors & Palette
- `--color-primary`: `#6CB14F` (Primary Foliage Green — CTAs, active pills, accents)
- `--color-primary-hover`: `#82BD69`
- `--color-secondary`: `#114B5F` (Deep Slate Teal — headings, quote cards, dark badges)
- `--color-secondary-hover`: `#0E4051`
- `--color-neutral-light`: `#F1F5F0` (Soft Sage Neutral — section backgrounds)
- `--color-surface`: `#FFFFFF` (Pure White)
- `--color-pine-dark`: `#1C2E14` (Dark Forest Pine — footer, dark cards, headings)
- `--color-forest-green`: `#4C7C37` (Green banner fill)
- `--color-accent-teal`: `#00B3CC` (Cyan accent)
- `--color-accent-lime`: `#D6FF7F` (Lime accent)
- `--color-text`: `#212529` (Body dark charcoal)
- `--color-text-muted`: `#6C757D` (Subtitles, notes)

### Color Combination Classes (Odoo CC Matrix)
Apply these classes directly to sections, cards, or containers:
- `.cc-1`: Surface background (`#FFFFFF`), dark charcoal text.
- `.cc-2`: Soft sage background (`#F1F5F0`), dark pine headings (`#1C2E14`).
- `.cc-3`: Deep slate teal background (`#114B5F`), white text and light green links.
- `.cc-4`: Foliage green background (`#6CB14F`), white text and light neutral accents.
- `.cc-5`: Pine forest dark background (`#1C2E14`), white headings and sage text (used by Footer).

### Typography
- Font Family: `"Poppins", system-ui, sans-serif`
- Weights: `300` (Light), `400` (Regular), `600` (Semi-Bold), `700` (Bold)
- Heading utility classes: `.display-1`, `.display-2`, `.display-3`, `.display-4`, `h1` through `h6`, `.lead`, `.text-sm`, `.text-xs`.

### Buttons & Radii
- Pill border-radius: `--radius-pill: 9999px` (applied to all buttons and badges).
- Card border-radius: `--radius-card: 14px`.
- Button classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-light`, `.btn-outline`, `.btn-sm`, `.btn-lg`, `.btn-block`.

### Scroll-driven Animations
Add `.reveal-on-scroll` to any element or section; `BaseLayout.astro` registers an `IntersectionObserver` that automatically toggles `.is-revealed` when the element enters the viewport.

---

## 3. Global Site Configuration (`src/data/site.ts`)

Provides centralized configuration for contact information, external booking links, navigation, and socials.

```typescript
import { siteConfig } from '../data/site';
```

Key fields:
- `siteConfig.bookingUrl`: `'https://wa.me/5551984224804'` (Primary booking CTA)
- `siteConfig.airbnbUrl`: `'https://www.airbnb.com.br/rooms/54122360'` (Secondary booking CTA)
- `siteConfig.contact`: `{ address, email, phone, phoneRaw, whatsappUrl, airbnbUrl }`
- `siteConfig.nav`: Array of 3 pages: `Início` (`/`), `Sobre o Bosque` (`/info`), `Preços` (`/pricing`).

---

## 4. Component Catalog & Reference

### 4.1. Layout Components

#### `BaseLayout.astro`
The root HTML layout shell. Sets up SEO meta tags, Google Fonts (`Poppins`), Open Graph tags, canonical link, sticky `Header`, `Footer`, and scroll observer.

**Props:**
```typescript
export interface Props {
  title?: string;            // Default: siteConfig.title
  description?: string;      // Default: siteConfig.description
  ogImage?: string;          // Default: '/logo-300x300.png'
  currentPath?: string;      // Default: Astro.url.pathname
  showFooterCta?: boolean;   // Default: true
}
```

**Usage Example:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Sobre o Bosque | Bosque das Águas"
  description="Conheça a cabana e as belezas naturais em Caraá, RS."
  currentPath="/info"
>
  <!-- Page content here -->
</BaseLayout>
```

---

#### `Header.astro`
Sticky top navbar with centered brand logo, desktop pill navigation, primary "Fazer Reserva" CTA, and an accessible mobile offcanvas drawer containing links and direct contact details.

**Props:**
```typescript
export interface Props {
  currentPath?: string;      // Used to highlight the active page pill
}
```

**Usage Example:**
```astro
---
import Header from '../components/layout/Header.astro';
---

<Header currentPath="/info" />
```

---

#### `Footer.astro`
Shared 3-zone global footer:
1. Zone 1: Call to Action banner ("Faça sua reserva agora!") with WhatsApp (primary) and Airbnb (secondary) buttons.
2. Zone 2: Divider rule.
3. Zone 3: Physical address, direct `mailto:` link, WhatsApp phone link, Airbnb badge, and Instagram link.

**Props:**
```typescript
export interface Props {
  showCta?: boolean;         // Default: true. Set to false if page has its own bottom CTA.
}
```

**Usage Example:**
```astro
---
import Footer from '../components/layout/Footer.astro';
---

<Footer showCta={true} />
```

---

### 4.2. UI Components

#### `Button.astro`
Polymorphic pill button component. Renders an `<a>` tag when `href` is supplied, or `<button>` when omitted. Automatically handles `target="_blank"` with `rel="noopener noreferrer"`.

**Props:**
```typescript
export interface Props {
  href?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline'; // Default: 'primary'
  size?: 'sm' | 'md' | 'lg';                               // Default: 'md'
  class?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';                    // Default: 'button'
  fullWidth?: boolean;                                     // Default: false
}
```

**Usage Examples:**
```astro
---
import Button from '../components/ui/Button.astro';
---

<!-- Link Button -->
<Button href="https://wa.me/5551984224804" variant="primary" size="lg" target="_blank">
  Reservar via WhatsApp
</Button>

<!-- Secondary Outline Link -->
<Button href="/info" variant="outline">
  Saiba Mais
</Button>
```

---

#### `SectionHeading.astro`
Standardized section title block with an optional uppercase pill badge, customizable heading level tag (`h1`–`h4`), alignment, and color scheme (`light` for dark backgrounds, `dark` for light surfaces).

**Props:**
```typescript
export interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';                     // Default: 'center'
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4';                    // Default: 'h2'
  colorScheme?: 'light' | 'dark';                          // Default: 'dark'
  class?: string;
}
```

**Usage Example:**
```astro
---
import SectionHeading from '../components/ui/SectionHeading.astro';
---

<SectionHeading
  badge="Natureza & Lazer"
  title="O que você encontrará no Bosque"
  subtitle="Trilhas pela mata atlântica, cachoeiras e banho de rio no Fervedor."
  align="center"
  colorScheme="dark"
/>
```

---

### 4.3. Section Components

#### `Hero.astro`
Full-viewport or large cover banner. Features floating badge icon, typography or lettering logo, subtitle, CTA buttons, background image with desktop fixed parallax, dark overlay, and bottom organic wave shape.

**Props:**
```typescript
export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  isExternal?: boolean;
}

export interface Props {
  title?: string;
  subtitle?: string;
  badgeImage?: string;             // Default: '/shapes/hero-badge-desktop.svg'
  letteringImage?: string;         // Optional lettering PNG
  bgImage?: string;                // Default: '/images/hero-bg-cover.jpg'
  bgParallax?: boolean;            // Default: true
  overlayGradient?: string;        // Default: 'var(--gradient-overlay-hero)'
  primaryCta?: CTA;                // Default: WhatsApp booking
  secondaryCta?: CTA;              // Default: Airbnb listing
  showBottomWave?: boolean;        // Default: true
  minHeight?: string;              // Default: '90vh'
  class?: string;
}
```

**Usage Example:**
```astro
---
import Hero from '../components/sections/Hero.astro';
import { siteConfig } from '../data/site';
---

<Hero
  title="Bosque das Águas"
  subtitle="Refúgio ecológico e aconchego em Caraá, RS"
  badgeImage="/shapes/hero-badge-desktop.svg"
  letteringImage="/images/brand-letras-emcor-processed.png"
  bgImage="/images/hero-bg-cover.jpg"
  primaryCta={{
    label: "Fazer Reserva",
    href: siteConfig.bookingUrl,
    variant: "primary",
    isExternal: true
  }}
  secondaryCta={{
    label: "Ver no Airbnb",
    href: siteConfig.airbnbUrl,
    variant: "outline",
    isExternal: true
  }}
  showBottomWave={true}
/>
```

---

#### `FeatureCards.astro`
Responsive 2, 3, or 4 column feature highlights grid. Supports custom SVG illustrations/blobs, icons, badges, and read-more action links. Includes optional top wave divider.

**Props:**
```typescript
export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  badge?: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;                                     // Default: 3
  background?: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string; // Default: 'cc-2'
  showTopWave?: boolean;                                   // Default: false
  waveShape?: 'origins-teal' | 'origins-sage';             // Default: 'origins-teal'
  class?: string;
}
```

**Usage Example:**
```astro
---
import FeatureCards from '../components/sections/FeatureCards.astro';
---

<FeatureCards
  badge="Destaques"
  title="Experiências no Bosque"
  columns={3}
  background="cc-3"
  showTopWave={true}
  waveShape="origins-teal"
  features={[
    {
      title: "Ambiente",
      description: "Oportunidades para trilha, banho em rio e cachoeiras. Natureza exuberante para curtir e tirar fotos.",
      image: "/shapes/feature-pousada.svg"
    },
    {
      title: "Pousada",
      description: "Casa confortável com vista para a floresta, churrasqueira ao ar livre e utensílios completos.",
      image: "/shapes/feature-bosque.svg"
    },
    {
      title: "Café Colonial",
      description: "Serviço incluso à estadia, preparado toda manhã com produtos frescos da região.",
      image: "/shapes/feature-acomodacoes.svg",
      link: { label: "Ver Preços", href: "/pricing" }
    }
  ]}
/>
```

---

#### `MapEmbed.astro`
Interactive Google Maps iframe embed with a floating card displaying the address and an "Abrir no Google Maps" direction button.

**Props:**
```typescript
export interface Props {
  badge?: string;            // Default: 'Localização'
  title?: string;            // Default: 'Como Chegar'
  subtitle?: string;
  address?: string;          // Default: siteConfig.contact.address
  zoom?: number;             // Default: 10
  height?: string;           // Default: '480px'
  showCard?: boolean;        // Default: true
  class?: string;
}
```

**Usage Example:**
```astro
---
import MapEmbed from '../components/sections/MapEmbed.astro';
---

<MapEmbed
  badge="Localização"
  title="Onde Encontrar o Bosque"
  subtitle="Situado em Vila Fraga, no município de Caraá, Rio Grande do Sul."
  zoom={11}
  height="450px"
/>
```

---

#### `MasonryHighlights.astro`
Distinctive section layout featuring a circular photo on the left (e.g. illuminated cabin at twilight) and a 4-card matrix + full-width CTA link card on the right, backed by animated floating leaf particles (`shape-floats-04.svg`).

**Props:**
```typescript
export interface HighlightCard {
  title: string;
  description: string;
  colorScheme?: 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5';
}

export interface Props {
  photoSrc?: string;         // Default: '/images/home-masonry-casa-bosque-thumb.jpg'
  photoAlt?: string;         // Default: 'Casa do Bosque iluminada ao anoitecer'
  cards?: HighlightCard[];
  ctaText?: string;          // Default: 'Mais Informações e Fotos'
  ctaHref?: string;          // Default: '/info'
  class?: string;
}
```

**Usage Example:**
```astro
---
import MasonryHighlights from '../components/sections/MasonryHighlights.astro';
---

<MasonryHighlights
  photoSrc="/images/home-masonry-casa-bosque-thumb.jpg"
  photoAlt="Fachada iluminada da Casa do Bosque"
  ctaText="Mais Informações e Fotos"
  ctaHref="/info"
/>
```

---

#### `QuoteCarousel.astro`
Translucent glassmorphism review slider. Displays guest reviews with author avatars, ratings/role, quotation marks, previous/next controls, and indicator dots. Includes the top rainy wave shape (`shape-rainy-10.svg`).

**Props:**
```typescript
export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export interface Props {
  badge?: string;                  // Default: 'Depoimentos'
  title?: string;                  // Default: 'O que dizem nossos hóspedes'
  testimonials: TestimonialItem[];
  showTopShape?: boolean;          // Default: true
  backgroundGradient?: string;     // Default: 'var(--gradient-testimonials)'
  class?: string;
}
```

**Usage Example:**
```astro
---
import QuoteCarousel from '../components/sections/QuoteCarousel.astro';
---

<QuoteCarousel
  badge="Avaliações"
  title="O que dizem nossos hóspedes"
  testimonials={[
    {
      author: "Martin • Hóspede",
      quote: "Lugar perfeito pra se conectar consigo mesmo, é um dreno de estresse pois saímos de lá muito renovados! O local é bem caprichado e o José é super solícito!",
      avatar: "/images/testimonial-martin.jpg"
    },
    {
      author: "Ana Silvia • Hóspede",
      quote: "Lugar de natureza exuberante, casa confortável, rio de água fresca e límpida, mata densa, plantas e café da manhã com produtos coloniais frescos.",
      avatar: "/images/testimonial-carolina.jpg"
    }
  ]}
/>
```

---

#### `TitleBanner.astro`
Page header banner used on `/info` and `/pricing`. Supports fixed parallax background images, color overlays with adjustable opacity, or solid Odoo CC fills.

**Props:**
```typescript
export interface Props {
  title: string;
  subtitle?: string;
  bgImage?: string;          // e.g. '/images/info-title-bg.jpg'
  bgParallax?: boolean;      // Default: true
  background?: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string; // Default: 'cc-3'
  overlayOpacity?: number;   // Default: 0.5
  height?: string;           // Default: '280px'
  class?: string;
}
```

**Usage Example:**
```astro
---
import TitleBanner from '../components/sections/TitleBanner.astro';
---

<!-- Parallax Image Banner (/info) -->
<TitleBanner
  title="Sobre nós"
  subtitle="Conheça a história e o refúgio Bosque das Águas"
  bgImage="/images/info-title-bg.jpg"
  bgParallax={true}
  overlayOpacity={0.5}
/>

<!-- Solid Color Banner (/pricing) -->
<TitleBanner
  title="Preços"
  subtitle="Consulte diárias, fins de semana e eventos"
  background="cc-3"
  height="220px"
/>
```

---

#### `TextImage.astro`
Two-column flexible content block. Features headline, rich text content or slots, CTA button, and responsive image placement (`left` or `right`). Supports organic shape masks (`rio-caraa-shape.svg`, `noite-starry-galaxy-shape.svg`).

**Props:**
```typescript
export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  isExternal?: boolean;
}

export interface Props {
  id?: string;                                             // Optional section anchor id
  badge?: string;
  title: string;
  subtitle?: string;
  content?: string;                                        // HTML string
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';                        // Default: 'right'
  hasShapeMask?: boolean;                                  // Default: false
  background?: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string; // Default: 'cc-1'
  cta?: CTA;
  class?: string;
}
```

**Usage Example:**
```astro
---
import TextImage from '../components/sections/TextImage.astro';
---

<!-- Text Left, Image Right -->
<TextImage
  title="A Casa do Bosque"
  content="<p>A cabana foi construída em madeira e pedra, com arquitetura rústica e aconchegante. Possui dois andares, sala, cozinha e banheiro no primeiro andar, e quarto no segundo andar.</p>"
  imageSrc="/images/casa-do-bosque-facade.jpeg"
  imageAlt="Fachada da Casa do Bosque"
  imagePosition="right"
  cta={{
    label: "Veja as fotos",
    href: "#cabin-gallery",
    variant: "primary"
  }}
/>

<!-- Image Left (Organic Shape Mask), Text Right -->
<TextImage
  title="O Bosque & O Rio"
  content="<p>O Fervedor é o ponto favorito da região, com espaço cênico para nado, mergulho e banho de sol.</p>"
  imageSrc="/shapes/rio-caraa-shape.svg"
  imageAlt="Rio dos Sinos e Fervedor em Caraá"
  imagePosition="left"
  hasShapeMask={true}
/>
```

---

#### `Carousel.astro`
Single-image horizontal slide carousel with arrow controls and a scrolling bottom thumbnail navigation rail. Used for the cabin interior/exterior tour and the 15-photo nature exploration gallery on `/info`.

**Props:**
```typescript
export interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Props {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  images: SlideImage[];
  height?: string;           // Default: '580px'
  mobileHeight?: string;     // Default: '340px' (responsive height on viewports <= 768px)
  showThumbnails?: boolean;  // Default: true
  autoplay?: boolean;        // Default: false
  class?: string;
}
```

**Usage Example:**
```astro
---
import Carousel from '../components/sections/Carousel.astro';
---

<Carousel
  id="cabin-gallery"
  badge="Galeria"
  title="Conheça a Cabana"
  height="600px"
  showThumbnails={true}
  images={[
    { src: "/images/gallery-cabin-02.jpg", alt: "Quarto com parede de vidro panorâmica" },
    { src: "/images/gallery-cabin-05.jpg", alt: "Chalé iluminado ao anoitecer" },
    { src: "/images/gallery-cabin-06.jpg", alt: "Varanda com vista para a mata" },
    { src: "/images/gallery-cabin-01.jpg", alt: "Sala com lareira e fogão a lenha" },
    { src: "/images/gallery-cabin-03.jpg", alt: "Cozinha completa e sala de jantar" },
    { src: "/images/gallery-cabin-04.jpg", alt: "Banheiro rústico com vista natural" }
  ]}
/>
```

---

#### `Gallery.astro`
Multi-column photo grid or masonry gallery with a native HTML5 `<dialog>` lightbox zoom modal on photo click.

**Props:**
```typescript
export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  images: GalleryItem[];
  layout?: 'grid' | 'masonry';                             // Default: 'grid'
  columns?: 2 | 3 | 4;                                     // Default: 3
  background?: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string; // Default: 'cc-1'
  class?: string;
}
```

**Usage Example:**
```astro
---
import Gallery from '../components/sections/Gallery.astro';
---

<Gallery
  badge="Fotos"
  title="Natureza e Paisagens"
  layout="grid"
  columns={3}
  images={[
    { src: "/images/gallery-nature-01.jpg", alt: "Piscina natural no rio", aspectRatio: "landscape" },
    { src: "/images/gallery-nature-02.jpg", alt: "Trilha na mata atlântica", aspectRatio: "landscape" },
    { src: "/images/gallery-nature-15.jpg", alt: "Neblina matinal nas montanhas", aspectRatio: "landscape" }
  ]}
/>
```

---

#### `PricingBlock.astro`
The product catalog / daily rates pricing table. Displays daily rates for weekdays, Saturdays, Sundays/holidays, extra guest policies, and footnote notes on events. Backed by fixed parallax forest imagery and a top wave divider (`shape-origins-11-001.svg`).

**Props:**
```typescript
export interface PriceItem {
  title: string;
  price: string;
  period?: string;
  note?: string;
  highlighted?: boolean;
}

export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  isExternal?: boolean;
}

export interface Props {
  badge?: string;            // Default: 'Valores e Diárias'
  title?: string;            // Default: 'Tabela de Preços'
  subtitle?: string;
  items: PriceItem[];
  extraNote?: string;        // Default: '+ R$50,00 para cada hóspede adicional, até o máximo de 5 pessoas'
  footnote?: string;         // Default: 'Consultar disponibilidade para eventos.'
  bgImage?: string;          // Default: '/images/pricing-bg-desktop.jpg'
  bgImageMobile?: string;    // Optional responsive mobile background image
  bgParallax?: boolean;      // Default: true
  showTopWave?: boolean;     // Default: true
  cta?: CTA;                 // Default: WhatsApp booking
  secondaryCta?: CTA;        // Default: Airbnb listing
  class?: string;
}
```

**Usage Example:**
```astro
---
import PricingBlock from '../components/sections/PricingBlock.astro';
import { siteConfig } from '../data/site';
---

<PricingBlock
  badge="Valores e Diárias"
  title="Tabela de Preços"
  subtitle="Consulte nossos valores para estadias no refúgio"
  bgImage="/images/pricing-bg-desktop.jpg"
  items={[
    { title: "De segunda a quinta", price: "R$350/dia" },
    { title: "Sábado", price: "R$400/dia" },
    { title: "Domingos e feriados", price: "R$450/dia", note: "Valor diferenciado para datas especiais" }
  ]}
  extraNote="+ R$50,00 para cada hóspede adicional, até o máximo de 5 pessoas"
  footnote="Consultar disponibilidade para eventos."
  cta={{
    label: "Reservar pelo WhatsApp",
    href: siteConfig.bookingUrl,
    variant: "primary",
    isExternal: true
  }}
  secondaryCta={{
    label: "Ver no Airbnb",
    href: siteConfig.airbnbUrl,
    variant: "light",
    isExternal: true
  }}
/>
```

---

#### `CTABanner.astro`
Standalone call-to-action banner. Offers `split` (heading left, buttons right) or `centered` layout styles with background CC combinations.

**Props:**
```typescript
export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  isExternal?: boolean;
}

export interface Props {
  heading: string;
  subheading?: string;
  badge?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  background?: 'cc-1' | 'cc-2' | 'cc-3' | 'cc-4' | 'cc-5' | string; // Default: 'cc-4'
  layout?: 'split' | 'centered';                           // Default: 'split'
  class?: string;
}
```

**Usage Example:**
```astro
---
import CTABanner from '../components/sections/CTABanner.astro';
import { siteConfig } from '../data/site';
---

<CTABanner
  badge="Reserve Conosco"
  heading="Viva momentos inesquecíveis em meio à natureza"
  subheading="Entre em contato direto pelo WhatsApp ou faça sua reserva no Airbnb."
  background="cc-3"
  layout="split"
  primaryCta={{
    label: "Conversar no WhatsApp",
    href: siteConfig.bookingUrl,
    variant: "primary",
    isExternal: true
  }}
  secondaryCta={{
    label: "Ver no Airbnb",
    href: siteConfig.airbnbUrl,
    variant: "outline",
    isExternal: true
  }}
/>
```

---

#### `ShapeDivider.astro`
Renders responsive SVG wave and particle dividers along the top or bottom of a section.

**Props:**
```typescript
export interface Props {
  shape: 'wavy-hero' | 'origins-teal' | 'origins-sage' | 'rainy' | 'origins-pricing' | 'floats' | string;
  position?: 'top' | 'bottom';                             // Default: 'bottom'
  flipX?: boolean;                                         // Default: false
  flipY?: boolean;                                         // Default: false
  height?: string;                                         // Default: '80px'
  class?: string;
}
```

**Available Named Shapes:**
| Key | SVG File | Primary Usage |
| --- | --- | --- |
| `wavy-hero` | `/shapes/shape-wavy-01-001.svg` | Hero bottom transition wave |
| `origins-teal` | `/shapes/shape-origins-14-001-c3-114B5F.svg` | Features top teal wave |
| `origins-sage` | `/shapes/shape-origins-14-001-c3-BEDCC2.svg` | Features top soft-sage wave |
| `rainy` | `/shapes/shape-rainy-10.svg` | Testimonials top raindrops divider |
| `origins-pricing` | `/shapes/shape-origins-11-001.svg` | Pricing catalog top wave crest |
| `floats` | `/shapes/shape-floats-04.svg` | Floating leaf particle background |

**Usage Example:**
```astro
---
import ShapeDivider from '../components/sections/ShapeDivider.astro';
---

<ShapeDivider shape="wavy-hero" position="bottom" height="70px" />
```

---

## 5. Verification Commands

Run before committing any changes:
```bash
# Type check all Astro and TS files
npx astro check

# Build production static site in dist/
npm run build
```
