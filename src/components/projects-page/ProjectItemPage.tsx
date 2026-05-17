import defaultImage from "@/assets/images/default.png";
import { Badge } from "@/components/ui/badge";
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
import { useState } from "react";
import { Button } from "../ui/button";

const ProjectItemPage = ({ project }: { project: Project }) => {
  const isNotDeployed = !project.projectURL;
  const [showMore, setShowMore] = useState(false);
  const isDescriptionLong = project.description.length >= 75;

  const projectDescription =
    !showMore && isDescriptionLong
      ? project.description.slice(0, 75)
      : project.description;

  return (
    <Card className="w-full p-0  border overflow-hidden flex flex-col">
      <CardHeader className="p-0 shrink-0">
        <div className="h-44 w-full overflow-hidden">
          <img
            alt={project.label}
            src={project.image || defaultImage}
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-5 pb-3 flex-1 flex flex-col gap-3">
        <CardTitle>{project.label}</CardTitle>
        <CardDescription className="h-full mt-2 min-h-10">
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

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono px-2 py-0.5 rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
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
              className="w-full h-11 rounded-none font-mono transition-colors cursor-pointer border-r"
            >
              <Github className="w-4 h-4 mr-2" />
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
              className="w-full h-11 rounded-none font-mono transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Link className="w-4 h-4 mr-2" />
              live
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectItemPage;
