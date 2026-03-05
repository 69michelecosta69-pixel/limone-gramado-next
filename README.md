# Limone Gramado - Next.js + TypeScript + Tailwind

Landing page one-page focada em marca e captação de leads (WhatsApp, Instagram e formulário), sem checkout/carrinho.

## Rodar localmente

```bash
cd C:\Users\69mic\Downloads\limone-gramado-next
npm install
npm run dev
```

Abra: http://localhost:3000

## Estrutura

- `app/layout.tsx` (SEO metadata + layout base)
- `app/page.tsx` (composição da one-page)
- `app/globals.css` (tokens visuais + utilitários Tailwind)
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/ProductSection.tsx`
- `components/StorySection.tsx`
- `components/EventsSection.tsx`
- `components/HowToServeSection.tsx`
- `components/WhereToFindSection.tsx`
- `components/FAQSection.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`
- `public/assets/hero.jpg`
- `public/assets/bottle.jpg`
- `public/assets/story.jpg`

## Substituir antes de publicar

- WhatsApp e Instagram placeholders
- E-mail placeholder
- Imagens placeholders em `public/assets`
- URL final em OpenGraph (`app/layout.tsx`)
