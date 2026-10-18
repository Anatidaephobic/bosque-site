# Bosque das Águas 🌿🌊

> Site oficial do refúgio ecológico **Bosque das Águas** em Caraá, Rio Grande do Sul.
> Desenvolvido com [Astro](https://astro.build), [TypeScript](https://www.typescriptlang.org/) e [Bun](https://bun.sh).

---

## 📖 Visão Geral

Este projeto é uma versão modular, rápida e moderna desenvolvida para migração da plataforma anterior (Odoo). O site foi construído priorizando performance, manutenibilidade e flexibilidade:

- **100% Estático (SSG):** Páginas pré-renderizadas sem dependência de banco de dados ou runtime de servidor.
- **Data-Driven:** Todo o conteúdo textual, fotos, dados de contato e tabelas de preços ficam isolados em arquivos TypeScript dedicados em `src/data/`, facilitando edições sem tocar em markup HTML.
- **Design Tokens Nativos:** Sistema de design baseado em variáveis CSS customizadas (`src/styles/tokens.css`), garantindo consistência visual de cores, fontes, sombras e espaçamentos sem sobrecarga de frameworks externos.
- **Componentes Modulares:** Seções reutilizáveis e desacopladas (`Hero`, `FeatureCards`, `Carousel`, `MapEmbed`, `QuoteCarousel`, `PricingBlock`, etc.).
- **Carrosséis & Galeria Leves:** Navegação fluida com CSS Scroll-Snap nativo, suporte a gestos touch e fallback progressivo.
- **Reserva Simplificada:** Redirecionamento direto para atendimento via WhatsApp e listagem oficial no Airbnb.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Runtime & Package Manager** | [Bun](https://bun.sh) |
| **Framework** | [Astro 5+](https://astro.build) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Estilização** | CSS Nativo com Design Tokens (`tokens.css` + `global.css`) |
| **Tipografia** | Poppins (via Google Fonts) |
| **Mídia & Assets** | SVGs vetoriais animados e imagens otimizadas em `/public/` |

---

## 🚀 Como Executar

### Pré-requisitos

- [Bun](https://bun.sh) instalado (`curl -fsSL https://bun.sh/install | bash` ou `brew install bun`)

### Instalação

```bash
# Instalar dependências
bun install
```

### Comandos Disponíveis

| Comando | Descrição |
|---|---|
| `bun run dev` | Inicia o servidor local de desenvolvimento em `http://localhost:4321` |
| `bun run build` | Compila o site estático para a pasta `dist/` |
| `bun run preview` | Pré-visualiza localmente a build de produção |
| `bun run check` | Executa a verificação estática de tipos do Astro e TypeScript |

---

## 📁 Estrutura do Projeto

```text
bosque-site/
├── public/                     # Arquivos estáticos servidos diretamente
│   ├── images/                 # Fotografias da cabana, rio, produtos e hóspedes
│   ├── shapes/                 # Divisores de seção em SVG e formas orgânicas
│   ├── logo.png                # Identidade visual da marca
│   └── favicon.ico             # Ícones do site
├── src/
│   ├── components/
│   │   ├── layout/             # Header (com gaveta móvel) e Footer unificado
│   │   ├── sections/           # Seções estruturadas (Hero, Map, Carrossel, etc.)
│   │   └── ui/                 # Elementos básicos (Button, SectionHeading)
│   ├── data/                   # Conteúdo e configuração desacoplados
│   │   ├── home.ts             # Dados da página inicial
│   │   ├── info.ts             # Dados da página "Sobre o Bosque"
│   │   ├── pricing.ts          # Tarifário e regras de estadia
│   │   └── site.ts             # Configurações globais, links e contatos
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shell HTML comum, metadados e scripts globais
│   ├── pages/
│   │   ├── index.astro         # Página inicial (/)
│   │   ├── info.astro          # Sobre o Bosque (/info)
│   │   └── pricing.astro       # Preços e diárias (/pricing)
│   └── styles/
│       ├── tokens.css          # Paleta de cores, tipografia, espaçamentos
│       └── global.css          # Reset, utilitários e animações de scroll
├── ARCHITECTURE.md             # Documentação técnica detalhada dos componentes
├── astro.config.mjs            # Configuração do Astro
├── bun.lock                    # Lockfile do Bun
├── package.json                # Manifesto do projeto
└── tsconfig.json               # Configuração do TypeScript
```

---

## ✏️ Como Editar Conteúdo

Para alterar informações do site, você normalmente só precisa editar os arquivos dentro de `src/data/`:

- **Links de Contato, Telefone e Redes Sociais:** Edite `src/data/site.ts`.
- **Textos, Destaques e Depoimentos da Home:** Edite `src/data/home.ts`.
- **História, Seções e Fotos do Bosque:** Edite `src/data/info.ts`.
- **Valores das Diárias e Informações de Preço:** Edite `src/data/pricing.ts`.

Para entender os parâmetros e props de cada componente de seção, consulte a documentação detalhada em [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## 📄 Licença

Todos os direitos de imagem, marca e conteúdo pertencem ao **Bosque das Águas**.
