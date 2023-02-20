import React, { useContext } from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import Photo from "../assets/dhnamPic.jpeg";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AboutCard photo={Photo} edu={data.aboutItems} />
          <AptiCard aptitudes={aptitudes} interests={interests} />
        </div>
      </MainLayout>
    </Background>
  );
}
