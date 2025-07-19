"use client";
import HeaderImage from "@/assets/images/illustrations/rose.png";
import Image from "next/image";
import Separator from "./separator";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./sidebar";

const HeaderSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="w-full p-4 h-auto flex items-center justify-between">
        <div className=" lg:flex items-center justify-center  text-[#d9c7a6]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-[applewood] px-2 py-3 bg-black">
              Special
            </p>
            <p className="text-2xl font-[applewood]  text-black p-1 lg:p-2.5 border-b-[6px] border-black">
              Edition
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-[CloisterBlack]">
          <h1 className="text-4xl lg:text-8xl">Personal</h1>
          <Image
            className="max-w-[150px] max-h-[130px] object-cover object-center"
            src={HeaderImage}
            alt="Header Image"
          />
          <h1 className="text-4xl lg:text-8xl">Portfolio</h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="flex items-center justify-center gap-4 change-cursor p-2 hover:bg-black/10 rounded-full transition-colors"
          animate={isSidebarOpen ? { rotate: 90, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
          <MenuIcon size={48} />
        </motion.button>
      </header>
      <Separator height={1} width={100} color="black" />
      <Separator height={10} width={100} color="black" verticalSpacing={4} />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default HeaderSection;
