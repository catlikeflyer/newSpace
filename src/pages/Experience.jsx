import React, { useContext } from "react";
import Background from "../components/Background";
import ExpCard from "../components/ExpCard";
import MainLayout from "../components/MainLayout";
import { DataContext } from "../context/DataContext";

export default function Experience() {
  const { useFirestore } = useContext(DataContext);
  const { docs } = useFirestore("experiences");

  return (
    <Background
      source="https://images.unsplash.com/photo-1516797045820-6edca89b2830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      idx="experience"
    >
      <MainLayout title="Experience">
        {docs && docs.map((exp)=> (
          <ExpCard {...exp} />
        ))}
      </MainLayout>
    </Background>
  );
}
