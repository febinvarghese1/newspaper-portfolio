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

  const imageHover = {
    hover: {
      scale: 1.02,
      boxShadow: "-12px 6px 0px rgba(0, 0, 0, 1)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      boxShadow: "-12px 8px 0px rgba(0, 0, 0, 1)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconHover = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      className="my-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 
        className="font-[FG-condensed] uppercase text-[5.2rem] pt-4 leading-[1]"
        variants={fadeInUp}
      >
        An Artisan of the UI Interface and Experience
      </motion.h1>
      <motion.div 
        className="flex flex-col lg:flex-row gap-8"
        variants={staggerContainer}
      >
        <motion.img
          src={heroImage.src}
          alt="hero-image"
          style={{
            height: "580px",
            width: "570px",
            objectFit: "cover"
          }}
          className="border-[8px] border-black w-full max-w-[570px] h-auto"
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
          className="flex flex-col lg:flex-row gap-6"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col gap-4"
            variants={fadeInUp}
          >
            <motion.h1 
              className="font-[FG-condensed] uppercase text-[5.2rem] leading-[1]"
              variants={fadeInUp}
            >
              Febin Varghese Crafts Code into Compelling Interfaces
            </motion.h1>
            <motion.p 
              className="font-[clarendon] text-[1.4rem] text-wrap max-w-[900px] font-medium text-[#2b2a2a]"
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
            className="flex flex-col justify-between border-black w-[420px] border-[6px] relative font-[clarendon]"
            style={{
              boxShadow: "-10px 5px 0px rgba(0, 0, 0, 1)"
            }}
            variants={fadeInUp}
        
          >
            <motion.div 
              className="p-6 change-cursor"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-3xl font-[applewood]"
                variants={fadeInUp}
              >
                Contacts
              </motion.h1>
              <motion.div 
                className="flex flex-col gap-4 text-xl pt-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex gap-2 items-center hover:bg-black/5 p-2 rounded transition-colors"
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
                    <MailIcon size={24} />
                  </motion.div>
                  Mail
                </motion.div>
                <motion.div 
                  className="flex gap-2 items-center hover:bg-black/5 p-2 rounded transition-colors"
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
                    <Twitter size={24} />
                  </motion.div>
                  X ( Twitter )
                </motion.div>
                <motion.div 
                  className="flex gap-2 items-center hover:bg-black/5 p-2 rounded transition-colors"
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
                    <Github size={24} />
                  </motion.div>
                  Github
                </motion.div>
                <motion.div 
                  className="flex gap-2 items-center hover:bg-black/5 p-2 rounded transition-colors"
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
                    <LinkedinIcon size={24} />
                  </motion.div>
                  Linkedin
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="p-5 bg-black h-auto"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-3xl font-[applewood] text-center text-[#d7c6a7]"
                variants={fadeInUp}
              >
                Urgent!!
              </motion.h1>
              <motion.p 
                className="text-2xl text-[#d7c6a7] py-8"
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
