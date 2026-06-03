# LiteAPI Custom Hotel Portal

This is a custom hotel booking portal starter with:

- Search-first customer experience
- LiteAPI-ready backend proxy
- Sample hotel data for development before keys are added
- User account UI placeholders
- Booking checkout flow
- Booking and commission dashboard

## Start

```bash
npm start
```

Open `http://localhost:3000`.

## Configure LiteAPI

Copy `.env.example` to `.env` and add your LiteAPI sandbox key first:

```bash
cp .env.example .env
```

The current backend keeps working with sample data if no key is present. Once your LiteAPI endpoint details and credentials are finalized, replace the placeholder LiteAPI calls in `server.js` with the exact endpoints for your account setup.

## Supabase

The database schema is in `supabase/schema.sql`. It creates profiles, settings, hotel cache, searches, prebookings, bookings, guests, commission ledger, and webhook event tables with row-level security enabled.

For Cloudflare deployment, set these environment variables in Cloudflare Pages:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LITEAPI_SANDBOX_KEY`
- `LITEAPI_PRODUCTION_KEY`
- `LITEAPI_MODE`
- `DEFAULT_COMMISSION_RATE`

## Cloudflare Pages

The project includes Cloudflare Pages Functions in `functions/` and a `wrangler.jsonc` config. Deploy with:

```bash
npm run deploy:cloudflare
```

## Suggested Next Production Pieces

- Real authentication provider
- Database persistence
- Payment SDK integration
- Webhook endpoint for booking status changes
- Production monitoring and audit logs
