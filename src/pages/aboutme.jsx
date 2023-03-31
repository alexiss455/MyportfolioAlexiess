import React from "react";
import porfile from "../img/alexiesspic.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  function handleClick(index) {
    if (index === 0) {
      toast.dismiss();
      toast.success("I'm confident in my JavaScript skills 😃");
    } else if (index === 1) {
      toast.dismiss();
      toast.success("React is my strong suit 😊");
    } else if (index === 2) {
      toast.dismiss();
      toast.success("I have experience with Node.js ⭐");
    } else if (index === 3) {
      toast.dismiss();
      toast.success("I'm skilled in MongoDB Aggregations 🔎");
    } else if (index === 4) {
      toast.dismiss();
      toast.success("HTML is one of my specialties 🔥");
    } else if (index === 5) {
      toast.dismiss();
      toast.success("CSS is in my comfort zone ✔");
    } else if (index === 6) {
      toast.dismiss();
      toast.success("I'm proficient in TailwindCSS 🔥");
    } else if (index === 7) {
      toast.dismiss();
      toast.success("I have strong Git & GitHub skills 😍");
    } else if (index === 8) {
      toast.dismiss();
      toast.success("I'm experienced in building Rest APIs 😑");
    }
  }
  return (
    <div id="about" className="sm:pt-36 max-sm:pt-20" data-aos="fade-up">
      <div className="mb-8">
        <h1 className="textFont textFonts text-Lightest-Slate">About Me</h1>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 text-Slate">
        <div data-aos="fade-left">
          <p>
            Hello! My name is Alexiess and I'm a recent graduate with a degree
            in Information Technology. Although I don't have professional
            experience as a web developer yet, I've taken a number of courses
            and completed several personal projects to develop my skills. I've
            taken on the challenge of mastering the web development by enrolling
            in a rigorous Web Development Bootcamp on Udemy in November 2022.
          </p>
          <p className="mt-4">
            As a recent graduate, I'm eager to gain professional experience and
            expand my skill set in a challenging and supportive work
            environment. I'm excited to bring my enthusiasm and willingness to
            learn to a web development team and contribute to creating great
            user experiences.
          </p>
          <p className=" mt-6">
            During the bootcamp, I've been learning about the following
            technologies:
          </p>
          <div className=" grid grid-cols-3 max-md:grid-cols-2 mt-4 font-sans font-semibold">
            {technologies.map((tech, index) => (
              <p
                className="flex gap-x-2 hover:scale-90 duration-300 cursor-pointer"
                key={index}
                onClick={() => handleClick(index)}
              >
                <span className="text-Green">▹</span> {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="containers" data-aos="fade-right">
          <div className="img_container">
            <img className="img_about" src={porfile} alt="profile_pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
