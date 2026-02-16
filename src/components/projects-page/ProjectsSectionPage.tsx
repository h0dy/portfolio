import { projects } from "@/utils/links";
import ProjectsGridPage from "./ProjectsGridPage";

const ProjectsSectionPage = () => {
  return (
    <section className="my-20">
      <ProjectsGridPage list={projects} />
    </section>
  );
};

export default ProjectsSectionPage;
