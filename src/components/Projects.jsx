import React from "react";
import { useProjects } from "../hooks/hooks";
import Project from "./Project";

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="py-20 px-16 flex-col bg-split-to-right ">
      <div className="w-full flex justify-end">
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
