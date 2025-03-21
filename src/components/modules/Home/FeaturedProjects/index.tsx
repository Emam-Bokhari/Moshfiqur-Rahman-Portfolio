import { Fragment } from "react";
import SectionTitle from "@/components/shared/SectionTitle";

import { getFeaturedProject } from "@/services/Project";
import { TProject } from "@/types";
import ProjectCard from "../../Projects/ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default async function FeaturedProject() {
  const { data: projects }: { data: TProject[] } = await getFeaturedProject();

  // separate the first project
  const firstProject = projects?.[0];
  const otherProjects = projects?.slice(1, 3);

  return (
    <Fragment>
      <div className="mt-10">
        <SectionTitle title="Featured Project" />
        {/* card */}
        <section className="mt-10">
          {firstProject && (
            <FeaturedProjectCard
              key={firstProject._id}
              firstProject={firstProject}
            />
          )}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {otherProjects?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
