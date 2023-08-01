import React from "react";
import expense from "../assets/portfolio/expense.png";
import educatalyst from "../assets/portfolio/educatalyst.png";
import sorting from "../assets/portfolio/sorting.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: expense,
      demo: "https://expenz-tracker.netlify.app/",
      code: "https://github.com/Milan-panda/ExpenseTracker",
    },
    {
      id: 2,
      src: educatalyst,
      demo: "https://educatalyst.netlify.app/",
      code: "https://github.com/Milan-panda/Educatalyst",
    },
    {
      id: 3,
      src: sorting,
      demo: "https://milan-panda.github.io/SortingAlgorithm/",
      code: "https://github.com/Milan-panda/SortingAlgorithm",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full sm:h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
