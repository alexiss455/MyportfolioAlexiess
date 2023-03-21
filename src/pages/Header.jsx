import React, { useState } from "react";
import Btn from "../components/btn";
import Logo from "../components/logo";
function header() {
  const [humbergerMenu, setHumberger] = useState(false);
  function headerClose() {
    setHumberger((prevState) => !prevState);
  }
  return (
    <div>
      <header className="text-white bg-Navy">
        <nav className="max-w-screen-xl mx-auto px-6">
          <div className=" h-24 flex items-center justify-between">
            <div>
              <Logo />
            </div>
            <div>
              <div
                className={`flex flex-row max-sm:fixed max-sm:bg-slate-800 max-sm:w-3/4 max-sm:h-full
                  max-sm:justify-center duration-500 top-0 z-10 ${
                    humbergerMenu ? "right-0" : "-right-full"
                  }`}
              >
                <ul className=" font-sans Lightest-Slate text-md max-sm:text-lg flex gap-x-9 max-sm:flex-col justify-center items-center gap-y-10">
                  <li>
                    <a
                      href=""
                      className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90"
                    >
                      <span className=" text-Green">01.</span>About
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90"
                    >
                      <span className=" text-Green">02.</span>Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90"
                    >
                      <span className=" text-Green">03.</span>Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90"
                    >
                      <span className=" text-Green">04.</span>Contact
                    </a>
                  </li>
                  <Btn />
                </ul>
              </div>

              <div
                className=" flex flex-col gap-1 sm:hidden"
                onClick={headerClose}
              >
                <div
                  className={` z-20 w-6 h-0.5 bg-Green  duration-500 ${
                    humbergerMenu ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5  bg-Green rounded  duration-500 ${
                    humbergerMenu ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={` z-20 w-6 h-0.5  bg-Green rounded  duration-500 ${
                    humbergerMenu ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default header;
