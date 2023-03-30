import React, { useEffect, useState, useRef } from "react";
import Btn from "../components/btn";
import Logo from "../components/logo";
import Navitem from "../components/navitem";
import Main from "../Maincomponents/main";
import Laoding from "../components/laoding";
import Burger from "../components/burger";
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

  function closebar() {
    setHumberger(false);
    document.body.classList.remove("no-scroll");
  }

  const [navanimate, setLetterClass] = useState("navanimate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("");
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Laoding />
      ) : (
        <>
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
                    <ul className="font-sans Lightest-Slate text-md max-sm:text-lg flex gap-x-5 max-sm:flex-col justify-center items-center gap-y-10">
                      <Navitem onClick={closebar} />
                      <a
                        href="/Alexiess_Manalastas_Resume-IT-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Btn className={`${navanimate} setnav4 flex justify-center items-center`}>Resume</Btn>
                      </a>
                    </ul>
                  </div>
                  <Burger
                    headerClose={headerClose}
                    top={
                      humbergerMenu === true ? "rotate-45 translate-y-1.5 " : ""
                    }
                    center={humbergerMenu === true ? "opacity-0" : ""}
                    bottom={
                      humbergerMenu === true
                        ? "-rotate-45 -translate-y-1.5 "
                        : ""
                    }
                  />
                </div>
              </div>
            </nav>
          </header>
          <Main bg={humbergerMenu === true ? "blur" : "blur-0"} />
        </>
      )}
    </>
  );
}
export default header;
