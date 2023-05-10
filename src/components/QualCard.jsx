import React from "react";

export default function QualCard({ image, title, desc, date }) {
  const imageUrl = new URL(image, import.meta.url).href;

  return (
    <div className="grid grid-cols-4 w-full h-max rounded-xl p-2 mb-4 shadow-2xl">
      <div className="col-span-3 flex flex-col p-2">
        <h1 className="font-title text-2xl">{title}</h1>
        <p className="">{date}</p>
      </div>
      <div className="col-span-1 p-2 justify-center items-center">
        <img src={image} alt="qual-logo" className="max-h-20 mx-auto" />
      </div>
    </div>
  );
}
