import React, { useState } from "react";

export default function () {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "GrapiScore",
      link: "https://graphiscore.cyclic.app/",
      content: `As a frontend developer, I contribute
       to the GraphiScore website by designing and implementing
        the user interface and user experience of the platform.
         This includes creating wireframes, mockups, and prototypes of
          the website, as well as implementing the frontend using HTML, CSS, and JavaScript. GraphiScore was built using,`,
      content3: `Front-end: HTML, CSS, JavaScript, AJAX, EJS`,
      content4: `Back-end: Express, Node.js`,
      content5: `Database: MongoDB Atlas`,
    },
    {
      title: "POS",
      link: "https://youtube.com",
      content: ``,
      content2: ``,
    },
  ];

  return (
    <div
      className="pt-60"
      id="contribution"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div>
        <h1 className="textFont text-Lightest-Slate mb-10 ">
          Projects that I Contribute
        </h1>
        <div className="flex flex-row gap-4 max-sm:flex-col">
          <div className="flex flex-col w-40 font-sans text-Lightest-Slate max-sm:flex-row max-sm:w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`max-sm:text-center max-sm:w-full p-4
                text-start duration-200 hover:bg-Gren-hover relative
                ${
                  activeTab === index
                    ? `text-Green  after:w-[2px]  after:h-full  after:bg-Green  after:absolute  after:left-0  after:bottom-0 max-sm:after:w-full max-sm:after:h-[2px]
                    `
                    : `after:w-[2px] after:h-full after:bg-slate-400 after:absolute after:left-0 after:bottom-0 max-sm:after:w-ful max-sm:after:h-[2px]
                    `
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="text-Slate text-sm">
            <a
              href={tabs[activeTab].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-Green text-xl font-medium">
                {tabs[activeTab].title}
              </p>
              <p className="mt-4 contribute">{tabs[activeTab].content}</p>
              {tabs[activeTab].content2 ? (
                <p className="mt-4 contribute">{tabs[activeTab].content2}</p>
              ) : null}
              {tabs[activeTab].content3 ? (
                <p className="mt-4 contribute">{tabs[activeTab].content3}</p>
              ) : null}
              {tabs[activeTab].content4 ? (
                <p className="mt-4 contribute">{tabs[activeTab].content4}</p>
              ) : null}
              {tabs[activeTab].content5 ? (
                <p className="mt-4 contribute">{tabs[activeTab].content5}</p>
              ) : null}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
