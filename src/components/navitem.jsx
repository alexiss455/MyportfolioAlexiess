import { useEffect, useState } from "react";
import { Link } from "react-scroll";
export default function NavItem({ onClick }) {
  const navLinks = [
    { text: "ABOUT", url: "about" },
    { text: "CONTRIBUTION", url: "contribution" },
    { text: "PROJECTS", url: "projects" },
    { text: "CONTACT", url: "contact" },
  ];

  const [navanimate, setLetterClass] = useState("navanimate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass(" ");
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return navLinks.map(({ text, url }, index) => (
    <li
      key={index}
      className={`${navanimate} 
      ${"setnav" + index}
      hover:scale-75 duration-500 cursor-pointer flex max-sm:flex-col justify-center items-center hover:text-Green`}
    >
    <div className="flex items-center gap-x-2 max-sm:flex-col">
      <span className="text-Green font-black">{`0${index + 1}.`}</span>
      <Link
        className="tracking-widest"
        spy={true}
        offset={-50}
        to={url}
        onClick={onClick}>
        {text}
      </Link>
    </div>
      
    </li>
  ));
}
