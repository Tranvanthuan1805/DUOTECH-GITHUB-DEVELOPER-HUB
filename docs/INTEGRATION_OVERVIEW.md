# Integration overview

## Product
DUOTECH GitHub Developer Hub is a developer-facing dashboard that reads public GitHub account and repository information through the GitHub REST API.

## Intended users
DUOTECH developers and collaborators who want a quick, readable overview of a GitHub account's public projects.

## GitHub API usage
The server-side application calls these GitHub REST API endpoints:

- `GET /users/{username}` — public profile metadata.
- `GET /users/{username}/repos?sort=updated&per_page=12&type=owner` — repositories owned by the selected account.

The dashboard uses the API response to render profile statistics and recently updated repositories. Data is fetched server-side and cached for five minutes.

## Application routes
- `GET /api/github/profile` — returns the configured GitHub public profile.
- `GET /api/github/repos` — returns up to eight non-fork repositories.

## Configuration
- `GITHUB_USERNAME`: account whose public profile and repositories are displayed.
- `GITHUB_TOKEN`: optional server-only token to raise API rate limits. Public unauthenticated requests work without it for low-volume demos. Never expose a token in client-side code or commit it.

## Current scope and limitations
This initial version reads public profile and repository data only. It does not request user authorization, modify repositories, create issues, or access private data. Those capabilities would require a separate permission review and explicit user authorization.

The project must be installed and run, then deployed to a public HTTPS host before it can be presented as a live demo. A repository link alone is not a deployed product.

## Support
Support email: tranvanthuan2005tt@gmail.com
Company website: https://www.duotechgroup.vn/
Source repository: https://github.com/Tranvanthuan1805/DUOTECH-GITHUB-DEVELOPER-HUB
