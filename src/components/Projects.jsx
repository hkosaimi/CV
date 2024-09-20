import React from "react";

function Projects({ img, title, paragraph, tags }) {
  return (
    <div className="flex flex-col lg:flex-row hover:bg-blue-900/10 gap-5 p-5 mb-5  rounded-xl group transition-all duration-300">
      <div className="lg:w-1/2 flex ">
        <img src={img} className="object-cover w-full  rounded-lg" alt="" />
      </div>
      <div className="lg:w-1/2">
        <div className="">
          <h1 className="font-bold  mb-2 text-white/90  group-hover:text-teal-500">{title}</h1>
          <p className="text-base">{paragraph}</p>
        </div>
        <div className="text-xs flex-wrap flex gap-1 items-center text-teal-100 font-medium mt-5">
          {tags?.map((tag) => (
            <span className="bg-teal-400/10 text-teal-400 py-1 px-3 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
