import { buildActivityCalendar } from "@/utils/helpers";
import type { GitHubEvent, GitHubRepo, GitHubUser, Stats } from "@/utils/types";

export const fetchAllRepos = async (
  username: string
): Promise<GitHubRepo[]> => {
  let page = 1;
  const all: GitHubRepo[] = [];
  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
    );
    if (!res.ok) break;
    const data: GitHubRepo[] = await res.json();
    all.push(...data);
    if (data.length < 100) break;
    page++;
  }
  return all;
};

export const fetchEvents = async (username: string): Promise<GitHubEvent[]> => {
  const all: GitHubEvent[] = [];
  for (let page = 1; page <= 3; page++) {
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100&page=${page}`
    );
    if (!res.ok) break;
    const data: GitHubEvent[] = await res.json();
    all.push(...data);
    if (data.length < 100) break;
  }
  return all;
};

export const fetchGitHubStats = async (username: string): Promise<Stats> => {
  const [userRes, repos, events] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetchAllRepos(username),
    fetchEvents(username),
  ]);
  if (!userRes.ok) throw new Error("GitHub user not found");
  const user: GitHubUser = await userRes.json();

  const ownRepos = repos.filter((r) => !r.fork);

  const langMap: Record<string, number> = {};
  ownRepos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1;
  });
  const totalLangRepos = Object.values(langMap).reduce((a, b) => a + b, 0) || 1;
  const langs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const yearsOnGitHub = Math.floor(
    (Date.now() - new Date(user.created_at).getTime()) /
      (1000 * 60 * 60 * 24 * 365)
  );

  const { calCells, totalContributions } = buildActivityCalendar(events, repos);

  return {
    user,
    repos,
    ownRepos,
    langs,
    totalLangRepos,
    calCells,
    yearsOnGitHub,
    totalContributions,
  };
};
