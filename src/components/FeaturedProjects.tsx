"use client";
import Data from "@/data/portfolio.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Projects {
  id: number;
  title: string;
  slug: string;
  description: string;
  developerName: string;
  isFeatured: boolean;
}

const FeaturedProjects = () => {
  const projects = Data.projects.filter((data: Projects) => data.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="  text-teal-600 font-semibold tracking-wide uppercase text-2xl ">
            Sample Projects
          </h2>
          <p className=" mt-2  font-extrabold text-white text-3xl md:text-4xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            non?
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:m-8 m-4 justify-center">
          
          {projects.map((project: Projects) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm  " >

                <div className="flex flex-col items-center text-center flex-grow p-4 sm:p-6">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 " >{ project.title }</p>
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{ project.description} </p>
                  
                  <Link href={`/projects/${project.slug}`}>
                  View More
                  </Link>

                </div>

              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/projects"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View all Projects</Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
