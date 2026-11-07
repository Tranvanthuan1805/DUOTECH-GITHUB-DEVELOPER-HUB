# Deploy to Vercel

## Current production deployment

Live URL: https://duotech-github-developer-hub.vercel.app

The GitHub repository is connected to the Vercel project. Production builds run from the `main` branch. The current deployment has been verified to serve the dashboard and both GitHub API routes successfully.

## 1. Import the GitHub repository
1. Sign in to Vercel with the account that will own the deployment.
2. Select **Add New → Project**.
3. Import `Tranvanthuan1805/DUOTECH-GITHUB-DEVELOPER-HUB`.
4. Keep the detected framework as **Next.js** and the root directory as `./`.

## 2. Configure environment variables
Add these in Project Settings → Environment Variables:

- `GITHUB_USERNAME` = `Tranvanthuan1805`

A `GITHUB_TOKEN` is optional for this public-data demo. If you later add one to improve API rate limits, create it with the minimum permissions needed and store it only in Vercel's server-side environment variables. Never add a token to source code or a `NEXT_PUBLIC_*` variable.

## 3. Deploy
Click **Deploy**. Vercel will install dependencies and run the Next.js production build. After it finishes, open the generated HTTPS deployment URL and verify that the profile and repository cards load.

## 4. Keep the deployment updated
Connect the Vercel project to the GitHub repository. Commits pushed to `main` can then trigger production deployments automatically.

## Notes
- This app currently reads public GitHub profile and repository data.
- A public deployment is a demo of the integration, not proof of GitHub approval or a guarantee of a profile badge.
- Do not share access tokens or private keys in chat.
