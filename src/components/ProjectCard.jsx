import React from "react";
import { FaReact, FaPython, FaUnity, FaBootstrap } from "react-icons/fa";
import {
  SiFirebase,
  SiMaterialui,
  SiScikitlearn,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiWordpress,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

const icons = {
  react: <FaReact />,
  python: <FaPython />,
  unity: <FaUnity />,
  firebase: <SiFirebase />,
  materialui: <SiMaterialui />,
  scikitlearn: <SiScikitlearn />,
  opencv: <SiOpencv />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  flask: <SiFlask />,
  bootstrap: <FaBootstrap />,
  wordpress: <SiWordpress />,
  pandas: <SiPandas />,
  numpy: <SiNumpy />,
};

export const DemoButton = ({ link, text }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
    style={{ textDecoration: "none" }}
  >
    <span className="text-white rounded-sm font-title text-lg min-w-max p-1 hover:bg-[rgb(255,255,255,0.7)] hover:text-black hover:rounded-xl transition-all duration-150 shadow-xl">
      {text}
    </span>
  </a>
);

export default function ProjectCard({ title, desc, imageUrl, link, tech }) {
  return (
    <div className="project-card white-glassmorphism">
      <div
        className="w-full h-44 rounded-t-xl"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      />
      <div className="text-box p-4">
        <h3 className="text-2xl font-title mb-2">{title}</h3>
        <p className="font-body">{desc}</p>
      </div>
      <div className="flex justify-center items-start flex-row px-2">
        {tech &&
          tech.map((item, index) => (
            <div className="tech-icons group">
              {icons[`${item}`]}
              <span className="tooltip group-hover:scale-100">
                {item}
              </span>
            </div>
          ))}
      </div>
      <div className="flex flex-row w-full rounded-b-xl p-4">
        {link && <DemoButton link={link} text="Live Demo" />}
      </div>
    </div>
  );
}
