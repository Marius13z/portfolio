import React from "react";
import { useSkills } from "../hooks/hooks";

const About = () => {
  const skills = useSkills();

  return (
    <div className="flex relative flex-col justify-between items-center">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-20 p-8 lg:p-16 w-full">
        <div>
          <h3 className="font-bold  text-2xl uppercase">Skills</h3>
          <p className="text-sm w-[35ch]">
            Enthusiastic to learn new things every day, here's a showcase of my
            present skills.
          </p>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, i) => (
            <p
              key={i}
              className="uppercase  text-[0.45rem] sm:text-sm lg:text-base lg:text-center px-1 rounded-sm hover:text-white hover:bg-black transition-all duration-300 cursor-none shadow-sm py-2 bg-secondary mr-2 mb-2"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>

      <a
        rel="noreferrer"
        target="_blank"
        className="uppercase relative bottom-5 md:-bottom-8 right-2 md:right-12 self-end font-semibold px-12 py-3 lg:px-20 lg:py-4 text-lg bg-primary rounded-sm shadow-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        href="https://www.canva.com/design/DAFM1_Dq6TY/_cDA7Om-chOAyw9pbhQkjQ/view?website#2"
      >
        resume
      </a>

      <div className="flex flex-col  p-8 lg:p-16 bg-form lg:flex-row space-y-8 lg:space-x-20 self-center items-center ">
        <div className="bg-tertiary self-start p-28">
          <h3 className=" uppercase text-2xl font-bold">about</h3>
        </div>
        <div>
          <blockquote>
            I'm a self-taught developer who constanstly seeks to challenge
            himself through learning and tackling new problems. I also like
            socializing and working in a team-oriented environment because only
            together we can achieve more. I started my journey in web
            development about a year ago, while being in university, and I
            quickly fell in love with it. Since then I kept practicing relevant
            skills to deliver solutions to existing problems and needs.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
