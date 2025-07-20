"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Separator from "../components/separator";
import BackgroundImage from "@/assets/images/background-new.png";


const BlogPage = () => {
  const allBlogPosts = [
    {
      id: 1,
      title: "What Are the Ways We Can Center a Div in CSS?",
      excerpt:
        "A comprehensive guide to the various methods of centering elements in CSS, from the classic flexbox approach to modern grid techniques and everything in between.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "CSS",
      slug: "ways-to-center-div-css",
      featured: true
    }
  ];

  const categories = ["All", "CSS"];

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
    <motion.main
      className="min-h-screen bg-[#f5f5dc] relative overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${BackgroundImage.src})`
      }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Back to Home Button - Top Left */}
      <motion.div 
        className="absolute top-4 left-4 z-20"
        variants={fadeInUp}
      >
        <Link href="/">
          <motion.button
            className="bg-black text-white font-[applewood] px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base"
            whileHover={{
              scale: 1.05,
              boxShadow: "-4px 4px 0px rgba(0, 0, 0, 1)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
              }
            }}
          >
            ← Back to Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-6 pt-20 sm:pt-24">

        {/* Vintage Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={fadeInUp}
        >
          <Separator height={6} width={100} color="black" verticalSpacing={2} />
          <Separator height={1} width={100} color="black" />
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-2 sm:p-4 font-[CloisterBlack]"
            variants={fadeInUp}
          >
            Blogs
          </motion.h1>
          <Separator height={1} width={100} color="black" />
          <motion.p 
            className="text-sm sm:text-base lg:text-xl font-[clarendon] text-gray-800 max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-4"
            variants={fadeInUp}
          >
            Exploring the intersection of design, development, and digital
            innovation. Thoughts, tutorials, and insights from the front lines
            of web creation.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="w-full flex-1 flex flex-col gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-4 py-6 sm:py-8 lg:py-12"
          variants={staggerContainer}
        >
          <motion.div 
            className="w-full flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6"
            variants={staggerContainer}
          >
            <BlogCard post={allBlogPosts[0]} index={0} />
          </motion.div>
        </motion.div>

        <Separator height={5} width={100} color="black" verticalSpacing={4} />
      </div>
    </motion.main>
  );
};

const BlogCard = ({
  post,
  index
}: {
  post: any;
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



  return (
    <motion.div 
      className="flex flex-1 flex-col max-w-1/3 border-[2px] sm:border-[4px] lg:border-[6px] border-black outline-2 sm:outline-4 outline-offset-1 sm:outline-offset-2 outline-black p-2 sm:p-3 lg:p-4 min-h-0"
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
        {post.title}
      </motion.h2>
      <motion.div 
        className="flex-1 flex flex-col items-center min-h-0"
        variants={fadeInUp}
      >
        <motion.p 
          className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 flex-1 font-[clarendon]"
          variants={fadeInUp}
        >
          {post.excerpt}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-1 sm:gap-2 mb-2"
          variants={fadeInUp}
        >
          <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-[clarendon]">
            Category:
          </span>
          <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-[clarendon]">
            {post.category}
          </span>
        </motion.div>
        <motion.div 
          className="text-center change-cursor"
          variants={fadeInUp}
        >
          <motion.a
            href={`/blog/${post.slug}`}
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
            READ ARTICLE →
          </motion.a>
        </motion.div>
        <motion.div 
          className="flex justify-between items-center mt-2 sm:mt-3 lg:mt-4 pt-2 sm:pt-3 lg:pt-4 border-t-2 border-black text-xs text-[#666] font-[clarendon]"
          variants={fadeInUp}
        >
          <span className="text-xs">★ {post.readTime} ★</span>
          <span className="text-xs">{post.date}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;
