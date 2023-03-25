import AnimatedLetters from "../assets/animatedletters";
import "../assets/animated.css";
import "animate.css";

import { useState, useEffect } from "react";
export default function home() {
  const myName = ["A", "l", "e", "x", "i", "e", "s", "s"];
  const myLastname = ["M", "a", "n", "a", "l", "a", "s", "t", "a", "s"];
  const i = ["I", ""];
  const c = ["craft", ""];
  const d = ["digital", ""];
  const s = ["solutions", ""];
  const f = ["for", ""];
  const t = ["the",""];
  const w = ["web"];

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-col items-start">
      <h1 className=" text-Green font-sans mb-10 max-sm:mt-8">
        Hi, my name is
      </h1>

      <div className=" leading-line2">
        <div
          className=" text-Lightest-Slate font-bold max-sm:font-black max-sm:leading-10 flex flex-col"
          style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={myName}
            idx={0}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={myLastname}
            idx={10}
          />
        </div>
        <h1
          className="text-Slate font-extrabold max-sm:leading-10 max-sm:mt-4"
          style={{ fontSize: "clamp(30px, 3vw, 40px)" }}
        >
          <AnimatedLetters letterClass={letterClass} strArray={i} idx={20} />
          <AnimatedLetters letterClass={letterClass} strArray={c} idx={21} />
          <AnimatedLetters letterClass={letterClass} strArray={d} idx={22} />
          <AnimatedLetters letterClass={letterClass} strArray={s} idx={23} />
          <AnimatedLetters letterClass={letterClass} strArray={f} idx={24} />
          <AnimatedLetters letterClass={letterClass} strArray={t} idx={25} />
          <AnimatedLetters letterClass={letterClass} strArray={w} idx={26} />
        </h1>
      </div>
      <p className=" text-Slate mt-10 leading-2.5">
        I am a Web developer with a specialization in creating intuitive digital
        <br />
        experiences. My work is focused on developing interfaces that prioritize
        <br />
        accessibility and usability for all users, regardless of their abilities
        or disabilities.
      </p>
    </div>
  );
}
