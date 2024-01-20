import React from "react";

export default function QualCard({ title, school, date, desc }) {
  return (
    <div className="grid grid-cols-12 w-full h-max rounded-xl p-2 mb-4 hover:font-bold">
      <div className="col-span-1 flex flex-row">
        <div className="bg-white h-full w-1"></div>
      </div>
      <div className="col-span-11 flex flex-col p-2">
        <h1 className="font-title text-xl">{school}</h1>
        <p className="text-xl text-gray-400">{title}</p>
        <p className="">{date}</p>
      </div>
    </div>
  );
}
