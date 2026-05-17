import defaultImage from "@/assets/images/default.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/utils/types";
import { Github, Link } from "lucide-react";
import { Button } from "../ui/button";

const ProjectItem = ({ project }: { project: Project }) => {
  const isNotDeployed = !project.projectURL;
  const isDescriptionLong = project.description.length >= 60;

  const projectDescription = isDescriptionLong
    ? project.description.slice(0, 60)
    : project.description;

  return (
    <Card className="w-full p-0 overflow-hidden flex flex-col h-95">
      <CardHeader className="p-0 shrink-0">
        <div className="h-44 w-full overflow-hidden ">
          <img
            alt={project.label}
            src={project.image || defaultImage}
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-5 pb-3 flex-1 flex flex-col gap-3 min-h-0 overflow-hidden">
        <CardTitle>{project.label}</CardTitle>

        <CardDescription className="h-full mt-2 min-h-16">
          {isDescriptionLong ? projectDescription + "..." : projectDescription}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0 shrink-0 mt-auto">
        <div className="grid grid-cols-2 w-full border-t">
          <a
            href={project.gitURL}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button
              variant="ghost"
              className="w-full h-11 rounded-none text-sm  transition-colors cursor-pointer"
            >
              <Github className="size-4 mr-2" />
              github
            </Button>
          </a>
          <a
            href={project.projectURL}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 ${isNotDeployed ? "pointer-events-none" : ""}`}
          >
            <Button
              variant="ghost"
              disabled={isNotDeployed}
              className="w-full h-11 rounded-none text-sm transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Link className="size-4 mr-2" />
              live
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
