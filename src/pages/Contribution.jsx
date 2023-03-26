import React, { useState } from "react";

export default function () {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "GrapiScore",
      content: `Write modern, performant, maintainable code for a
         diverse array of client and internal projects. Work with a variety
          of different languages, platforms, frameworks, and content management
           systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress
           , Prismic, and Netlify. Communicate with multi-disciplinary teams of engineers
           , designers, producers, and clients on a daily basis.`,
    },
    {
      title: "POS",
      content: `Write modern, performant, maintainable code for a diverse array
         of client and internal projects. Work with a variety of different 
         languages, platforms, frameworks, and content management systems such 
         as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic,
          and Netlify. Communicate with multi-disciplinary teams of engineers,
           designers, producers, and clients on a daily basis.`,
      content2: `languages, platforms, frameworks, and content management systems such 
      as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic,`,
    },
    {
      title: "Coffee",
      content: `Write modern, performant, maintainable code for a diverse array
           designers, producers, and clients on a daily basis.`,
      content2: `languages, platforms, frameworks, and content management systems such 
      as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic,`,
      content3: `languages, platforms, frameworks, and content management systems such 
      as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic,`,
    },
  ];

  return (
    <div className="pt-60" id="contribution" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div>
        <h1 className="textFont text-Lightest-Slate mb-10">
          Projects that I Contribute
        </h1>
        <div className="flex flex-row gap-4 max-sm:flex-col">
          <div className="flex flex-col w-40 font-sans text-Lightest-Slate max-sm:flex-row max-sm:w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`max-sm:text-center max-sm:w-full p-4 max-sm:border-l-0 max-sm:border-b-2 
                text-start duration-200 hover:bg-Gren-hover
                ${
                  activeTab === index
                    ? "text-Green border-l-4 max-sm:border-b-4 border-Green"
                    : "border-l-2 border-l-slate-600"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="text-Slate text-sm">
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
          </div>
        </div>
      </div>
    </div>
  );
}
