# carlostech.net.ar

Professional landing page for Carlos Maceira Garcia Coni — Backend Architect specializing in Fintech, Payment Systems, ISO 8583, Go, NestJS, and DevOps.

Built with [Astro](https://astro.build) + [TailwindCSS v4](https://tailwindcss.com).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── config/
│   └── site.ts          # All personal info, links, SEO — edit this file
├── components/
│   ├── Nav.astro        # Sticky navigation with mobile menu
│   ├── Hero.astro       # Full-viewport hero section
│   ├── About.astro      # Technical bio & focus areas
│   ├── TechStack.astro  # Technology badges by category
│   ├── Experience.astro # Expertise cards + timeline
│   ├── Projects.astro   # Project cards (mock data)
│   ├── Contact.astro    # Email, LinkedIn, GitHub links
│   └── Footer.astro     # Copyright + social icons
├── layouts/
│   └── Layout.astro     # Base layout with SEO, OG, JSON-LD
├── pages/
│   └── index.astro      # Main page
└── styles/
    └── global.css       # Tailwind config + custom styles
```

## Configuration

All personal information is centralized in `src/config/site.ts`:

- Name, title, tagline
- Email, LinkedIn, GitHub URLs
- Tech stack items
- Expertise areas
- Experience timeline
- Project cards
- SEO keywords & meta

Simply edit this file to customize the site content.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Astro — click **Deploy**

### Connect Custom Domain (carlostech.net.ar)

1. In your Vercel project → **Settings** → **Domains**
2. Add `carlostech.net.ar`
3. Configure DNS at your registrar:
   - **Option A** (recommended): CNAME record → `cname.vercel-dns.com`
   - **Option B**: A record → `76.76.21.21`
4. Vercel provisions SSL automatically

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Framework | Astro                         |
| Styling   | TailwindCSS v4                |
| Language  | TypeScript                    |
| Fonts     | Inter (Google Fonts)          |
| Deploy    | Vercel (static)               |
| SEO       | Meta tags, OpenGraph, JSON-LD |

## License

MIT
