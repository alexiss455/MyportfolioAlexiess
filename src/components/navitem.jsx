import React from "react";

export default function navitem(){
    const navLinks = [
        { text: "About", url: "#" },
        { text: "Contribution", url: "#" },
        { text: "Projects", url: "#" },
        { text: "Contact", url: "#" },
      ];
      
    return(
        navLinks.map(({ text, url }, index) => (
            <li key={index}>
              <a
                href={url}
                className="flex gap-x-1 max-sm:flex-col items-center hover:text-Green duration-500 hover:scale-90">
                <span className="text-Green">{`0${index + 1}.`}</span>
                {text}
              </a>
            </li>
          ))
    );
}