import React from "react";
import Ib from "../assets/img/ib.png";

export default function QualCard({ image, title, desc }) {
  return (
    <div className="flex flex-row justify-start items-center w-full h-max white-glassmorphism rounded-xl p-2 mb-4 shadow-2xl">
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 justify-center items-center">
          <img src={image} alt="qual-logo" className="max-h-20 mx-auto" />
        </div>
        <div className="col-span-3 flex flex-col p-2">
          <h1 className="font-title text-2xl">{title}</h1>
          <p className="font-body">{desc}</p>
        </div>
      </div>
    </div>
  );
}
