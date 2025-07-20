import React from 'react'
import Separator from './separator'
import Link from 'next/link'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Digital Craftsmanship",
      excerpt: "Exploring the intersection of design and development, where pixels meet purpose and code becomes canvas...",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Design",
      slug: "art-of-digital-craftsmanship"
    },
    {
      id: 2,
      title: "Building Responsive Experiences",
      excerpt: "How modern web development transcends screen sizes to create seamless user experiences across all devices...",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Development",
      slug: "building-responsive-experiences"
    },
    {
      id: 3,
      title: "The Psychology of User Interface",
      excerpt: "Understanding how thoughtful design decisions can influence user behavior and create meaningful interactions...",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "UX",
      slug: "psychology-of-user-interface"
    },
    {
      id: 4,
      title: "Performance as a Design Principle",
      excerpt: "Why speed and efficiency should be considered fundamental aspects of modern web design...",
      date: "November 30, 2024",
      readTime: "4 min read",
      category: "Performance",
      slug: "performance-as-design-principle"
    }
  ]

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <Separator height={5} width={100} color="black" verticalSpacing={4} />
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[lucian] mb-4">
          BLOG
        </h2>
        <p className="text-lg font-[clarendon] text-gray-700 max-w-2xl mx-auto">
          Thoughts on design, development, and the digital landscape
        </p>
        <Separator height={2} width={100} color="black" verticalSpacing={4} />
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <article 
            key={post.id}
            className="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Post Header */}
            <div className="p-6 border-b-4 border-black">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-[clarendon] bg-black text-white px-3 py-1">
                  {post.category}
                </span>
                <span className="text-sm font-[clarendon] text-gray-600">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-[clarendon] font-bold mb-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-sm font-[clarendon] text-gray-600">
                {post.date}
              </p>
            </div>

            {/* Post Content */}
            <div className="p-6">
              <p className="font-[clarendon] text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center font-[clarendon] text-sm font-bold hover:underline group"
              >
                Read More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-12">
        <Link 
          href="/blog"
          className="inline-flex items-center font-[clarendon] text-lg font-bold bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors border-2 border-black"
        >
          View All Posts
          <span className="ml-2">→</span>
        </Link>
      </div>

      <Separator height={5} width={100} color="black" verticalSpacing={4} />
    </div>
  )
}

export default BlogSection 