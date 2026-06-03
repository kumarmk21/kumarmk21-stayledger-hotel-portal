# LiteAPI Custom Hotel Portal

Custom hotel booking portal starter with Supabase schema, Cloudflare Pages Functions, LiteAPI-ready backend placeholders, booking dashboard, and commission tracking.

## Local Start

```bash
npm start
```

Open `http://localhost:3000`.

## Supabase

The Shantisphere project schema is in `supabase/schema.sql`.

Project URL:
`https://cuyowwvrlqxhlnjtsbvg.supabase.co`

## Cloudflare Pages

Set these Cloudflare Pages variables/secrets before production deployment:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LITEAPI_SANDBOX_KEY`
- `LITEAPI_PRODUCTION_KEY`
- `LITEAPI_MODE`
- `DEFAULT_COMMISSION_RATE`

Deploy:

```bash
npm run deploy:cloudflare
```
