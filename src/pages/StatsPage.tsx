import { fetchGitHubStats } from "@/api/github";
import ContributionActivity from "@/components/stats/ContributionActivity";
import GithubLanguages from "@/components/stats/GithubLanguages";
import GithubProfile from "@/components/stats/GithubProfile";
import { Separator } from "@/components/ui/separator";
import type { Stats } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const StatsPage = () => {
  const [animateLangs, setAnimateLangs] = useState(false);

  const {
    data: stats,
    isLoading,
    isSuccess,
    error,
  } = useQuery<Stats, Error>({
    queryKey: ["github-stats", "h0dy"],
    queryFn: () => fetchGitHubStats("h0dy"),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isSuccess && !animateLangs) {
    setTimeout(() => setAnimateLangs(true), 200);
  }

  if (isLoading) {
    return (
      <div className="p-8 flex items-center gap-3 text-muted-foreground text-sm">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </span>
        Loading GitHub stats…
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-destructive text-sm">{error.message}</div>;
  }

  if (!stats) return null;

  const { user, langs, totalLangRepos, calCells, totalContributions } = stats;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <GithubProfile user={user} />
      <Separator />
      <ContributionActivity cells={calCells} totalContri={totalContributions} />
      <Separator />
      <GithubLanguages
        animateLangs={animateLangs}
        langs={langs}
        totalLang={totalLangRepos}
      />
    </div>
  );
};

export default StatsPage;
