import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Users, Star, Clock, ChevronDown, ChevronUp, Quote } from 'lucide-react'

const Teaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [showReviews, setShowReviews] = useState(false)

  const courses = [
    {
      title: 'Complete Data Science Bootcamp',
      description: 'Comprehensive course covering Python, statistics, machine learning, and data visualization.',
      students: '2,500+',
      rating: '4.9',
      duration: '40 hours',
      topics: ['Python Programming', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL']
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'Deep dive into ML algorithms, model selection, and evaluation techniques.',
      students: '1,800+',
      rating: '4.8',
      duration: '25 hours',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
    },
    {
      title: 'Advanced Analytics with Python',
      description: 'Advanced techniques in data analysis, time series, and predictive modeling.',
      students: '1,200+',
      rating: '4.9',
      duration: '30 hours',
      topics: ['Time Series Analysis', 'Advanced Pandas', 'Statistical Modeling', 'A/B Testing']
    }
  ]

  const teachingStats = [
    { icon: Users, label: 'Total Students', value: '5,000+' },
    { icon: GraduationCap, label: 'Courses Created', value: '15+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Clock, label: 'Teaching Hours', value: '200+' }
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Data Scientist at Google",
      course: "Complete Data Science Bootcamp",
      rating: 5,
      text: "Mamdouh's teaching style is exceptional. The way he breaks down complex concepts into digestible pieces made machine learning accessible to me. I landed my dream job at Google within 3 months of completing the course!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Senior Data Analyst at Microsoft",
      course: "Machine Learning Fundamentals",
      rating: 5,
      text: "The hands-on approach and real-world projects in this course were exactly what I needed. Mamdouh's expertise in payment processing and financial analytics added tremendous value to my career transition.",
      date: "3 months ago"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "ML Engineer at Stripe",
      course: "Advanced Analytics with Python",
      rating: 5,
      text: "Incredibly detailed and practical course. The section on time series analysis helped me tackle complex forecasting problems at work. Mamdouh is not just a teacher, he's a mentor.",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Product Manager at PayPal",
      course: "Complete Data Science Bootcamp",
      rating: 5,
      text: "As someone transitioning from finance to tech, this course was a game-changer. The payment processing insights were particularly valuable given my current role at PayPal.",
      date: "4 months ago"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Data Scientist at Airbnb",
      course: "Machine Learning Fundamentals",
      rating: 5,
      text: "The course structure is perfect for working professionals. I could learn at my own pace while applying concepts immediately at work. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Senior Analyst at Goldman Sachs",
      course: "Advanced Analytics with Python",
      rating: 5,
      text: "Mamdouh's deep understanding of financial systems really shows in his teaching. The fraud detection techniques I learned are directly applicable to my work in risk management.",
      date: "6 weeks ago"
    }
  ]

  return (
    <section id="teaching" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Teaching & Education
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Empowering the next generation of data professionals through comprehensive courses and mentorship
            </p>
          </div>

          {/* Teaching Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {teachingStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Courses */}
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="card"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-secondary-700 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="skill-badge"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary-600" />
                      <span className="text-secondary-700">
                        <strong>{course.students}</strong> students
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-accent-500 fill-current" />
                      <span className="text-secondary-700">
                        <strong>{course.rating}</strong> rating
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span className="text-secondary-700">
                        <strong>{course.duration}</strong> content
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Student Reviews Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                What Students Say
              </h3>
              <p className="text-secondary-600 mb-6">
                Real feedback from students who've transformed their careers
              </p>
              
              {/* Expand/Collapse Button */}
              <button
                onClick={() => setShowReviews(!showReviews)}
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {showReviews ? (
                  <>
                    <span>Hide Reviews</span>
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Read Student Reviews</span>
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Expandable Reviews */}
            <AnimatePresence>
              {showReviews && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={review.id}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />
                        
                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        
                        {/* Review Text */}
                        <p className="text-secondary-700 mb-4 leading-relaxed text-sm">
                          "{review.text}"
                        </p>
                        
                        {/* Course */}
                        <div className="mb-3">
                          <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                            {review.course}
                          </span>
                        </div>
                        
                        {/* Author Info */}
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-secondary-900 text-sm">
                                {review.name}
                              </h4>
                              <p className="text-secondary-600 text-xs">
                                {review.role}
                              </p>
                            </div>
                            <span className="text-secondary-500 text-xs">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-12">
            <a
              href="https://linkedin.com/in/mamjaber"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect for Teaching Opportunities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Teaching
