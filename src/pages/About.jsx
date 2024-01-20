import React, { useContext } from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import Photo from "../assets/imdo.jpg";
import { DataContext } from "../context/DataContext";
import { BiBrain } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import {
  AiOutlineFullscreen,
  AiOutlineRobot,
  AiOutlineCloud,
  AiOutlineBarChart,
  AiOutlineAudio,
  AiOutlineGift,
} from "react-icons/ai";
import QualCard from "../components/QualCard";
import Divider from "../components/Divider";
import { AptCard } from "../components/AptCard";

const aptitudes = [
  {
    text: "Open-minded",
    icon: <BiBrain fontSize={40} />,
  },
  {
    text: "Lifelong learning",
    icon: <MdOutlineSchool fontSize={40} />,
  },
  {
    text: "Leadership",
    icon: <FaPeopleCarry fontSize={40} />,
  },
];

const skills = [
  {
    text: "Fullstack Development",
    icon: <AiOutlineFullscreen fontSize={40} />,
  },
  {
    text: "ML & AI",
    icon: <AiOutlineRobot fontSize={40} />,
  },
  {
    text: "Cloud Computing",
    icon: <AiOutlineCloud fontSize={40} />,
  },
  {
    text: "Data Analytics",
    icon: <AiOutlineBarChart fontSize={40} />,
  },
  {
    text: "Leadership",
    icon: <FaPeopleCarry fontSize={40} />,
  },
  {
    text: "Event Planning",
    icon: <AiOutlineGift fontSize={40} />,
  },
  {
    text: "Public Speaking",
    icon: <AiOutlineAudio fontSize={40} />,
  },
];

export default function About() {
  const { data } = useContext(DataContext);

  return (
    <Background
      source={
        "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      }
      idx="about"
    >
      <MainLayout title="About">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-3xl font-title">Hello there!</h1>
            <br />
            <p>
              Life's too short to be boring. I'm a passionate learner, driven by
              curiosity and innovation to change the world for the better.
              Taking on step by step to help others and myself grow. The world's
              too big for a lifetime, but let's make the most of it.
              <br />
              <br />
              Passionate event-planer, tech enthusiast, and a sportsperson. I
              love watching and playing sports, especially football/soccer,
              analyzing movies, huge fan of pokemon. Music is life (chek out my
              playlist!)
              <br />
            </p>
            <h1 className="font-title text-3xl mb-2 mt-8">Education</h1>
            {data.education.map((item) => (
              <QualCard {...item} />
            ))}
          </div>
          <div className="col-span-1">
            <img src={Photo} alt="my-picture" className="circular-image" />
          </div>
        </div>
        <h1 className="font-title text-4xl mt-10 text-gradient">Aptitudes</h1>
        <Divider />
        <div className="flex flex-row justify-center items-center flex-wrap">
          {skills.map((skill) => (
            <AptCard {...skill} />
          ))}
        </div>
      </MainLayout>
    </Background>
  );
}
