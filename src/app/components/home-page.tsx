import React, { useEffect } from "react";
import HeaderSection from "./header";
import IssueSection from "./issue-section";
import HeroContent from "./hero-content";
import ExperienceSection from "./experience-section";
import ProjectSection from "./project-section";
import FooterSection from "./footer-section";
import QuoteSection from "./quote-section";


const HomePage = () => {

  return (
    <section className="w-full max-w-[1800px] min-h-screen">
      <HeaderSection />
      <IssueSection />
      <div id="about">
        <HeroContent />
      </div>
      <QuoteSection />
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </section>
  );
};

export default HomePage;
