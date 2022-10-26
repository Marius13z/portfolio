import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex items-start justify-between">
      <ul className="relative mt-80 left-12">
        <div className="flex absolute -top-60 -left-12 space-x-28">
          <li>
            <img
              alt="project"
              className="h-[450px] shadow-md rounded-sm"
              src={project.secondImage}
            />
          </li>
          <li>
            <img
              alt="project"
              className="h-[400px] rotate-[270deg] rounded-sm shadow-md"
              src={project.thirdImage}
            />
          </li>
        </div>
        <li>
          <img
            alt="project"
            className="h-[370px] shadow-md rounded-sm"
            src={project.firstImage}
          />
        </li>
      </ul>
      <div className="flex self-center pl-12 space-y-5 flex-col">
        <div>
          <h1 className="font-bold text-2xl uppercase">about</h1>
          <blockquote className="text-sm max-w-[50ch]">
            {project.description}
          </blockquote>
        </div>
        <div>
          <h1 className="font-bold text-2xl uppercase">
            What I used in this project
          </h1>
          <ul className="grid grid-cols-2">
            {project?.skills.map((skill, i) => {
              return (
                <p key={i} className="uppercase py-2">
                  {skill}
                </p>
              );
            })}
          </ul>
        </div>

        <a
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
