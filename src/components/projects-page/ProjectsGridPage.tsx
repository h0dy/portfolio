import type { Project } from "@/utils/types";
import ProjectItem from "./ProjectItemPage";

const ProjectsGrid = ({ list }: { list: Project[] }) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 place-items-center sm:place-items-baseline mt-5">
      {list.map((item) => {
        return <ProjectItem key={item.id} project={item} />;
      })}
    </div>
  );
};

export default ProjectsGrid;
