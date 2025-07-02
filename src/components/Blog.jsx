import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Dive into the fundamentals of machine learning, from basic concepts to your first model. Perfect for beginners looking to enter the field of data science.",
      content: "Machine learning is transforming industries worldwide, and understanding its basics is crucial for anyone interested in data science...",
      author: "Mamdouh Jaber",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "/api/placeholder/600/300",
      tags: ["ML", "Beginner", "Python", "Data Science"]
    },
    {
      id: 2,
      title: "Python Data Analysis: Essential Libraries You Need to Know",
      excerpt: "Explore the most important Python libraries for data analysis including Pandas, NumPy, and Matplotlib. Learn when and how to use each one effectively.",
      content: "Python has become the go-to language for data analysis due to its rich ecosystem of libraries...",
      author: "Mamdouh Jaber",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Python",
      image: "/api/placeholder/600/300",
      tags: ["Python", "Pandas", "NumPy", "Data Analysis"]
    },
    {
      id: 3,
      title: "Building Interactive Dashboards with Tableau",
      excerpt: "Learn how to create compelling data visualizations and interactive dashboards that tell a story with your data using Tableau.",
      content: "Data visualization is crucial for communicating insights effectively to stakeholders...",
      author: "Mamdouh Jaber",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Visualization",
      image: "/api/placeholder/600/300",
      tags: ["Tableau", "Visualization", "Dashboard", "Business Intelligence"]
    },
    {
      id: 4,
      title: "SQL for Data Scientists: Advanced Techniques",
      excerpt: "Master advanced SQL techniques including window functions, CTEs, and optimization strategies that every data scientist should know.",
      content: "While many data scientists focus on Python and R, SQL remains one of the most important skills...",
      author: "Mamdouh Jaber",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "SQL",
      image: "/api/placeholder/600/300",
      tags: ["SQL", "Database", "Advanced", "Data Science"]
    },
    {
      id: 5,
      title: "Deep Learning with TensorFlow: From Theory to Practice",
      excerpt: "A comprehensive guide to building neural networks with TensorFlow, covering everything from basic concepts to deployment.",
      content: "Deep learning has revolutionized artificial intelligence, enabling breakthroughs in computer vision...",
      author: "Mamdouh Jaber",
      date: "2023-12-20",
      readTime: "18 min read",
      category: "Deep Learning",
      image: "/api/placeholder/600/300",
      tags: ["TensorFlow", "Deep Learning", "Neural Networks", "AI"]
    },
    {
      id: 6,
      title: "Career Transition: From Traditional Analytics to Data Science",
      excerpt: "Practical advice for professionals looking to transition into data science, including skills to develop and common pitfalls to avoid.",
      content: "Making the transition from traditional analytics to data science can be challenging but rewarding...",
      author: "Mamdouh Jaber",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Career",
      image: "/api/placeholder/600/300",
      tags: ["Career", "Transition", "Data Science", "Analytics"]
    }
  ]

  const categories = ['All', 'Machine Learning', 'Python', 'Visualization', 'SQL', 'Deep Learning', 'Career']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Science Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on data science, machine learning, and analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Post Image */}
                  <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-secondary-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-secondary-700 mb-2">
                  No posts found
                </h3>
                <p className="text-secondary-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
