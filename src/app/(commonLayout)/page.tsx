import Banner from "@/components/modules/Home/Banner";
import { Pattern } from "@/components/modules/Home/Pattern";
import Skills from "@/components/modules/Home/Skills";

export default async function HomePage() {
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <Banner />
      <Pattern />
      <Skills />
      {/* <FeaturedProject featuredProject={featuredProject} /> */}
    </div>
  );
}
