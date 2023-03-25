import { Link } from "react-scroll";
export default function NavItem({ onClick }) {
  const navLinks = [
    { text: "About", url: "about" },
    { text: "Contribution", url: "contribution" },
    { text: "Projects", url: "projects" },
    { text: "Contact", url: "contact" },
  ];
  return navLinks.map(({ text, url }, index) => (
    <li key={index} className="hover:scale-75 duration-500 cursor-pointer flex max-sm:flex-col justify-center items-center hover:text-Green">
      <span className="text-Green">{`0${index + 1}.`}</span>
      <Link
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        to={url}
        onClick={onClick}
        >
        {text}
      </Link>
    </li>
  ));
}
