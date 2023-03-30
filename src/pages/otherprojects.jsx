import otherprojets from "../assets/otherprojects"
console.log(otherprojets);
export default function () {
  return (
    <div className="pt-56">
      <h1 className="text-4xl max-md:text-2xl text-Lightest-Slate font-bold  text-center mb-4">
        Other Projects
      </h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 py-6">
        {otherprojets.map((items, index) =>(
          <div
          key={index}
          data-aos="zoom-in"
          className="shdow hover:-translate-y-3 duration-300 relative py-4 px-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <i className="ri-folder-open-line text-Green text-3xl"></i>
              <div className="text-Slate text-2xl flex gap-x-2">
                <a href={items.link} target="_blank" rel="noopener noreferrer" className=" z-10">
                  <i className="ri-external-link-line hover:text-Green duration-300"></i>
                </a>
                <a href={items.gitLink} target="_blank" rel="noopener noreferrer" className=" z-10">
                  <i className="ri-github-line hover:text-Green duration-300"></i>
                </a>
              </div>
            </div>
            <h1 className=" text-Lightest-Slate text-2xl font-semibold mt-3">
              <a className="anchor1 hover:text-Green" href={items.link} target="_blank" rel="noopener noreferrer" >
               {items.title}
              </a>
            </h1>
            <p className=" text-Slate text-sm mt-2">
              {items.description}
            </p>
          </div>
          <ul className="font-sans flex flex-row gap-x-2 text-sm mt-4 text-gray-400">
            <p>{items.techonology[0]}</p>
            <p>{items.techonology[1]}</p>
            <p>{items.techonology[2]}</p>
            <p>{items.techonology[3]}</p>
            <p>{items.techonology[4]}</p>
          </ul>
        </div>
        ))}
      </div>

    </div>
  );
}
