import { fmt } from "@/utils/helpers";
import ContributionCalendar from "./ContributionCalendar";

const ContributionActivity = ({
  totalContri,
  cells,
}: {
  totalContri: number;
  cells: { date: string; count: number; level: number }[];
}) => {
  return (
    <section className="space-y-6 my-15">
      <div className="flex items-end justify-between">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Contribution activity
        </p>
        <span className="text-sm text-muted-foreground font-mono">
          {fmt(totalContri)} contributions in the last year
        </span>
      </div>

      {/* Bigger calendar */}
      <div className="p-4 rounded-lg border border-border/50 bg-muted/20">
        <ContributionCalendar cells={cells} />
      </div>
    </section>
  );
};

export default ContributionActivity;
