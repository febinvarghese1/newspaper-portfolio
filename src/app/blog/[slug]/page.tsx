"use client";
import React, { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Separator from '../../components/separator'
import BackgroundImage from "@/assets/images/background-new.png";

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  // Unwrap params Promise
  const unwrappedParams = use(params);
  
  // Hardcoded blog posts data
  const blogPosts = {
    "ways-to-center-div-css": {
      title: "What Are the Ways We Can Center a Div in CSS?",
      date: "July 20, 2025",
      readTime: "8 min read",
      category: "CSS",
      excerpt: "A comprehensive guide to the various methods of centering elements in CSS, from the classic flexbox approach to modern grid techniques and everything in between.",
      content: `
        <p class="mb-6">Centering elements in CSS is one of the most fundamental yet frequently asked questions in web development. Whether you're a beginner or an experienced developer, understanding the different methods and when to use each one is crucial for creating well-structured layouts.</p>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">1. Flexbox Method (Most Popular)</h2>
        <p class="mb-6">Flexbox is the modern, go-to solution for centering elements. It's flexible, intuitive, and works in both horizontal and vertical directions.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .container {<br>
            &nbsp;&nbsp;display: flex;<br>
            &nbsp;&nbsp;justify-content: center;<br>
            &nbsp;&nbsp;align-items: center;<br>
            &nbsp;&nbsp;min-height: 100vh;<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">2. Grid Method (Modern Alternative)</h2>
        <p class="mb-6">CSS Grid provides another powerful way to center elements, especially useful when working with complex layouts.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .container {<br>
            &nbsp;&nbsp;display: grid;<br>
            &nbsp;&nbsp;place-items: center;<br>
            &nbsp;&nbsp;min-height: 100vh;<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">3. Absolute Positioning Method</h2>
        <p class="mb-6">The classic absolute positioning method, though older, is still useful in specific scenarios.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .container {<br>
            &nbsp;&nbsp;position: relative;<br>
            &nbsp;&nbsp;height: 100vh;<br>
            }<br><br>
            .centered {<br>
            &nbsp;&nbsp;position: absolute;<br>
            &nbsp;&nbsp;top: 50%;<br>
            &nbsp;&nbsp;left: 50%;<br>
            &nbsp;&nbsp;transform: translate(-50%, -50%);<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">4. Margin Auto Method (Horizontal Only)</h2>
        <p class="mb-6">The simplest method for horizontal centering of block elements with a known width.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .centered {<br>
            &nbsp;&nbsp;width: 300px;<br>
            &nbsp;&nbsp;margin: 0 auto;<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">5. Text-Align Method (Inline Elements)</h2>
        <p class="mb-6">Perfect for centering inline or inline-block elements within their container.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .container {<br>
            &nbsp;&nbsp;text-align: center;<br>
            }<br><br>
            .centered {<br>
            &nbsp;&nbsp;display: inline-block;<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">6. CSS Calc Method</h2>
        <p class="mb-6">A mathematical approach using CSS calc() function for precise positioning.</p>
        
        <div class="bg-[#f5f5dc] border-[2px] border-black text-black p-4 rounded-lg mb-6">
          <code class="text-sm">
            .centered {<br>
            &nbsp;&nbsp;position: absolute;<br>
            &nbsp;&nbsp;left: calc(50% - 150px);<br>
            &nbsp;&nbsp;top: calc(50% - 100px);<br>
            &nbsp;&nbsp;width: 300px;<br>
            &nbsp;&nbsp;height: 200px;<br>
            }
          </code>
        </div>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">When to Use Each Method</h2>
        
        <h3 class="text-xl font-[clarendon] font-bold mb-3 mt-6">Flexbox</h3>
        <p class="mb-4">Use when you need both horizontal and vertical centering, or when working with dynamic content. Best for modern browsers and responsive designs.</p>

        <h3 class="text-xl font-[clarendon] font-bold mb-3">Grid</h3>
        <p class="mb-4">Use for complex layouts or when you need precise control over both axes. Excellent for modern browsers and when you want to center multiple elements.</p>

        <h3 class="text-xl font-[clarendon] font-bold mb-3">Absolute Positioning</h3>
        <p class="mb-4">Use when you need to center an element relative to its positioned parent, or when working with overlays and modals.</p>

        <h3 class="text-xl font-[clarendon] font-bold mb-3">Margin Auto</h3>
        <p class="mb-4">Use for simple horizontal centering of block elements with known dimensions. Great for legacy support.</p>

        <h3 class="text-xl font-[clarendon] font-bold mb-3">Text-Align</h3>
        <p class="mb-4">Use for centering inline elements like text, images, or buttons within their containers.</p>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">Browser Support Considerations</h2>
        <p class="mb-6">While Flexbox and Grid have excellent modern browser support, always consider your target audience. For older browsers, you might need to use fallback methods or polyfills.</p>

        <h2 class="text-2xl font-[clarendon] font-bold mb-4 mt-8">Best Practices</h2>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Prefer Flexbox for most centering needs</li>
          <li>Use Grid for complex layouts</li>
          <li>Consider the element's display type</li>
          <li>Test across different screen sizes</li>
          <li>Keep fallbacks for older browsers</li>
        </ul>

        <p class="mb-6">Understanding these different methods gives you the flexibility to choose the right approach for each specific situation. The key is to understand not just how to center elements, but when and why to use each method.</p>
      `
    }
  }

  const post = blogPosts[unwrappedParams.slug as keyof typeof blogPosts]

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

  if (!post) {
    return (
      <motion.div 
        className="min-h-screen bg-[#f5f5dc] relative overflow-x-hidden flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${BackgroundImage.src})`
        }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h1 className="text-4xl font-[CloisterBlack] mb-4">Post Not Found</h1>
          <Link 
            href="/blog"
            className="font-[clarendon] text-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors border-2 border-black"
          >
            Back to Blog
          </Link>
        </motion.div>
      </motion.div>
    )
  }

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
        
        {/* Newspaper Masthead */}
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
          <motion.div 
            className="flex justify-between items-center px-4 sm:px-8 lg:px-16 mb-4"
            variants={fadeInUp}
          >
            <span className="text-sm sm:text-base font-[clarendon]">EST. 1920</span>
            <span className="text-sm sm:text-base font-[clarendon] font-bold">{post.date}</span>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-1">
                <span className="text-xs sm:text-sm font-[clarendon] font-bold">1$</span>
              </div>
              <span className="text-xs font-[clarendon]">PRICE ONE CENT</span>
            </div>
          </motion.div>
          <Separator height={1} width={100} color="black" />
        </motion.div>

        {/* Newspaper Article Layout */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          <div className="border-[4px] sm:border-[6px] lg:border-[8px] border-black shadow-2xl relative">
            {/* Vintage Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-black"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-black"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-black"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-black"></div>

            {/* Article Header */}
            <motion.div 
              className="p-6 sm:p-8 lg:p-10 border-b-[4px] border-black"
              variants={fadeInUp}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <motion.span 
                  className="text-sm sm:text-base font-[clarendon] bg-black text-white px-4 py-2 w-fit"
                  variants={fadeInUp}
                >
                  ✦ {post.category} • {post.readTime} ✦
                </motion.span>
                <motion.span 
                  className="text-sm sm:text-base font-[clarendon] text-gray-600 italic"
                  variants={fadeInUp}
                >
                  Published on {post.date}
                </motion.span>
              </div>
              
              {/* Decorative Line */}
              <div className="w-full h-px bg-black mb-6"></div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[clarendon] font-bold mb-6 leading-tight tracking-wide"
                variants={fadeInUp}
              >
                {post.title}
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl font-[clarendon] text-gray-700 mb-6 leading-relaxed italic"
                variants={fadeInUp}
              >
                {post.excerpt}
              </motion.p>
            </motion.div>

            {/* Article Content - Multi-column Layout */}
            <motion.div 
              className="p-6 sm:p-8 lg:p-10"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-1">
                  <div 
                    className="font-[clarendon] text-base sm:text-lg leading-relaxed prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>


              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 gap-4"
            variants={fadeInUp}
          >
            <Link 
              href="/blog"
              className="font-[clarendon] text-base sm:text-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors border-2 border-black"
            >
              ← Back to Blog
            </Link>
            
            <Link 
              href="/"
              className="font-[clarendon] text-base sm:text-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors border-2 border-black"
            >
              Home
            </Link>
          </motion.div>
        </motion.div>

        <Separator height={5} width={100} color="black" verticalSpacing={4} />
      </div>
    </motion.main>
  )
}

export default BlogPostPage 