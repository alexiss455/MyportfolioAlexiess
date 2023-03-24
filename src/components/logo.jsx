export default function logo() {
  const points = "100,10 190,50 190,150 100,190 10,150 10,50";
  const scale = 0.3;
  const scaledPoints = points
    .split(" ")
    .map((point) => {
      const [x, y] = point.split(",").map(Number);
      return `${x * scale},${y * scale}`;
    })
    .join(" ");

 
  return (
    <svg width="60" height="60">
      <polygon
        points={scaledPoints}
        style={{ fill: "#0a192f" , stroke: "#64ffda", strokeWidth: 3 }}
      />
      <text
        x="21"
        y="38"
        style={{
          fill: "#64ffda",
          fontFamily: "sans-serif",
          fontSize: "1.75rem",
        }}
      >
        A
      </text>
    </svg>
  );
}
