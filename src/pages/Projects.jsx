import React, { useContext, useEffect, useState } from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import ProjectCard from "../components/ProjectCard";
import Masonry from "react-masonry-css";
import { DataContext } from "../context/DataContext";
import { FaPlus } from "react-icons/fa";

export default function Projects() {
  const { useFirestore } = useContext(DataContext);
  const { docs } = useFirestore("projects");
  const [q, setQ] = useState(2);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1,
  };

  return (
    <Background
      source="https://images.unsplash.com/photo-1614121181207-4b6c334d353d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
      idx="projects"
    >
      <MainLayout title="Projects">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {docs &&
            docs
              .filter((project, index) => index <= q)
              .map((project) => (
                <ProjectCard {...project} key={project.title} />
              ))}
        </Masonry>
        <div
          className={`flex flex-row justify-center items-center m-4 p-2 white-glassmorphism hover:text-black hover:bg-slate-200 transition-all anim `}
          onClick={() => setQ(q + 3)}
        >
          <FaPlus />
          <h1 className="font-title mx-4">More</h1>
        </div>
      </MainLayout>
    </Background>
  );
}
