const API_BASE = "https://api.github.com";

type GitHubFetchOptions = {
  revalidate?: number;
};

export async function githubFetch<T>(
  path: string,
  options: GitHubFetchOptions = {}
): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    next: { revalidate: options.revalidate ?? 300 }
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub API error (${response.status}): ${detail}`);
  }

  return response.json() as Promise<T>;
}

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
};

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};
