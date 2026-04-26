import type { GitHubEvent, GitHubRepo } from "./types";
export const fmt = (n: number): string => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "k";
  return String(n);
};

export const buildActivityCalendar = (
  events: GitHubEvent[],
  repos: GitHubRepo[]
): {
  calCells: { date: string; count: number; level: number }[];
  totalContributions: number;
} => {
  const countMap: Record<string, number> = {};

  events.forEach((e) => {
    const k = e.created_at?.slice(0, 10);
    if (k) countMap[k] = (countMap[k] ?? 0) + 1;
  });

  repos.forEach((r) => {
    const k = r.pushed_at?.slice(0, 10);
    if (k) countMap[k] = (countMap[k] ?? 0) + 1;
  });

  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() - 52 * 7 + 1);
  start.setDate(start.getDate() - start.getDay());

  const maxC = Math.max(...Object.values(countMap), 1);
  const calCells: { date: string; count: number; level: number }[] = [];
  let totalContributions = 0;

  for (let i = 0; i < 52 * 7; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const k = d.toISOString().slice(0, 10);
    const count = countMap[k] ?? 0;
    const ratio = count / maxC;
    let level = 0;
    if (count > 0) {
      if (ratio < 0.25) level = 1;
      else if (ratio < 0.5) level = 2;
      else if (ratio < 0.75) level = 3;
      else level = 4;
    }
    calCells.push({ date: k, count, level });
    totalContributions += count;
  }

  return { calCells, totalContributions };
};

export const calLevelColor = (level: number, isDark = true): string => {
  if (isDark) {
    switch (level) {
      case 0:
        return "#161b22";
      case 1:
        return "#0e4429";
      case 2:
        return "#006d32";
      case 3:
        return "#26a641";
      case 4:
        return "#39d353";
      default:
        return "#161b22";
    }
  }
  switch (level) {
    case 0:
      return "#ebedf0";
    case 1:
      return "#9be9a8";
    case 2:
      return "#40c463";
    case 3:
      return "#30a14e";
    case 4:
      return "#216e39";
    default:
      return "#ebedf0";
  }
};
