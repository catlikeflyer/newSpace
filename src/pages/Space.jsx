import React from "react";
import Typist from "react-typist";
import Background from "../components/Background";
import Divider from "../components/Divider";

export default function Space() {
  return (
    <Background
      source={
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      }
      idx="home"
    >
      <div className="root-container text-white items-start justify-center p-4">
        <Typist>
          <h1 className="font-title text-7xl my-4 text-gradient">SPACE</h1>
          <p className="font-title text-gray-400 text-xl md:text-2xl">
            {"(Noun)"} def.
          </p>
          <p className="font-title text-white text-xl md:text-2xl">
            The boundless three-dimensional extent in which objects and events
            have relative position and direction.
          </p>
          <Divider />
          <p className="font-title text-white text-2xl md:text-3xl">
            Hi! I'm Do Hyun Nam
          </p>
          <p className="font-title text-gray-400 text-2xl md:text-3xl">
            Computer Science Student. <br />
            Entrepreneur.
            <br />
            Fun Guy.
          </p>
        </Typist>
      </div>
    </Background>
  );
}
