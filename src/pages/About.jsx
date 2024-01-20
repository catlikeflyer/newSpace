import React, { useContext } from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import Photo from "../assets/imdo.jpg";
import AptiCard from "../components/AptCard";
import { DataContext } from "../context/DataContext";
import { BiBrain } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import {
  AiOutlineFullscreen,
  AiOutlineRobot,
  AiOutlineCloud,
  AiOutlineBarChart,
} from "react-icons/ai";
import AboutCard from "../components/AboutCard";
import QualCard from "../components/QualCard";

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

const interests = [
  {
    text: "Fullstack Development",
    icon: <AiOutlineFullscreen fontSize={40} />,
  },
  {
    text: "Machine Learning",
    icon: <AiOutlineRobot fontSize={40} />,
  },
  {
    text: "Cloud Computing",
    icon: <AiOutlineCloud fontSize={40} />,
  },
  {
    text: "Econometrics",
    icon: <AiOutlineBarChart fontSize={40} />,
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
            <h1 className="text-3xl">Hi there!</h1>
            <br />
            <p>
              If a word describes me, it'll be curiosity. It drives people
              everywhere, from the backyard all the way up to Mars (well, soon
              enough). Playing with new technologies drives me to learn more
              about them, and how can we use their power to change the world
              step by step. Innovation is the key to the future, and I want to
              be a part of it, in any way possible.
              <br />
              <br />
              I love playing Pokemon and listening to music (check out my
              Spotify!).
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
      </MainLayout>
    </Background>
  );
}
