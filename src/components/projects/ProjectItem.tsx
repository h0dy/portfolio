import type { Project } from "@/utils/types";
import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import defaultImage from "@/assets/images/default.png";
import { Github, Link } from "lucide-react";
import { useState } from "react";

const ProjectItem = ({ project }: { project: Project }) => {
  const isNotDeployed = !project.projectURL ? true : false;

  const [showMore, setShowMore] = useState(false);
  const isDescriptionLong = project.description.length >= 75;

  const projectDescription =
    !showMore && isDescriptionLong
      ? project.description.slice(0, 75)
      : project.description;

  return (
    <Card className="w-full p-0">
      <CardHeader className="p-0">
        <div className="h-40 w-full relative">
          <img
            alt={project.label}
            src={project.image || defaultImage}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{project.label}</CardTitle>
        <CardDescription className="h-full mt-2 min-h-16">
          {projectDescription}
          {isDescriptionLong && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="hover:underline text-primary hover:cursor-pointer ml-2"
            >
              {showMore ? "show less" : "show more"}
            </button>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between relative mt-5">
        <a target="_blank" href={project.gitURL}>
          <Button className="absolute left-0 right-3/5 bottom-0 cursor-pointer">
            <Github />
          </Button>
        </a>
        <a target="_blank" className="" href={project.projectURL}>
          <Button
            className="absolute right-0 left-3/5 bottom-0 cursor-pointer"
            disabled={isNotDeployed}
          >
            <Link />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
export default ProjectItem;
