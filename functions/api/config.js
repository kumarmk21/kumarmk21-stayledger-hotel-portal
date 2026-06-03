import { json } from '../_shared/data.js';
export function onRequestGet({env}){const commissionRate=Number(env.DEFAULT_COMMISSION_RATE||.12);return json({mode:env.LITEAPI_MODE||'sandbox',hasSandboxKey:Boolean(env.LITEAPI_SANDBOX_KEY),hasProductionKey:Boolean(env.LITEAPI_PRODUCTION_KEY),hasSupabase:Boolean(env.SUPABASE_URL&&env.SUPABASE_SERVICE_ROLE_KEY),commissionRate})}
