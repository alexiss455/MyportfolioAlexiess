import React from "react";

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
    <div id="about" className="pt-36">
      <div className="mb-8">
        <h1 className="textFont textFonts text-Lightest-Slate">About Me</h1>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 text-Slate">
        <div className="">
          <p className=" ">
            Hello! My name is Alexiess and I enjoy creating things that live on
            the internet. My interest in web development started back in when I
            was gradute in college. I'm mdecided to join a bootcamp in Udemy
            course is Web Development Bootcamp way back november 2022.
          </p>
          <p className=" mt-6">
            Here are a few technologies I’ve been working with recently:
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
        <div className="containers">
          <div className="img_container">
            <img
              className="img_about"
              src="/img/alexiesspic.png"
              alt="profile_pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
