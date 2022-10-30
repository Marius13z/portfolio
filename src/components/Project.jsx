import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-start justify-between">
      <ul className="relative mt-10 lg:mt-80 max-w-3xl">
        <div className="hidden lg:flex absolute -left-12 -top-60 space-x-28">
          <li className="max-w-[25%]">
            <img
              alt="project"
              className="w-full shadow-md rounded-sm"
              src={project.secondImage}
            />
          </li>
          <li className="max-w-[25%]">
            <img
              alt="project"
              className="w-full rotate-[270deg] rounded-sm shadow-md"
              src={project.thirdImage}
            />
          </li>
        </div>
        <li>
          <img
            alt="project"
            className="w-full shadow-md rounded-sm"
            src={project.firstImage}
          />
        </li>
      </ul>
      <div className="w-full flex self-center lg:pl-12 space-y-8 flex-col">
        <div>
          <h1 className="font-bold text-xl lg:text-2xl uppercase">about</h1>
          <blockquote className="text-sm  xl:text-base ">
            {project.description}
          </blockquote>
        </div>
        <div>
          <h1 className="font-bold text-lg lg:text-2xl uppercase">
            What I used in this project
          </h1>
          <ul className="grid grid-cols-2 max-w-xs">
            {project?.skills.map((skill, i) => {
              return (
                <p
                  key={i}
                  className="text-xs sm:text-sm lg:text-base uppercase pt-2"
                >
                  {skill}
                </p>
              );
            })}
          </ul>
        </div>

        <a
          target="_blank"
          rel="noreferrer"
          className="bg-primary font-medium text-center  py-2 text-lg hover:bg-black hover:text-white transition-all duration-300 shadow-md rounded-sm"
          href={project.link}
        >
          SEE PROJECT
        </a>
      </div>
    </div>
  );
};

export default Project;
