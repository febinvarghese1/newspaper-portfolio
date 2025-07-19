import React from "react";
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
    link: "https://edently.in",
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
  return (
    <section className="w-full flex flex-col">
      <Separator height={6} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      <h1 className="text-8xl p-4 font-[CloisterBlack]">Side Projects</h1>
      <Separator height={1} width={100} color="black" />
      <div className="w-full flex-1 flex flex-col gap-6 p-4 py-12">
        <div className="w-full flex-1 flex gap-6">
          <ProjectCard project={projects[0]} index={0} />

          <ProjectCard project={projects[1]} index={2} />
        </div>
        <div className="w-full flex gap-6">
          <ProjectCard project={projects[2]} index={1} />
          <ProjectCard project={projects[3]} index={4} />
          <ProjectCard project={projects[4]} index={2} />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
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
    <div className="flex flex-1 flex-col border-[6px] p-7 border-black outline-4 outline-offset-2 outline-black p-4min-h-0">
      <h2 className="text-3xl  text-black mb-2 font-[applewood]">
        {project.name}
      </h2>
      <div className="flex-1 flex flex-col items-center min-h-0">
        <img
          src={getCurrentImage()}
          alt="project"
          className=" object-cover mb-2"
          style={{
            height: "300px",
            width: "300px",
            filter: "sepia(0.5)"
          }}
        />
        <p className="text-lg text-gray-800 mb-2 flex-1 font-[clarendon]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-lg text-gray-800 font-[clarendon]">
            Tech Stack:
          </span>
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-lg text-gray-800 font-[clarendon]"
            >
              {tech},
            </span>
          ))}
        </div>
        <div className="text-center change-cursor ">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block change-cursor  bg-black text-white px-4 py-2 font-[FG-condensed] text-lg hover:bg-gray-800 transition-colors duration-300 border-2 border-black hover:border-gray-800"
          >
            VIEW PROJECT →
          </a>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-black text-xs text-[#666] font-[clarendon]">
          <span>★ PREMIUM QUALITY ★</span>
          <span>{project.techStack.length} TECHNOLOGIES</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
