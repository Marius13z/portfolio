import React from "react";
import { useProjects } from "../hooks/hooks";
import Project from "./Project";

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="py-10 lg:py-20 px-8 lg:px-16 flex-col lg:bg-split-to-right ">
      <div className="w-full lg:pb-12 flex justify-end">
        <a
          rel="noreferrer"
          target="_blank"
          className="bg-primary flex py-3 px-20 rounded-sm shadow-md hover:bg-black hover:text-white transition-all duration-300 font-bold text-lg uppercase"
          href="https://github.com/Marius13z?tab=repositories"
        >
          github
        </a>
      </div>

      {projects?.map((project) => {
        return <Project project={project} key={project?.id} />;
      })}
    </div>
  );
};

export default Projects;
