import { NextResponse } from "next/server";
import { githubFetch, type GitHubProfile } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "Tranvanthuan1805";

  try {
    const profile = await githubFetch<GitHubProfile>(`/users/${encodeURIComponent(username)}`, {
      revalidate: 300
    });
    return NextResponse.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown GitHub API error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
