import React from "react";
import { useSkills } from "../hooks/hooks";

const About = () => {
  const skills = useSkills();

  return (
    <div className="flex relative px-16 flex-col justify-between pt-32 pb-8 items-center bg-split-to-bottom">
      <div className="flex space-x-20">
        <div>
          <h3 className="font-bold text-2xl uppercase">Skills</h3>
          <p className="text-sm w-[35ch]">
            Enthusiastic to learn new things every day, here's a showcase of my
            present skills.
          </p>
        </div>
        <div className="grid grid-cols-4 pb-36">
          {skills.map((skill, i) => (
            <p
              key={i}
              className="uppercase text-center px-2 rounded-sm hover:text-white hover:bg-black transition-all duration-300 cursor-none shadow-sm py-2 bg-secondary mx-2 my-2"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>

      <a
        rel="noreferrer"
        target="_blank"
        className="uppercase absolute bottom-[360px] self-end font-semibold px-20 py-4 text-lg bg-primary rounded-sm shadow-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        href="https://www.canva.com/design/DAFM1_Dq6TY/_cDA7Om-chOAyw9pbhQkjQ/view?website#2"
      >
        resume
      </a>

      <div className="flex space-x-32 self-center items-center ">
        <div className="bg-tertiary p-28">
          <h3 className=" uppercase text-2xl font-bold">about</h3>
        </div>
        <div>
          <blockquote className="w-[65ch]">
            I started my journey in web development about a year ago, while
            being in university, and I quickly fell in love with it. Since then
            I kept practicing relevant skills to deliver solutions to existing
            problems and needs. I consider myself a person who constantly seeks
            to evolve both professionally and personally. I also like to tackle
            challenges, to socialize and I strongly believe that only together
            we can achieve more.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
