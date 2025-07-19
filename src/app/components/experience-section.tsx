import React from "react";
import Separator from "@/app/components/separator";
import ExperienceCard from "./experience-card";
import CompanyLogo from "@/assets/images/illustrations/company-logo.png";
import Coding from "@/assets/images/illustrations/body-builder.png";
import Award from "@/assets/images/illustrations/gramaphone.png";

const ExperienceSection = () => {
  const experiences = [
    {
      companyLogo: CompanyLogo.src,
      companyName: "SurveySparrow",
      position: "Senior Frontend Developer",
      duration: "Jul 2024 - Present",
      responsibilities: [
        "Led frontend development under CTO Office, shipping features at high velocity",
        "Building Products POC which can be later developed into a full-fledged product",
        "Developed full-stack solutions and backend integrations",
        "Collaborated with CTO on technical strategy and business alignment",
        "Built products, websites, and managed backend tasks",
        "Used Figma for design and development workflows"
      ]
    },
    {
      companyName: "SurveySparrow",
      position: "Frontend Developer",
      duration: "May 2023 - Jun 2024",
      responsibilities: [
        "Built responsive web applications with React and TypeScript",
        "Managed AppNest marketplace integration and team coordination",
        "Developed and maintained in-house component library",
        "Delivered high-quality solutions with efficient project management",
        "Internship experience: Jan 2023 - May 2023"
      ]
    },
    {
      companyName: "SurveySparrow",
      position: "Frontend Developer Intern",
      duration: "Jan 2023 - May 2023",
      responsibilities: [
        "Built responsive web applications with React and TypeScript",
        "Managed AppNest marketplace integration and team coordination",
        "Working on SurveySparrow Product",
        "Learned the basics of React and TypeScript"
      ]
    }
  ];

  return (
    <section className="w-full">
      <Separator height={6} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      <div className="flex flex-col xl:flex-row items-start justify-between w-full">
        <div className="w-full xl:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-2 sm:p-4 font-[CloisterBlack]">Experiences</h1>
          <Separator height={1} width={100} color="black" />

          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                companyLogo={experience.companyLogo}
                companyName={experience.companyName}
                position={experience.position}
                duration={experience.duration}
                responsibilities={experience.responsibilities}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
        <div className="hidden xl:block w-[6px] bg-black self-stretch mx-4" />
        <div className="w-full xl:w-1/2">
          <div className="flex flex-col gap-4">
            <SkillsCard />
            <AwardCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

const SkillsCard = () => {
  const skills = [
    "TypeScript",
    "Next.js", 
    "ORM",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "React.js",
    "Tailwind CSS"
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-2 sm:p-4 font-[CloisterBlack] xl:pl-10">Skills</h1>
      <Separator height={1} width={100} color="black" />
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 p-2 sm:p-4 xl:px-10 xl:py-8">
        <img
          src={Coding.src}
          alt="coding"
          className="w-full max-w-[250px] h-[250px] mx-auto xl:mx-0"
          style={{
            objectFit: "cover",
            filter: "sepia(0.8)"
          }}
        />
        <div className="flex flex-col gap-3 xl:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[FG-condensed] leading-[1] border-b-2 sm:border-b-4 border-black pb-2">
            TECHNICAL EXPERTISE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 xl:gap-3">
                <div className="w-2 h-2 xl:w-3 xl:h-3 bg-black rounded-full"></div>
                <span className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-[clarendon] text-[#212121] tracking-wide">
                  {skill}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 xl:mt-6 p-3 xl:p-4 border-2 sm:border-4 border-black">
            <p className="text-sm sm:text-base xl:text-lg font-[clarendon] text-[#212121] leading-relaxed">
            "All our dreams can come true, if we have the courage to pursue them."
            </p>
            <p className="text-xs sm:text-sm font-[clarendon] text-[#666] mt-2 italic">
              - Walt Disney
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AwardCard = () => {
  const awards = [
    {
      title: "Calmer of the Storms",
      company: "SurveySparrow",
      date: "Nov 2024",
      description: "Recognized for exceptional problem-solving and crisis management"
    },
    {
      title: "Rising Star",
      company: "SurveySparrow", 
      date: "Nov 2023",
      description: "Awarded for outstanding performance and rapid growth"
    }
  ];

  return (
    <>
    <div>
    <Separator height={5} width={100} color="black" />
    <Separator height={1} width={100} color="black" verticalSpacing={2}/>
    </div>
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-2 sm:p-4 font-[CloisterBlack] xl:pl-10">Awards</h1>
      <Separator height={1} width={100} color="black" verticalSpacing={2}/>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 p-2 sm:p-4 xl:px-10 xl:py-8">
        <img
          src={Award.src}
          alt="award-trophy"
          className="w-full max-w-[250px] h-[250px]  mx-auto xl:mx-0"
          style={{
            objectFit: "cover",
            filter: "sepia(0.8)"
          }}
        />
        <div className="flex flex-col gap-4 xl:gap-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[FG-condensed] leading-[1] border-b-2 sm:border-b-4 border-black pb-2">
            RECOGNITIONS & HONORS
          </h2>
          <div className="flex flex-col gap-4 xl:gap-6">
            {awards.map((award, index) => (
              <div key={index} className="border-l-2 sm:border-l-4 border-black pl-3 xl:pl-6">
                <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-[FG-condensed] leading-[1] text-black">
                  {award.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl font-[clarendon] text-[#212121] mt-1">
                  {award.company} - {award.date}
                </p>
                <p className="text-xs sm:text-sm md:text-base xl:text-lg font-[clarendon] text-[#666] mt-2 italic">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 xl:p-4 border-2 sm:border-4 border-black">
            <p className="text-sm sm:text-base xl:text-lg font-[clarendon] text-[#212121] leading-relaxed">
              "It Always Seems Impossible Until It's Done"
            </p>
            <p className="text-xs sm:text-sm font-[clarendon] text-[#666] mt-2 italic">
              - Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
