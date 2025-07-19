"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/images/image.png";
import { day, monthName, year } from "../helper/dates";
import {
  Github,
  LinkedinIcon,
  MailIcon,
  Twitter
} from "lucide-react";

const HeroContent = () => {
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
      className="my-2 sm:my-4 px-2 sm:px-4 sm:py-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 
        className="font-[FG-condensed] uppercase text-2xl sm:text-3xl md:text-[3.5rem] lg:text-[4rem] xl:text-[6rem]  2xl:text-[5rem] py-4 sm:pt-4 leading-[1]"
        variants={fadeInUp}
      >
        An Artisan of the UI Interface and Experience
      </motion.h1>
      <motion.div 
        className="flex flex-col items-center sm:items-start md:flex-row gap-4 sm:gap-6 lg:gap-8"
        variants={staggerContainer}
      >
        <motion.img
          src={heroImage.src}
          alt="hero-image"
          style={{
            objectFit: "cover"
          }}
          className="border-[4px] sm:border-[6px] lg:border-[8px] border-black w-full max-w-[460px] h-auto aspect-[4/5] md:aspect-[1/2.22] xl:aspect-[4/5] sm:object-top "
          variants={fadeInUp}
          whileHover={{
            scale: 1.02,
            boxShadow: "-12px 6px 0px rgba(0, 0, 0, 1)",
            transition: {
              type: "spring" as const,
              stiffness: 300,
              damping: 20
            }
          }}
        />
        <motion.div 
          className="flex flex-col items-center pb-10 sm:pb-0 xl:items-start xl:flex-row gap-4 sm:gap-6"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col gap-3 sm:gap-4"
            variants={fadeInUp}
          >
            <motion.h1 
              className="font-[FG-condensed] uppercase text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[3rem] 2xl:text-[5rem] leading-[1]"
              variants={fadeInUp}
            >
              Febin Varghese Crafts Code into Compelling Interfaces
            </motion.h1>
            <motion.p 
              className="font-[clarendon] text-xs xs:text-sm sm:text-md  lg:text-xl text-wrap max-w-[900px] font-medium text-[#2b2a2a]"
              variants={fadeInUp}
            >
              {`${monthName}, ${day} ${year} — Febin Varghese Talks About the Beauty
            of Web Development Craftsmanship. With close to three years of experience
            building products that not only function well but feel right, Febin
            Varghese brings a thoughtful approach to web development. He
            works fluently with Multiple frontend frameworks, and understands the
            backend well enough to connect both worlds seamlessly. His design
            instincts are backed by a solid command of Figma, where every layout
            begins as a sketch with purpose. For Febin, clean code and clean 
            design go hand in hand he doesn't just ship features, he shapes
            experiences and products.`}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between border-black w-full max-w-[280px] border-[2px] sm:border-[4px] xl:border-[6px] relative font-[clarendon]"
            style={{
              boxShadow: "-6px 3px 0px rgba(0, 0, 0, 1)"
            }}
            variants={fadeInUp}
            whileHover={{
              y: -5,
              boxShadow: "-8px 5px 0px rgba(0, 0, 0, 1)",
              transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 25
              }
            }}
          >
            <motion.div 
              className="p-3 sm:p-4 xl:p-6 change-cursor"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-lg sm:text-2xl xl:text-3xl font-[applewood]"
                variants={fadeInUp}
              >
                Contacts
              </motion.h1>
              <motion.div 
                className="flex flex-col gap-2 sm:gap-3 xl:gap-4 text-sm sm:text-base xl:text-xl pt-3 sm:pt-4 xl:pt-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex gap-1 sm:gap-2 items-center hover:bg-black/5 p-1 sm:p-2 rounded transition-colors"
                  variants={fadeInUp}
                >
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 15
                      }
                    }}
                  >
                    <MailIcon size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                  </motion.div>
                  Mail
                </motion.div>
                <motion.div 
                  className="flex gap-1 sm:gap-2 items-center hover:bg-black/5 p-1 sm:p-2 rounded transition-colors"
                  variants={fadeInUp}
                >
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 15
                      }
                    }}
                  >
                    <Twitter size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                  </motion.div>
                  X ( Twitter )
                </motion.div>
                <motion.div 
                  className="flex gap-1 sm:gap-2 items-center hover:bg-black/5 p-1 sm:p-2 rounded transition-colors"
                  variants={fadeInUp}
                >
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 15
                      }
                    }}
                  >
                    <Github size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                  </motion.div>
                  Github
                </motion.div>
                <motion.div 
                  className="flex gap-1 sm:gap-2 items-center hover:bg-black/5 p-1 sm:p-2 rounded transition-colors"
                  variants={fadeInUp}
                >
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 15
                      }
                    }}
                  >
                    <LinkedinIcon size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                  </motion.div>
                  Linkedin
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="p-3 sm:p-4 xl:p-5 bg-black h-auto"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-[applewood] text-center text-[#d7c6a7]"
                variants={fadeInUp}
              >
                Urgent!!
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base xl:text-lg 2xl:text-2xl text-[#d7c6a7] py-4 sm:py-6 xl:py-8"
                variants={fadeInUp}
              >
                Help needed! This developer can't center a div
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroContent;
