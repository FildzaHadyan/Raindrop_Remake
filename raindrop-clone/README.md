# Raindrop.io 1:1 Clone

This project is a remake of https://raindrop.io/ and https://blog.raindrop.io/ using Next.js and TailwindCSS.

## Project Structure

```
/raindrop-clone
  /components         # Reusable React components (UI, sections, cards, nav, etc.)
  /data               # Mock data (blog posts, features, integrations, etc.)
  /pages              # Next.js pages (static, dynamic, API routes)
    /blog             # Blog list and dynamic blog post pages
    /api              # Mock API endpoints (optional)
    /[other-pages]    # pricing.js, integrations.js, about.js, etc.
  /public
    /icons            # All SVGs/icons (logo, features, integrations, etc.)
    /images           # All images, screenshots, blog thumbnails
    /videos           # Videos for hero section
  /styles             # Global and modular styles (Tailwind, CSS modules)
  package.json        # Project dependencies
  tailwind.config.js  # TailwindCSS config
  next.config.mjs     # Next.js config
```

## Key Principles

- **Reusable components** for all UI elements and sections
- **Mock data** for blog, features, integrations, etc.
- **Pixel-perfect, responsive design**
- **Next.js routing** for static and dynamic pages
- **Organized for scalability and maintainability**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
