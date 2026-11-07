# DUOTECH GitHub Developer Hub

**Live demo:** https://duotech-github-developer-hub.vercel.app


A practical GitHub API integration project by DUOTECH.

This starter application demonstrates a real integration with the GitHub REST API:
- Reads the authenticated GitHub account and public profile.
- Lists public repositories for a configurable GitHub username.
- Displays repository metadata and recent activity.
- Keeps credentials on the server; never expose tokens in browser code.

## Tech stack
- Next.js App Router
- TypeScript
- GitHub REST API
- Server-side environment variables

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Support

For questions and support, contact: **tranvanthuan2005tt@gmail.com**.

## Configuration

Set `GITHUB_USERNAME` to the GitHub account whose public repositories you want to display.

For authenticated API access, create a fine-grained personal access token or GitHub App installation token with only the permissions required by your use case. Store it as `GITHUB_TOKEN` in your local environment or hosting provider's secret manager. Do not commit tokens.

## GitHub Developer Program

Support contact for this integration: **tranvanthuan2005tt@gmail.com**.

This repository is a working integration starter, not an automatic enrollment. To pursue the Developer Program Member profile badge:
1. Make this app operational and use GitHub APIs as part of a real integration.
2. Provide a support contact and a working public description of the integration.
3. Register the integration through GitHub's official Developer Program process: https://github.com/developer/register
4. Follow any review or verification instructions shown by GitHub.

Creating a repository or deploying this starter alone does not guarantee a badge. GitHub makes the membership decision.

## Integration details

See [Integration Overview](docs/INTEGRATION_OVERVIEW.md) for the API endpoints, data flow, security boundaries, support contact, and current limitations.

The GitHub account has completed Developer Program registration. The application is deployed on Vercel and its production homepage plus both GitHub API routes have been checked successfully (HTTP 200).

## Project structure

```
app/
  api/github/profile/route.ts
  api/github/repos/route.ts
  globals.css
  layout.tsx
  page.tsx
lib/
  github.ts
.env.example
```

## License
MIT
