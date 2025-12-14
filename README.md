Zensai Streetwear E‑Commerce (Preview)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Public Preview Pages

- `/` homepage hero and featured collections
- `/catalog` product grid preview
- `/product/[slug]` product details preview
- `/about` brand story
- `/lookbooks` visual lookbooks
- `/policies/cookies`, `/policies/returns`, `/policies/privacy`

Restricted Areas (require login)

- `/cart`, `/checkout`, `/account`, `/admin`
- Middleware enforces access using cookie `auth=1` (temporary)
- Login preview at `/login` (OTP and real auth will be wired later)

Design Tokens

- Colors: Black `#000000`, Charcoal `#1C1C1C`, Electric Red `#FF2E2E`, Neon Green `#39FF14`, White `#FFFFFF`, Ash `#B2B2B2`, Off‑White `#F5F5F5`
- Fonts: Headings `Bebas Neue`, Body `Inter`
- Implemented in `src/app/globals.css`

Project Map

- `src/app/layout.tsx` global shell (header/footer)
- `src/components/Header.tsx`, `src/components/Footer.tsx` navigation
- `src/app/page.tsx` homepage
- `src/app/catalog/page.tsx` catalog
- `src/app/product/[slug]/page.tsx` product page
- `src/app/cart/page.tsx`, `src/app/checkout/page.tsx` checkout flow
- `src/app/account/page.tsx` user dashboard preview
- `src/app/admin/page.tsx` admin dashboard preview
- `src/app/policies/*` cookies/returns/privacy
- `src/app/about/page.tsx`, `src/app/lookbooks/page.tsx` brand pages
- `src/middleware.ts` route access control
- `src/lib/db.ts` Prisma client bootstrap
- `src/lib/id.ts` hashed ID helpers for secure URLs
- `src/lib/payments/bkash.ts` bKash adapter skeleton

Database (MySQL via Prisma)

- Configure `.env` with:

```env
DATABASE_URL="mysql://user:pass@host:port/dbname"
ID_SECRET="generate-a-long-secret"
```

- Prisma schema: `prisma/schema.prisma` (BDT currency; bKash‑only payments; orders, products, variants, inventory, loyalty, messaging, RBAC, audit logs)
- Generate client: `npm run prisma:generate` (outputs to `src/generated/prisma`)
- Create schema (dev): `npm run prisma:migrate` (requires a reachable MySQL DB)
- Alternatively push: `npm run prisma:db:push`

Secure IDs

- Use `encodeId(id)` and `verifyId(encoded)` from `src/lib/id.ts` for hashed URL tokens like `/order/ENCODED`

Changing Anything (Guide)

- Pages: edit files under `src/app/*` matching routes
- Styles: tokens in `src/app/globals.css`; Tailwind utility classes throughout
- Navigation: `src/components/Header.tsx` and `Footer.tsx`
- Access rules: update `src/middleware.ts` public/private paths
- Database models: update `prisma/schema.prisma`, then run `npm run prisma:generate` and migrations
- Payments: implement real bKash API calls in `src/lib/payments/bkash.ts`
- Environment: set secrets in `.env` and restart dev server

Next Steps

- Wire real auth (email/phone login + OTP), set login cookie
- Implement bKash initialize/confirm via official API; create order after success
- Build admin RBAC, inventory system, and dashboards
- Add Bangla + English i18n, accessibility polish, micro‑interactions

## Author & Maker
- Name: Shariar Mahmud Saif (Ignacio)
- GitHub: https://github.com/ShariarMahmudSaif
- Watermark: embedded across the codebase (`data-author`, `data-alias`, base64 token)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
