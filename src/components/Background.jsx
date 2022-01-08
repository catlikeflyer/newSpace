import React from "react";

export default function Background({ source, children, idx }) {
  return (
    <div
      className="min-h-full w-screen md:w-full -z-50"
      style={{
        background: `url(${source})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id={idx}
    >
      <div className="fixed w-full h-full bg-[rgb(0,0,0,0.5)]"></div>
      {children}
    </div>
  );
}
