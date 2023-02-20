import React from "react";
import { DemoButton } from "../components/ProjectCard";

export default function ExpCard({
  title,
  jobTitle,
  desc,
  date,
  imageUrl,
  link,
}) {
  return (
    <div className="rounded-xl white-glassmorphism flex md:flex-row flex-col m-4 shadow-2xl">
      <div className="md:w-3/5 md:rounded-l-xl w-full rounded-t-xl max-h-72">
        <img
          src={imageUrl}
          alt=""
          className="md:rounded-l-xl md:rounded-tr-none rounded-t-xl object-cover w-full h-full"
        />
      </div>
      <div className="text-box p-4">
        <h3 className="text-2xl font-title mb-2">{title}</h3>
        <h4 className="text-lg font-title mb-2">
          {jobTitle} - {date}
        </h4>
        <p className="font-body">{desc}</p>
        <div className="flex flex-row w-full rounded-b-xl py-4">
          {link && <DemoButton link={link} text="Active Site" />}
        </div>
      </div>
    </div>
  );
}
