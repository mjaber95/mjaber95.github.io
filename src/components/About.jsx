import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, BookOpen, Users, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: BarChart3, label: 'Years of Experience', value: '5+' },
    { icon: BookOpen, label: 'Students Taught', value: '1000+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Certifications', value: '10+' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Passionate data professional and educator with expertise in analytics, 
              machine learning, and data science education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-900 mb-6">
                Transforming Data into Insights
              </h3>
              <p className="text-secondary-700 mb-4 leading-relaxed">
                I'm a dedicated data professional with extensive experience in analytics, 
                machine learning, and business intelligence. My passion lies in extracting 
                meaningful insights from complex datasets and translating them into 
                actionable business strategies.
              </p>
              <p className="text-secondary-700 mb-4 leading-relaxed">
                As an educator, I'm committed to sharing knowledge and empowering the next 
                generation of data scientists. I believe in making complex concepts accessible 
                and fostering a deep understanding of data science fundamentals.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                My approach combines theoretical knowledge with practical applications, 
                ensuring that students and clients can apply what they learn in real-world scenarios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
