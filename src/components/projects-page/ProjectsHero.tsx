import AlertBox from "@/components/global/AlertBox";
import PageTitle from "@/components/global/PageTitle";
import { CodeXml } from "lucide-react";
import React from "react";
const ProjectsHero = () => {
  return (
    <section className="mt-20">
      <div className="flex gap-x-2 items-center">
        <PageTitle text="projects" />
        <CodeXml size={30} />
      </div>
      <p className="sm:text-xl text-base sm:tracking-wide py-5 text-muted-foreground">
        Here are some of my projects that I&apos;ve worked on
      </p>
      <AlertBox text="Some projects may be unavailable due to inactivity, causing database downtime, while others run on free-tier hosting, leading to slower loading time." />
    </section>
  );
};

export default ProjectsHero;
