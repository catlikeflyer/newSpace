import React from "react";
import Divider from "./Divider";

export default function MainLayout({ title, children }) {
  return (
    <div className="root-container text-white justify-start items-center flex flex-col container3">
      <h1 className="font-title text-5xl mt-10 text-gradient">{title}</h1>
      <Divider />
      {children}
    </div>
  );
}
