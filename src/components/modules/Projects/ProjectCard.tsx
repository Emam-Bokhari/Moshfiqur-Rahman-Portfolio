import { Fragment } from "react";
import calendar from "@/assets/schedule.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Info, PlayCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TProject } from "@/types";

export default function ProjectCard({ project }: { project: TProject }) {
  const badgeColors = [
    { base: "bg-blue-100 text-blue-800", hover: "hover:bg-blue-200" },
    { base: "bg-green-100 text-green-800", hover: "hover:bg-green-200" },
    { base: "bg-yellow-100 text-yellow-800", hover: "hover:bg-yellow-200" },
    { base: "bg-purple-100 text-purple-800", hover: "hover:bg-purple-200" },
    { base: "bg-pink-100 text-pink-800", hover: "hover:bg-pink-200" },
    { base: "bg-indigo-100 text-indigo-800", hover: "hover:bg-indigo-200" },
    { base: "bg-teal-100 text-teal-800", hover: "hover:bg-teal-200" },
  ];

  const getRandomColor = () =>
    badgeColors[Math.floor(Math.random() * badgeColors.length)];
  return (
    <Fragment>
      <Card
        key={project?._id}
        className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 "
      >
        {/*  Image */}
        <div className="h-[350px]">
          <Image
            src={project?.thumbnail}
            alt="Featured Project"
            sizes="100vw"
            width={1200}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Right Side - Content */}
        <CardContent className=" p-0 space-y-4">
          {/* title and timeline*/}
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
            <h2 className="text-2xl text-[#8750F7] font-bold">
              {project?.title}
            </h2>
            {project?.projectTimeline && (
              <div className="flex items-center space-x-3 ">
                <p className="text-base text-[#989BA4]">
                  {project?.projectTimeline}
                </p>
                <Image
                  width={25}
                  height={25}
                  alt="Calendar Icon"
                  src={calendar}
                />
              </div>
            )}
          </div>
          {/* description */}
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {project?.description}
          </p>
          <div>
            {/* technologies used */}
            <div className="flex gap-4 flex-wrap">
              {project?.technologiesUsed.map((tech, index) => {
                const color = getRandomColor();
                return (
                  <Badge
                    key={index}
                    className={`${color.base} ${color.hover} px-3 py-1 rounded-md transition-all`}
                  >
                    {tech}
                  </Badge>
                );
              })}
            </div>
          </div>
          <div>
            {/* button */}
            <div className="flex gap-4 flex-wrap">
              <Button
                asChild
                className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
              >
                <Link
                  href={project?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <PlayCircle size={18} />
                </Link>
              </Button>
              {project?.frontendSourceCode && (
                <Button
                  asChild
                  className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
                >
                  <Link
                    href={project?.frontendSourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend GitHub <FaGithub size={18} />
                  </Link>
                </Button>
              )}

              {project?.backendSourceCode && (
                <Button
                  asChild
                  className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
                >
                  <Link
                    href={project?.backendSourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend GitHub <FaGithub size={18} />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          {/* details button */}
          <Link href={`/projects/${project?._id}`} className="block">
            <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2 cursor-pointer">
              <Info size={18} />
              View Project Details
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Fragment>
  );
}
