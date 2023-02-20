import React from "react";

export const AptCard = ({ text, icon, props }) => (
  <div
    className={`flex flex-row justify-center items-center m-2 p-2 white-glassmorphism text-white ${props}`}
  >
    {icon}
    <h1 className="font-title mx-4 text-sm">{text}</h1>
  </div>
);

export default function AptiCard({ aptitudes, interests }) {
  return (
    <div className="col-span-1 justify-center items-center mx-4 p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-title text-3xl mb-2 mt-4">Aptitudes</h1>
        <div className="flex md:flex-row flex-col justify-center items-center">
          {aptitudes.map((aptitude) => (
            <AptCard {...aptitude} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-title text-3xl mb-2 mt-4">Interests</h1>
        <div className="flex md:flex-row flex-col justify-center items-center flex-wrap">
          {interests.map((int) => (
            <AptCard {...int} />
          ))}
        </div>
      </div>
    </div>
  );
}
