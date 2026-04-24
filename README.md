# Doo.ma - Home Services in One Click

**Doo.ma** is Morocco's premier on-demand platform connecting customers with trusted professionals for home services including plumbing, electricity, cleaning, and more.

> **"Nta clicki, o hna ndiro!"** - You click, we handle it!

---

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library
- **Headless UI** - Accessible UI components
- **Lenis** - Buttery smooth scroll (optional)

---

## Features

### Animations & Interactions
- **Hero Section** - Floating mockup animation, bouncing particles, pulsing background glow
- **Stats** - Count-up numbers on scroll, hover lift effects, icon wiggle animations
- **CTA** - Radial gradient pulse, orange glow effect, moving background pattern
- **Testimonials** - Card hover lift + glow, floating quote marks, staggered reveal
- **Logos** - Bouncing Morocco flag, pulsing city indicators, animated text reveal
- **FAQ** - Smooth accordion animations, hover effects, staggered entrance
- **Navigation** - Smooth scroll on anchor links (desktop & mobile)

### UI/UX Highlights
- Morocco-focused design with animated flag and city badges
- Dark mode support across all components
- Fully responsive layout (mobile-first)
- Accessible UI components (Headless UI)
- External image support configured (Flaticon, etc.)

---

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
│   ├── Benefits/       # Features section
│   ├── Pricing/        # Pricing plans
│   └── ...
├── data/               # Content and configuration
│   ├── siteDetails.ts  # Site metadata
│   ├── benefits.tsx    # Features data
│   ├── stats.tsx       # Statistics data
│   └── ...
├── hooks/              # Custom React hooks
└── types/              # TypeScript type definitions
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Customization Guide

### 1. Site Details
Update `src/data/siteDetails.ts`:
```typescript
export const siteDetails = {
    siteName: 'Doo.ma',
    siteUrl: 'https://doo.ma',
    metadata: {
        title: 'Doo.ma - Your Home Services in One Click',
        description: 'Your description here',
    },
    // ...
}
```

### 2. Content Sections
Edit files in `src/data/` to customize:
- `benefits.tsx` - Feature cards content
- `stats.tsx` - Statistics numbers
- `testimonials.tsx` - Customer reviews
- `faq.tsx` - FAQ items
- `hero.ts` - Hero heading and subheading

### 3. Available Cities
Update city badges in `src/components/Logos.tsx`. Currently showing:
- Rabat, Salé, Témara, Harhoura

### 4. Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors and fonts can be customized there

### 5. Images & Assets
- Place images in `public/images/`
- Update logo: `public/images/logo.png`
- Favicon: `src/app/favicon.ico`

---

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
BASE_PATH=                 # Optional: for subpath deployment
NEXT_PUBLIC_API_URL=       # API endpoint (if applicable)
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

Build output is in `.next/` directory. Configure your platform to use Next.js deployment settings.

---

## Page Sections

| Section | File | Description |
|---------|------|-------------|
| Hero | `Hero.tsx` | Main banner with CTA & floating animations |
| Logos | `Logos.tsx` | Morocco cities availability (Rabat, Salé, Témara, Harhoura) |
| Benefits | `Benefits/` | Service features with scroll animations |
| Testimonials | `Testimonials.tsx` | Customer reviews with hover effects |
| FAQ | `FAQ.tsx` | Animated accordion Q&A |
| Stats | `Stats.tsx` | Animated count-up metrics |
| CTA | `CTA.tsx` | Call to action with glow effects |
| Footer | `Footer.tsx` | Links & info |

---

## Dependencies

**Production:**
- next ^14.2.13
- react ^18
- framer-motion ^11.11.9
- react-icons ^5.3.0
- @headlessui/react ^2.1.8

**Development:**
- typescript ^5
- tailwindcss ^3.4.1
- eslint ^8

---

## License

This project is built on the Finwise template (MIT License). Modify and use as needed for your project.

---

## Recent Updates

- **Navigation** - Smooth scroll on anchor links only (no scroll lag)
- **Hero** - Added floating animations and particle effects
- **Stats** - Count-up animation on scroll
- **Logos** - Morocco cities section with animated flag
- **CTA** - Glow pulse and radial gradient animations
- **FAQ** - Smooth accordion with hover effects

## Contact

For questions or support, contact: **contact@doo.ma**
