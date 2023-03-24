export default function home() {
  return (
    <div className="flex flex-col items-start">
      <h1 className=" text-Green font-sans mb-10 max-sm:mt-8">Hi, my name is</h1>

      <div className=" leading-line2">
        <h1
          className=" text-Lightest-Slate font-bold max-sm:leading-10"
          style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
        >
          Alexiess Manalastas.
        </h1>
        <h1
          className=" text-Slate font-semibold max-sm:leading-10 max-sm:mt-4"
          style={{ fontSize: "clamp(40px, 4vw, 80px)" }}
        >
          I build things for the web.
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
