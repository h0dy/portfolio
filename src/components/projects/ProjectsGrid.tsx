import type { Project } from "@/utils/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProjectItem from "./ProjectItem";

const ProjectsGrid = ({ list }: { list: Project[] }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center sm:place-items-baseline mt-5">
          {list.map((item) => {
            if (item.featured) {
              return <ProjectItem key={item.id} project={item} />;
            }
          })}
        </div>
        <Link to="/projects">
          <Button className="capitalize place-items-center mt-5 cursor-pointer">
            See All
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsGrid;
