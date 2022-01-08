import React from "react";

const FooterLink = ({ text }) => (
  <p className="text-white text-base text-center mx-2 cursor-pointer">
    <a href={`#${text.toLowerCase()}`} style={{ textDecoration: "none" }}>
      {text}
    </a>
  </p>
);

const footerLinks = ["Home", "About", "Projects", "Experience", "Contact"];

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-2 bg-black">
    <div className="w-full flex sm:flex-row flex-col justify-end items-end">
      <div className="flex justify-center items-center flex-col m-2">
        <p className="text-white text-sm text-center font-medium">
          By Do Hyun Nam
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center flex-wrap sm:mt-0 w-full">
        {footerLinks.map((text, index) => (
          <FooterLink key={index} text={text} />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
