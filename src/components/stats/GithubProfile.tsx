import type { GitHubUser } from "@/utils/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const GithubProfile = ({ user }: { user: GitHubUser }) => {
  const joined = new Date(user.created_at);
  return (
    <div className="flex items-start gap-5 my-14">
      <Avatar className="size-28 border border-border">
        <AvatarImage src={user.avatar_url} alt={user.login} />
        <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="space-y-2">
        <h1 className="sm:text-2xl text-xl font-medium">
          <a target="_blank" href="https://github.com/h0dy">
            {user.name ?? user.login}
          </a>
        </h1>
        <p className="text-muted-foreground font-mono">@{user.login}</p>
        {user.bio && (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            {user.bio}
          </p>
        )}
        <div className="flex flex-wrap gap-3 pt-2">
          {user.location && (
            <Badge variant="secondary" className="text-xs font-normal gap-1">
              {user.location}
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs font-normal gap-1">
            Joined{" "}
            {joined.toLocaleDateString("en", {
              year: "numeric",
              month: "short",
            })}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
