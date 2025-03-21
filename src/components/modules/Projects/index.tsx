import { Fragment } from "react";

import { TProject } from "@/types/project";

import ProjectCard from "./ProjectCard";

export default function Projects({ projects }: { projects: TProject[] }) {
  return (
    <Fragment>
      <div className=" mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
