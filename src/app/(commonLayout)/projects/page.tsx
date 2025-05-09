import Projects from "@/components/modules/Projects";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllProjects } from "@/services/Project";

export default async function ProjectsPage() {
  const { data: projects } = await getAllProjects();
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <SectionTitle title="My Projects" />
      <Projects projects={projects} />
    </div>
  );
}
