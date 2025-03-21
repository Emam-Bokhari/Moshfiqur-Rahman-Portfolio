import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SectionTitle from "@/components/shared/SectionTitle";
import SkillCard from "./SkillCard";
import { getAllSkills } from "@/services/Skill";
import { TSkill } from "@/types";

export default async function Skills() {
  const { data: skills }: { data: TSkill[] } = await getAllSkills();

  type GroupedSkills = {
    [category: string]: TSkill[];
  };

  const groupedSkills: GroupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as GroupedSkills);

  return (
    <div className=" mt-10">
      {/* Section Title */}
      <SectionTitle title="My Skills & Tools" />

      {/* Tabs Section */}
      <Tabs
        defaultValue="frontend"
        className="w-full mt-10 border-2 flex flex-col items-center p-4"
      >
        <TabsList className="flex gap-4 dark:bg-[#110E18]">
          {Object.keys(groupedSkills).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize hover:text-[#8750F7] transition-all duration-300 focus:text-[#8750F7]"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="w-full flex justify-center">
          {Object.entries(groupedSkills).map(([category, skillList]) => (
            <TabsContent
              key={category}
              value={category}
              className="top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-300"
            >
              {skillList.map((skill) => (
                <SkillCard key={skill._id} skill={skill} />
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
