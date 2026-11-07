import { NextResponse } from "next/server";
import { githubFetch, type GitHubRepo } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "Tranvanthuan1805";

  try {
    const repositories = await githubFetch<GitHubRepo[]>(
      `/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12&type=owner`,
      { revalidate: 300 }
    );

    const visibleRepositories = repositories
      .filter((repository) => !repository.fork)
      .slice(0, 8);

    return NextResponse.json(visibleRepositories);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown GitHub API error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
