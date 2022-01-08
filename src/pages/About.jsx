import React, { useContext } from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import Photo from "../assets/dhnamPic.jpeg";
import QualCard from "../components/QualCard";
import { DataContext } from "../context/DataContext";
import { BiBrain } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";

const aptitudes = [
  {
    text: "Open-minded",
    icon: <BiBrain fontSize={40} />,
  },
  {
    text: "Lifelong learning",
    icon: <MdOutlineSchool fontSize={40}  />,
  },
  {
    text: "Leadership",
    icon: <FaPeopleCarry fontSize={40} />,
  }
]

export const AptCard = ({ text, icon, props }) => (
  <div className={`flex flex-row justify-center items-center m-4 p-2 white-glassmorphism ${props}`}>
    {icon}
    <h1 className="font-title text-2xl mx-4">{text}</h1>
  </div>
);

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
          <div className="col-span-1 justify-center items-center mx-4">
            <img
              src={Photo}
              alt=""
              className="rounded-xl w-full h-auto mx-auto"
            />
            <p className="font-body italic text-center my-4">
              If a word describes me, it'll be curiosity. It drives people
              everywhere, from the park in the neighborhood all the way up to
              Mars (well, soon enough).
            </p>
          </div>
          <div className="col-span-1 justify-center items-center mx-4">
            {data.aboutItems.map((item) => (
              <QualCard {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-title text-4xl mb-2 mt-4">Aptitudes</h1>
          <div className="flex md:flex-row flex-col justify-center items-center">
            {aptitudes.map((aptitude) => (
              <AptCard {...aptitude} />
            ))}
          </div>
        </div>
      </MainLayout>
    </Background>
  );
}
