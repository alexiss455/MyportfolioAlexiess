import React from "react";
import porfile from "../img/alexiesspic.png"
export default function () {
  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Git & GitHub",
    "Rest API",
  ];
  return (
    <div id="about" className="sm:pt-36 max-sm:pt-20" data-aos="fade-up">
      <div className="mb-8">
        <h1 className="textFont textFonts text-Lightest-Slate">About Me</h1>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 text-Slate">
        <div data-aos="fade-left">
          <p>
            Hi there! I'm Alexiess, and I have a passion for crafting digital
            experiences that thrive online. My fascination with web development
            began during my college years, and since then, I've taken on the
            challenge of mastering the web development by enrolling in a rigorous Web
            Development Bootcamp on Udemy in November 2022.
          </p>
          <p className=" mt-6">
          During the bootcamp, I've been learning about the following technologies:
          </p>
          <div className=" grid grid-cols-3 max-md:grid-cols-2 mt-4 font-sans font-semibold">
            {technologies.map((tech) => (
              <p
                className="flex gap-x-2 hover:scale-90 duration-300"
                key={tech}
              >
                <span className="text-Green">▹</span> {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="containers" data-aos="fade-right">
          <div className="img_container">
            <img
              className="img_about"
              src={porfile}
              alt="profile_pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
