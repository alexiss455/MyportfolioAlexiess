import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

export default function Logo() {
  const points = "100,10 190,50 190,150 100,190 10,150 10,50";
  const scale = 0.3;
  const scaledPoints = points
    .split(" ")
    .map((point) => {
      const [x, y] = point.split(",").map(Number);
      return `${x * scale},${y * scale}`;
    })
    .join(" ");

  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, { rotation: 360, duration: 1 });
  }, []);

  function handleMouseOver() {
    const polygon = logoRef.current.querySelector("polygon");
    polygon.style.fill = "#64ffdb1e";
   
  }
  function handleMouseLeave() {
    const polygon = logoRef.current.querySelector("polygon");
    polygon.style.fill = "#0a192f";
  }

  return (
    <Link to="/" className="cursor-pointer">
      <svg
        width="60"
        height="60"
        ref={logoRef}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <polygon
          points={scaledPoints}
          style={{ fill: "#0a192f", stroke: "#64ffda", strokeWidth: 1.5, transition: ".5s"}}
        />
        <text
          x="20.5"
          y="38"
          style={{
            fill: "#64ffda",
            fontFamily: "sans-serif",
            fontSize: "1.75rem",
            fontWeight: "bolder",
          }}
        >
          A
        </text>
      </svg>
    </Link>
  );
}
