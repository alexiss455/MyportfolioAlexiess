import project from "../assets/project";
import Otherprojects from "./otherprojects";
console.log(project);
export default function projects() {
  return (
    <div className="pt-60 relative text-White">
      <h1 className="textFont textProjects text-Lightest-Slate mb-10">
        Projects I've Completed
      </h1>
      <div
        className="flex flex-col gap-y-16 max-md:gap-y-4"
        id="projects"
        data-aos="fade-up"
      >
        {project.map((items, index) => (

          <div
            key={index}
            className="grid grid-cols-2 mt-8 max-md:grid-cols-1 relative"
          >
            <div
              data-aos="fade-left"
              className="relative m-auto max-md:absolute max-md:w-full max-md:h-full max-md:shadow-xl"
            >
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="w-full h-full absolute top-0 
        left-0 z-10 rounded-md hover:bg-GrayH duration-300"
                ></div>
                <img
                  className="relative object-cover object-center w-full max-md:h-full max-md:opacity-one rounded-md max-md:grayscale"
                  src={items.img}
                />
              </a>
            </div>
            <div
              data-aos="fade-right"
              className={`${items.className} relative flex items-start flex-col justify-center order-first max-md:p-6 z-20`}
            >
              <p className=" text-Green text-md">Featured Project</p>
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                <p className="text-3xl text-Lightest-Slate font-bold whitespace-nowrap  hover:text-Green duration-300">
                  {items.title}
                </p>
              </a>
              <div
                className={`${items.className2} max-md:bg-transparent rounded-md -mr-20 max-md:px-0
           max-md:mr-0 bg-Light-Navy p-4 py-8 mt-4 text-left z-20 max-md:z-0 `}
              >
                <p>{items.description}</p>
              </div>
              <div className="flex gap-4 font-sans mt-4">
                {items.techonology.map((items, index) => (
                  <p key={index}>{items}</p>
                ))}
              </div>
              <div className="text-3xl flex flex-row gap-2 mt-4">
                <a
                  className="hover:text-Green active:scale-90 duration-500"
                  title="Repository"
                  href={items.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-line"></i>
                </a>
                <a
                  className="hover:text-Green active:scale-90 duration-500"
                  title="Grapiscore"
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-external-link-line"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
        <Otherprojects />
      </div>
    </div>
  );
}
