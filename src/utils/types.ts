export type NavLink = {
  href: string;
  label: string;
};

export type TechItem = {
  label: string;
  icon?: React.ReactNode;
  url: string;
};

export type Project = {
  id: string;
  label: string;
  description: string;
  image?: string;
  gitURL: string;
  projectURL?: string;
  tags: string[];
  featured: boolean;
};

export const LangColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#a8b9cc",
  "C++": "#f34b7d",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Swift: "#fa7343",
  Kotlin: "#A97BFF",
  Makefile: "#427819",
  Perl: "#0298c3",
  "Objective-C": "#438eff",
  Vim: "#199f4b",
  NASM: "#ae7a00",
  CMake: "#DA3434",
  Dockerfile: "#384d54",
};

export type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  created_at: string;
  pushed_at: string;
};

export type Stats = {
  user: GitHubUser;
  repos: GitHubRepo[];
  ownRepos: GitHubRepo[];
  langs: [string, number][];
  totalLangRepos: number;
  calCells: { date: string; count: number; level: number }[];
  yearsOnGitHub: number;
  totalContributions: number;
};

export type GitHubEvent = {
  type: string;
  created_at: string;
};
