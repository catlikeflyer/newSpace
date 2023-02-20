import React from "react";
import QualCard from "./QualCard";

export default function AboutCard({ photo, edu }) {
  return (
    <div className="col-span-1 justify-center items-center mx-4 white-glassmorphism p-4">
      <div className="flex flex-row justify-between items-stretch p-2">
        {" "}
        <img
          src={photo}
          alt=""
          className="rounded-lg mx-auto h-40 w-40 object-cover"
        />
        <p className="italic my-4 ml-4">
          If a word describes me, it'll be curiosity. It drives people
          everywhere, from the park in the neighborhood all the way up to Mars
          (well, soon enough).
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-title text-3xl mb-2 mt-4">Education</h1>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="col-span-1 justify-center items-center mx-4">
            {edu.map((item) => (
              <QualCard {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
