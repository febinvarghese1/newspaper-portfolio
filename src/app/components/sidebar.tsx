"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        delay: i * 0.1
      }
    })
  };

  const navigationItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/#about" },
    { icon: Briefcase, label: "Experience", href: "/#experience" },
    { icon: FileText, label: "Projects", href: "/#projects" },
    { icon: FileText, label: "Blog", href: "/blog" },
    { icon: Mail, label: "Contact", href: "/#contact" }
  ];

  const socialItems = [
    { icon: Github, label: "GitHub", href: "https://github.com/febinvarghese1" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/febin-varghese-0530191b8/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/febv388" },
    {icon: Mail, label: "Email", href: "mailto:febv183@gmail.com"}
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-screen w-full max-w-[320px] sm:max-w-[375px] md:max-w-[425px] lg:w-80 bg-gradient-to-b from-[#d9c7a6] to-[#f5f5dc] shadow-2xl z-50 border-l-2 sm:border-l-4 border-black flex flex-col overflow-hidden"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              type: "spring" as const,
              stiffness: 400,
              damping: 30
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b-2 sm:border-b-4 border-black">
              <div className="flex flex-col items-center">
                <p className="text-sm sm:text-base lg:text-xl font-[applewood] px-1 sm:px-2 py-1 bg-black text-[#d9c7a6]">
                  Special
                </p>
                <p className="text-sm sm:text-base lg:text-xl font-[applewood] text-black p-1 border-b-2 border-black">
                  Edition
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1 sm:p-2 hover:bg-black/10 rounded-full transition-colors"
              >
                <X size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        onClose();
                        
                        // If it's an internal link (starts with /#), handle smooth scrolling
                        if (item.href.startsWith('/#')) {
                          e.preventDefault();
                          const targetId = item.href.replace('/#', '');
                          const targetElement = document.getElementById(targetId);
                          
                          if (targetElement) {
                            targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }
                        // If it's an external page link (like /blog), let it navigate normally
                      }}
                      className="flex  change-cursor items-center gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-3 lg:p-4 rounded-lg hover:bg-black/10 transition-colors group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="p-1 sm:p-2 bg-black/10 rounded-lg group-hover:bg-black/20 transition-colors"
                      >
                        <item.icon
                          size={18}
                          className="sm:w-5 sm:h-5 lg:w-5 lg:h-5"
                        />
                      </motion.div>
                      <span className="font-[CloisterBlack] text-sm sm:text-base lg:text-lg group-hover:text-black/80 transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Social Links */}
            <div className="border-t-2 border-black p-3 sm:p-4 lg:p-6 mt-auto">
              <h3 className="font-[CloisterBlack] text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 text-center">
                Connect
              </h3>
              <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4">
                {socialItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="change-cursor p-2 sm:p-3 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <item.icon
                      size={18}
                      className="sm:w-5 sm:h-5 lg:w-5 lg:h-5"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
