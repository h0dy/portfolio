import type { Project } from "@/utils/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProjectItem from "./ProjectItem";

const ProjectsGrid = ({ list }: { list: Project[] }) => {
  const featured = list.filter((item) => item.featured);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start mt-5">
        {featured.map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <Button
            variant="outline"
            className="font-mono text-sm capitalize px-6 h-10 bg-transparent border transition-colors cursor-pointer"
          >
            See All
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsGrid;
