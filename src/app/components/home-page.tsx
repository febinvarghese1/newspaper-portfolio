import React from "react";
import HeaderSection from "./header";
import IssueSection from "./issue-section";
import HeroContent from "./hero-content";
import ExperienceSection from "./experience-section";
import ProjectSection from "./project-section";
import FooterSection from "./footer-section";


const HomePage = () => {
  return (
    <section className="w-full max-w-[1800px] min-h-screen">
      <HeaderSection />
      <IssueSection />
      <HeroContent />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </section>
  );
};

export default HomePage;
