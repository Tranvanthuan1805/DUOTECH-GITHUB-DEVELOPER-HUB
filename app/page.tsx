type Profile = {
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

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

async function getData<T>(path: string): Promise<T | null> {
  try {
    const base = process.env.APP_URL || "http://localhost:3000";
    const response = await fetch(`${base}${path}`, { cache: "no-store" });
    if (!response.ok) return null;
    return response.json() as Promise<T>;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [profile, repositories] = await Promise.all([
    getData<Profile>("/api/github/profile"),
    getData<Repository[]>("/api/github/repos")
  ]);

  return (
    <main className="shell">
      <nav className="topbar">
        <a className="brand" href="#"><span className="brand-mark">D</span> DUOTECH <span className="muted">/ DEVELOPER HUB</span></a>
        <a className="github-link" href="https://github.com/Tranvanthuan1805/DUOTECH-GITHUB-DEVELOPER-HUB" target="_blank" rel="noreferrer">View source ↗</a>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span className="pulse" /> LIVE GITHUB API INTEGRATION</div>
        <h1>Build. Connect.<br /><span>Ship with GitHub.</span></h1>
        <p className="intro">A working integration hub that connects DUOTECH tools to GitHub’s public developer platform.</p>
        <div className="hero-actions">
          <a className="primary-button" href="https://github.com/developer/register" target="_blank" rel="noreferrer">GitHub Developer Program ↗</a>
          <a className="secondary-button" href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">Read API docs</a>
        </div>
      </section>

      {profile ? (
        <section className="profile-card">
          <img src={profile.avatar_url} alt={profile.login} className="avatar" />
          <div className="profile-main">
            <div className="eyebrow">CONNECTED PUBLIC PROFILE</div>
            <h2>{profile.name || profile.login}</h2>
            <a className="handle" href={profile.html_url} target="_blank" rel="noreferrer">@{profile.login} ↗</a>
            <p>{profile.bio || "Building products and integrations with GitHub."}</p>
          </div>
          <div className="stats">
            <div><strong>{profile.public_repos}</strong><span>Repositories</span></div>
            <div><strong>{profile.followers}</strong><span>Followers</span></div>
            <div><strong>{profile.following}</strong><span>Following</span></div>
          </div>
        </section>
      ) : (
        <section className="notice">GitHub profile data is not available yet. Start the app and check the server configuration.</section>
      )}

      <section className="section-heading">
        <div><div className="eyebrow">FROM THE GITHUB API</div><h2>Recently updated projects</h2></div>
        <span className="live-label">● API DATA</span>
      </section>

      {repositories?.length ? (
        <section className="repo-grid">
          {repositories.map((repo) => (
            <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
              <div className="repo-title"><span>▱</span>{repo.name}<span className="arrow">↗</span></div>
              <p>{repo.description || "No description provided."}</p>
              <div className="repo-meta">
                <span>{repo.language || "Other"}</span>
                <span>★ {repo.stargazers_count}</span>
                <span>⑂ {repo.forks_count}</span>
                <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </a>
          ))}
        </section>
      ) : (
        <section className="notice">Repository data will appear here when the API is available.</section>
      )}

      <footer><span>© {new Date().getFullYear()} DUOTECH</span><span>Built with the GitHub REST API</span></footer>
    </main>
  );
}
