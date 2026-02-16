import { projects } from "@/utils/links";
import SectionTitle from "../global/SectionTitle";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Projects" />
      <ProjectsGrid list={projects} />
    </section>
  );
};

export default ProjectsSection;
