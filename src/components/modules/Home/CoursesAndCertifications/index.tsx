import SectionTitle from "@/components/shared/SectionTitle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Fragment } from "react";
import phLogo from "@/assets/ph_logo.svg";
import Link from "next/link";

export default function CoursesAndCertifications() {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Course",
      provider: "Programming Hero",
      logo: phLogo,
      certificateLink: "https://certificate-link.com",
    },
    {
      id: 2,
      title: "Next Level Web Development Course",
      provider: "Programming Hero",
      logo: phLogo,
      certificateLink: "https://certificate-link.com",
    },
  ];

  return (
    <Fragment>
      <div className="mt-10">
        {/* Section Title */}
        <SectionTitle title="Courses & Certifications" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {courses?.map((course) => (
            <Card
              key={course.id}
              className="dark:bg-[#140C1C] transition-all duration-300 dark:hover:bg-[#1d0f28] hover:scale-[1.03] overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Image
                    width={60}
                    height={60}
                    alt="programming hero logo"
                    src={course.logo}
                    className="w-16 h-16 object-contain"
                  />

                  <div className="flex-1">
                    <CardTitle className="text-[#110E18] dark:text-white">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {course.provider}
                    </CardDescription>
                    <Link
                      href={course.certificateLink}
                      target="_blank"
                      className="text-sm hover:underline mt-2 block"
                    >
                      View Certificate
                    </Link>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
