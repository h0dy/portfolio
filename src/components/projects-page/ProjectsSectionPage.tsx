import React from "react";
import ProjectsGridPage from "./ProjectsGridPage";
import { projects } from "@/utils/links";

const ProjectsSectionPage = () => {
  return (
    <section className="my-20">
      <ProjectsGridPage list={projects} />
    </section>
  );
};

export default ProjectsSectionPage;
