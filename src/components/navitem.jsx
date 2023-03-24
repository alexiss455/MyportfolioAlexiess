import { Link } from "react-scroll";

export default function navitem(){
    const navLinks = [
        { text: "About", url: "about" },
        { text: "Contribution", url: "contribution" },
        { text: "Projects", url: "projects" },
        { text: "Contact", url: "contact" },
      ];
      
    return(
        navLinks.map(({ text, url }, index) => (
            <li key={index}>
              <Link
              smooth={true}
              offset={50} 
              duration={500}
                to={url}
                className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90">
                <span className="text-Green">{`0${index + 1}.`}</span>
                {text}
              </Link>
            </li>
          ))
    );
}