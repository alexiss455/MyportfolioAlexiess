import React, { useEffect, useState, useRef } from "react";
import Btn from "../components/btn";
import Logo from "../components/logo";
import Navitem from "../components/navitem";
function header() {
  const [humbergerMenu, setHumberger] = useState(false);
  function headerClose() {
    setHumberger((prevState) => !prevState);
    if (!humbergerMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
  const [show, setShow] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const prevScrollY = useRef(0);
  const controlNav = () => {
    const currentScrollY = window.scrollY;
    setShow(currentScrollY <= 96 || currentScrollY <= prevScrollY.current);
    prevScrollY.current = currentScrollY;
    setIsTop(currentScrollY === 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => window.removeEventListener("scroll", controlNav);
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 640) {
      setHumberger(false);
      document.body.classList.remove("no-scroll");
    }
  }, [windowWidth]);
function closebar(){
  setHumberger(false)
  document.body.classList.remove("no-scroll");
}


const [navanimate, setLetterClass] = useState("navanimate");
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass("");
  }, 2000);
  return () => {
    clearTimeout(timeoutId);
  };
}, []);


  return (
    <header
      className={`text-white fixed w-full z-50 duration-500 
      ${isTop ? "shadow-none" : "shadow-lg"} 
      ${show ? "top-0" : "-top-full"}`}
    >
      <nav className="max-w-screen-xl mx-auto max-xl:px-6">
        <div className=" h-24 flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <div
              className={`max-sm:shadow-lg flex flex-row max-sm:fixed max-sm:bg-slate-800 max-sm:w-3/4 max-sm:min-h-screen
                  max-sm:justify-center duration-300 top-0 z-40
                  ${humbergerMenu ? "right-0" : "-right-full"}`}
            >
              <ul className="font-sans Lightest-Slate text-md max-sm:text-lg flex gap-x-8 max-sm:flex-col justify-center items-center gap-y-10">
                <Navitem 
                  onClick={closebar}
                />
                <a
                  href="/Alexiess_Manalastas_Resume-IT-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Btn className={`${navanimate} setnav4`}>Resume</Btn>
                </a>
              </ul>
            </div>

            <div
              className=" flex flex-col gap-1 sm:hidden"
              onClick={headerClose}
            >
              <div
                className={` w-6 h-0.5 bg-Green  duration-500 z-50 ${
                  humbergerMenu ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`-z-10 w-6 h-0.5  bg-Green rounded  duration-500 ${
                  humbergerMenu ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5  bg-Green rounded  duration-500 z-50 ${
                  humbergerMenu ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
