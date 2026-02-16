import { Mail } from "lucide-react";
import PageTitle from "../global/PageTitle";

const StatsHero = () => {
  return (
    <section className="mt-32">
      <div className="flex gap-x-2 items-center">
        <PageTitle text="Stats" />
        <Mail size={30} />
      </div>
      <p className="sm:text-xl text-base sm:tracking-wide py-5 text-muted-foreground">
        These are my GitHub profile stats, including both public and private
        repositories.
      </p>
    </section>
  );
};

export default StatsHero;
