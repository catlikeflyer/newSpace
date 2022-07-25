import React from "react";
import Background from "../components/Background";
import MainLayout from "../components/MainLayout";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineDownload,
} from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { AptCard } from "./About";

const contactData = [
  {
    social: "Instagram",
    link: "https://instagram.com/dh02nam",
    icon: <AiFillInstagram />,
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/do-hyun-nam-4779051a9/",
    icon: <AiFillLinkedin />,
  },
  {
    social: "Github",
    link: "https://www.github.com/catlikeflyer",
    icon: <AiFillGithub />,
  },
];

export default function Contact() {
  return (
    <Background
      source="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
      idx="contact"
    >
      <MainLayout title="Contact Me">
        <p className="font-body text-center">
          Feel free to contact me through any of the social media platforms and
          my email!
        </p>
        <div className="flex flex-row justify-center items-center">
          {contactData.map((item) => (
            <a href={item.link} style={{ textDecoration: "none" }}>
              <div className="social-icons">{item.icon}</div>
            </a>
          ))}
        </div>
        <a
          style={{ textDecoration: "none" }}
          href="https://firebasestorage.googleapis.com/v0/b/my-pf-4f7f9.appspot.com/o/resume_DoHyunNam_general.pdf?alt=media&token=93a808b8-847c-47f3-9dcc-7544a9738c96"
          download
        >
          <AptCard
            text="Check my CV"
            icon={<GrDocumentUser fontSize={32} color="white" />}
            props="hover:bg-slate-300 hover:text-gray-900 hover:rounded-full transition-all duration-200 ease-in-out text-white"
          />
        </a>
      </MainLayout>
    </Background>
  );
}
