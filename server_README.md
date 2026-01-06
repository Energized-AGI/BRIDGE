# Crypton Backend (TypeScript Express)

This is a minimal backend skeleton for the Crypton frontend. It provides chain metadata and small helper endpoints used by the UI.

Quick start:

1. cd server
2. cp .env.example .env and edit RPC_URL_16661 and others
3. npm install
4. npm run dev

Available endpoints:
- GET /api/chains — list of supported chains
- GET /api/health — health check
- POST /api/prepare — prepare bridge payload (server does not sign)

Security:
- Do not commit secrets. Use environment variables or GitHub Secrets for CI deployments.

Next steps:
- Wire paraswap-dex-lib for /api/quote when you provide PARASWAP_API_KEY
- Add optional relayer implementation behind secure signing