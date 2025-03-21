import { Fragment } from "react";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TSkill } from "@/types";

export default function SkillCard({ skill }: { skill: TSkill }) {
  return (
    <Fragment>
      <Card
        key={skill._id}
        className="dark:bg-[#140C1C] transition-all duration-300 dark:hover:bg-[#1d0f28] hover:scale-[1.03] overflow-hidden"
      >
        <CardHeader>
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              alt={`${skill?.name} Icon`}
              src={skill?.icon}
            />
            <div className="flex-1">
              <CardTitle className="text-[#110E18] dark:text-white">
                {skill?.name}
              </CardTitle>
              <CardDescription>{skill?.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Fragment>
  );
}
