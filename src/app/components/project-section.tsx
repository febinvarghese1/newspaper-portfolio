"use client";

import React from "react";
import { motion } from "framer-motion";
import Separator from "./separator";
import Rose from "@/assets/images/illustrations/rose.png";
import Dancers from "@/assets/images/illustrations/dancers.png";
import Gramaphone from "@/assets/images/illustrations/gramaphone.png";
import Lawyer from "@/assets/images/illustrations/lawyer.png";
import Weaver from "@/assets/images/illustrations/weaver.png";
import SingleRose from "@/assets/images/illustrations/single-rose.png";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  link: string;
  progress: string;
}

const projects: Project[] = [
  {
    name: "Multipost.in",
    description:
      "Multipost.in is a platform for creating and sharing posts on social media, this platform allows the content creators to create content to post it in all platforms without the help of the designers, by using multipsot the user can just paste the long form content or add an link which extracts the data and give us the ready made template where the user can just select copy, download and edit the post",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI"
    ],
    link: "https://multipost.in",
    progress: "Almost completed"
  },
  {
    name: "Edenly.in",
    description:
      "Edenly is a platform where productivity meets creativity, it's the platform where the user can focus, create tasks just by providing voices, and the user can start the task can customise aesthetic timers and themes play asmr music and if needed a break then they can just play games in the same platform, we also have leaderboards too",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI"
    ],
    link: "https://edenly.in",
    progress: "In Progress"
  },
  {
    name: "Linux Desktop Portfolio",
    description:
      "Linux Desktop Portfolio, this is a portfolio website who loves linux desktop features, it is my personal website where i showcase my skills and projects",
    techStack: ["React", "TypeScript", "Chakra UI", "SCSS"],
    link: "https://febin-v.vercel.app/",
    progress: "Completed"
  },
  {
    name: "Full Stack fitness app",
    description:
      "Full stack fitness blog app done using react js , mongo db , node js and express, this site can allows fitness enthusiast to follow fitness post on this page",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    link: "https://github.com/febinvarghese1/Fitness-blog-app",
    progress: "Completed"
  },
  {
    name: "Animated Landing Pages",
    description:
      "Built Story telling Animated Landing Pages using Framer Motion and React",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://sparcade.surveysparrow.com/",
    progress: "Completed"
  },
  {
    name: "Google Search Clone",
    description:
      "Google Search Clone, this is a clone of google search page, it is a full stack app where the user can search for a query and get the results",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    link: "https://github.com/febinvarghese1/Google-Search-Clone",
    progress: "Completed"
  }
];



const ProjectSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      className="w-full flex flex-col"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Separator height={6} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-2 sm:p-4 font-[CloisterBlack]"
        variants={fadeInUp}
      >
        Side Projects
      </motion.h1>
      <Separator height={1} width={100} color="black" />
      <motion.div 
        className="w-full flex-1 flex flex-col gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-4 py-6 sm:py-8 lg:py-12"
        variants={staggerContainer}
      >
        <motion.div 
          className="w-full flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6"
          variants={staggerContainer}
        >
          <ProjectCard project={projects[0]} index={0} />
          <ProjectCard project={projects[1]} index={2} />
        </motion.div>
        <motion.div 
          className="w-full flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-6"
          variants={staggerContainer}
        >
          <ProjectCard project={projects[2]} index={1} />
          <ProjectCard project={projects[3]} index={4} />
          <ProjectCard project={projects[4]} index={2} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const ProjectCard = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay: index * 0.1
      }
    }
  };

  const getCurrentImage = () => {
    switch (index) {
      case 0:
        return Weaver.src;
      case 1:
        return Dancers.src;
      case 2:
        return Gramaphone.src;
      case 3:
        return Lawyer.src;
      case 4:
        return Rose.src;
      case 5:
        return SingleRose.src;
      default:
        return Rose.src;
    }
  };

  return (
    <motion.div 
      className="flex flex-1 flex-col border-[2px] sm:border-[4px] lg:border-[6px] border-black outline-2 sm:outline-4 outline-offset-1 sm:outline-offset-2 outline-black p-2 sm:p-3 lg:p-4 min-h-0"
      variants={fadeInUp}
      whileHover={{
        y: -5,
        boxShadow: "-6px 6px 0px rgba(0, 0, 0, 0.8)",
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 30
        }
      }}
    >
      <motion.h2 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-2 font-[applewood]"
        variants={fadeInUp}
      >
        {project.name}
      </motion.h2>
      <motion.div 
        className="flex-1 flex flex-col items-center min-h-0"
        variants={fadeInUp}
      >
        <motion.img
          src={getCurrentImage()}
          alt="project"
          className="object-cover mb-2 w-full max-w-[300px] h-auto aspect-square"
          style={{
            filter: "sepia(0.5)"
          }}
          whileHover={{
            scale: 1.05,
            filter: "sepia(0.3)",
            transition: {
              type: "spring" as const,
              stiffness: 300,
              damping: 20
            }
          }}
        />
        <motion.p 
          className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 flex-1 font-[clarendon]"
          variants={fadeInUp}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-1 sm:gap-2 mb-2"
          variants={fadeInUp}
        >
          <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-[clarendon]">
            Tech Stack:
          </span>
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-sm sm:text-base lg:text-lg text-gray-800 font-[clarendon]"
            >
              {tech},
            </span>
          ))}
        </motion.div>
        <motion.div 
          className="text-center change-cursor"
          variants={fadeInUp}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block change-cursor bg-[#d7c6a7] text-black px-2 sm:px-3 lg:px-4 py-1 sm:py-2 font-[applewood] text-sm sm:text-base lg:text-lg transition-colors duration-300 border-2 border-black"
            whileHover={{
              scale: 1.05,
              boxShadow: "-8px 5px 0px rgba(0, 0, 0, 1)",
              transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 20
              }
            }}
          >
            VIEW PROJECT →
          </motion.a>
        </motion.div>
        <motion.div 
          className="flex justify-between items-center mt-2 sm:mt-3 lg:mt-4 pt-2 sm:pt-3 lg:pt-4 border-t-2 border-black text-xs text-[#666] font-[clarendon]"
          variants={fadeInUp}
        >
          <span className="text-xs">★ PREMIUM QUALITY ★</span>
          <span className="text-xs">{project.techStack.length} TECHNOLOGIES</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSection;
