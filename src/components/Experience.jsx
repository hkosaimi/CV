import React from "react";

function Experience({ year, title, paragraph, tags }) {
  return (
    <div className="flex  hover:bg-blue-900/10 gap-5 p-5 mb-5  rounded-xl group transition-all duration-300">
      <div className=" text-sm pt-1 min-w-[100px] text-slate-500  flex justify-start">{year}</div>
      <div>
        <div className="">
          <h1 className="font-bold mb-2 text-white/90  group-hover:text-teal-500">{title}</h1>
          <p className="text-base">{paragraph}</p>
        </div>
        <div className="text-xs flex-wrap  flex gap-1 items-center text-teal-100 font-medium mt-5">
          {tags.map((tag) => (
            <span className="bg-teal-400/10 text-teal-400 py-1 px-3 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
