import React from "react";
import heroImage from "@/assets/images/image.png";
import { day, monthName, year } from "../helper/dates";
import Separator from "./separator";
import {
  Github,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  Twitter
} from "lucide-react";

const HeroContent = () => {
  return (
    <section className="my-4">
      <h1 className="font-[FG-condensed] uppercase text-[5.2rem] pt-4 leading-[1]">
        An Artisan of the UI Interface and Experience
      </h1>
      <div className="flex gap-8">
        <img
          src={heroImage.src}
          alt="hero-image"
          style={{
            height: "580px",
            width: "570px",
            objectFit: "cover"
          }}
          className="border-[8px] border-black"
        />
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-[FG-condensed] uppercase text-[5.2rem] leading-[1]">
              Febin Varghese Crafts Code into Compelling Interfaces
            </h1>
            <p className="font-[clarendon] text-[1.4rem] text-wrap max-w-[900px] font-medium text-[#2b2a2a]">
              {`${monthName}, ${day} ${year} — Febin Varghese Talks About the Beauty
            of Web Development Craftsmanship. With close to three years of experience
            building products that not only function well but feel right, Febin
            Varghese brings a thoughtful approach to web development. He
            works fluently with Multiple frontend frameworks, and understands the
            backend well enough to connect both worlds seamlessly. His design
            instincts are backed by a solid command of Figma, where every layout
            begins as a sketch with purpose. For Febin, clean code and clean 
            design go hand in hand he doesn’t just ship features, he shapes
            experiences and products.`}
            </p>
          </div>
          <div
            className="flex flex-col justify-between border-black w-[420px] border-[6px] relative font-[clarendon]"
            style={{
              boxShadow: "-10px 5px 0px rgba(0, 0, 0, 1)"
            }}
          >
            <div className="p-6 change-cursor">
              <h1 className=" text-3xl font-[applewood]">Contacts</h1>
              <div className="flex flex-col gap-4 text-xl pt-6">
                <div className="flex gap-2 items-center">
                  <MailIcon size={24} />
                  Mail
                </div>
                <div className="flex gap-2 items-center">
                  <Twitter size={24} />X ( Twitter )
                </div>
                <div className="flex gap-2 items-center">
                  <Github size={24} />
                  Github
                </div>
                <div className="flex gap-2 items-center">
                  <LinkedinIcon size={24} />
                  Linkedin
                </div>
              </div>
            </div>

            {/* <Separator height={4} width={100} color="black" /> */}
            <div className="p-5 bg-black h-auto">
              <h1 className="text-3xl font-[applewood] text-center text-[#d7c6a7]">Urgent!!</h1>
              <p className=" text-2xl text-[#d7c6a7] py-8">Help needed! This developer can't center a div</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
