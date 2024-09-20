import React from "react";

function Articles({ img, date, title }) {
  return (
    <div className="flex  hover:bg-blue-900/10 gap-5 p-5 mb-5  rounded-xl group transition-all duration-300">
      <div className=" text-sm pt-1 w-1/3 text-slate-500  flex justify-start">
        <img src={img} className="object-cover w-full object-right rounded-lg" alt="" />
      </div>
      <div className="w-2/3">
        <div className="">
          <h1>{date}</h1>
          <h1 className="font-bold mb-2 text-white/90  group-hover:text-teal-500">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Articles;
