# Mohamed Amine Marzouki: Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Deploys to Vercel with no changes.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

Scripts: `npm run dev`, `npm run build`, `npm start`, `npm run typecheck`, `npm run lint`.

## Where to edit your content

Everything lives in `src/data/`: no component needs touching.

| File | Controls |
|---|---|
| `profile.ts` | Name, intro, about text, links, CV path, navigation |
| `skills.ts` | Skill groups |
| `experience.ts` / `education.ts` | Timeline and degrees |
| `projects.ts` | Project cards. Add `github` and `demo` URLs and the buttons appear automatically |
| `extras.ts` | Certifications and activities. The Activities section and its nav link stay hidden until you add an entry |

Replace the CV by overwriting `public/cv-amin-marzouki.pdf`. The photo is `public/profile.webp` (4:5 portrait).

## Contact form (real email delivery)

The form posts to `/api/contact`, which validates with zod, applies a honeypot and a rate limit, then sends the email through [Resend](https://resend.com). Without a configured key the form shows an honest error: it never fakes success.

1. Create a free Resend account and an API key.
2. Set the variables:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (secret, server only) |
| `CONTACT_TO_EMAIL` | Inbox that receives messages |
| `CONTACT_FROM_EMAIL` | Sender. `Portfolio <onboarding@resend.dev>` works for testing, but Resend then only delivers to the email address that owns the Resend account. Verify your own domain to send anywhere |
| `NEXT_PUBLIC_SITE_URL` | Your public URL (SEO, Open Graph, sitemap) |

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New > Project**, import the repository (framework preset: Next.js, no build settings to change).
3. Add the four environment variables above (Settings > Environment Variables), set `NEXT_PUBLIC_SITE_URL` to your production URL, then redeploy.
4. Send a test message from the live contact form.

## Structure

```
src/app/            layout, page, API route, sitemap, robots, OG image
src/components/     layout/ (header, footer, theme), sections/, ui/
src/data/           all content, typed
src/lib/            zod schema, rate limiter
src/hooks/          active-section tracking
```

## Notes

- Rate limiting is in-memory per server instance: fine for a portfolio. Use Upstash/Redis for strict limits.
- Fonts are self-hosted through Fontsource, so there are no external font requests.
