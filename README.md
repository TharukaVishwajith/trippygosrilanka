# TrippyGo Sri Lanka

A Next.js site for showcasing tours and travel stories. Blog content is now managed through [Sanity](https://www.sanity.io/) with an embedded Studio at `/studio`.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Copy environment variables and update them with your project details

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Dataset name (e.g., `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION`: API version date
- `SANITY_READ_TOKEN`: Optional token for private datasets or draft access

3. Run the development server

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) for the site
- Open [http://localhost:3000/studio](http://localhost:3000/studio) for Sanity Studio

## Content model

Blog posts are defined by the `post` schema with fields for title, slug, excerpt, category, published date, read time, main image, and rich-text body. Add new posts directly in the Studio and they will appear on the `/blogs` page.

## Notes

- The blog grid revalidates every 60 seconds to pick up fresh content.
- Remote Sanity assets are allowed via `cdn.sanity.io` in `next.config.ts`.
