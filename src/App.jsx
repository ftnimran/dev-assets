import React from "react";
import Navbar from "./components/Navbar";
import ResumeSection from "./components/ResumeSection";
import ProjectGallery from "./components/ProjectGallery";
import BackgroundGallery from "./components/BackgroundGallery";

const App = () => {
  return (
    <>
      <Navbar />
      <ResumeSection />
      <ProjectGallery />
      <BackgroundGallery />
    </>
  );
};

export default App;
