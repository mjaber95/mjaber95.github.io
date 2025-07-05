import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: [
        'Lead data science initiatives for enterprise clients',
        'Develop machine learning models for predictive analytics',
        'Mentor junior data scientists and establish best practices'
      ],
      detailedInfo: {
        achievements: [
          'Increased model accuracy by 25% through advanced feature engineering',
          'Led a team of 5 data scientists on critical client projects',
          'Implemented MLOps practices reducing deployment time by 40%',
          'Generated $2M+ in cost savings through automated decision systems'
        ],
        technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'Apache Airflow'],
        projects: [
          'Customer Churn Prediction System - Reduced churn by 15%',
          'Real-time Fraud Detection - Processing 1M+ transactions daily',
          'Supply Chain Optimization - Improved efficiency by 30%'
        ]
      }
    },
    {
      title: 'Data Science Instructor',
      company: 'DataLearn Academy',
      location: 'Online',
      period: '2021 - Present',
      description: [
        'Design and deliver comprehensive data science curriculum',
        'Teach Python, statistics, and machine learning to 1000+ students',
        'Create hands-on projects and real-world case studies'
      ],
      detailedInfo: {
        achievements: [
          'Maintained 4.9/5 student satisfaction rating across 50+ courses',
          'Developed curriculum adopted by 3 major universities',
          'Created 200+ hours of video content with 500K+ views',
          'Mentored 100+ students into data science careers'
        ],
        technologies: ['Python', 'R', 'Jupyter', 'Tableau', 'SQL', 'Git', 'Statistics'],
        projects: [
          'Complete Data Science Bootcamp - 12-week intensive program',
          'Machine Learning Masterclass - Advanced ML techniques',
          'Industry Case Studies - Real business problem solutions'
        ]
      }
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Analyzed large datasets to identify business opportunities',
        'Created interactive dashboards using Tableau and Power BI',
        'Automated reporting processes, reducing manual work by 60%'
      ],
      detailedInfo: {
        achievements: [
          'Identified $500K revenue opportunity through customer segmentation',
          'Built automated reporting system serving 50+ stakeholders',
          'Improved data quality by implementing validation frameworks',
          'Reduced report generation time from 2 days to 2 hours'
        ],
        technologies: ['SQL', 'Python', 'Tableau', 'Power BI', 'Excel', 'Google Analytics'],
        projects: [
          'Customer Lifetime Value Analysis - Improved retention strategies',
          'Sales Performance Dashboard - Real-time KPI tracking',
          'Market Trend Analysis - Quarterly business insights'
        ]
      }
    },
    {
      title: 'Junior Data Scientist',
      company: 'StartupData',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      description: [
        'Built predictive models for customer behavior analysis',
        'Implemented A/B testing frameworks',
        'Developed data pipelines using Python and SQL'
      ],
      detailedInfo: {
        achievements: [
          'Contributed to company\'s 25% increase in customer retention',
          'Developed A/B testing platform used by entire product team',
          'Built data pipeline processing 100GB+ daily',
          'Implemented first ML model achieving 85% accuracy'
        ],
        technologies: ['Python', 'scikit-learn', 'pandas', 'PostgreSQL', 'Git', 'Jupyter'],
        projects: [
          'Customer Behavior Prediction - Personalized recommendations',
          'A/B Testing Platform - Statistical significance analysis',
          'ETL Pipeline Development - Automated data processing'
        ]
      }
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              My journey through various roles in data science, analytics, and education
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-secondary-600 mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-secondary-700">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      {expandedItems[index] ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Show More Details</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedItems[index] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                            {/* Key Achievements */}
                            <div>
                              <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                </span>
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.detailedInfo.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-secondary-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Technologies Used */}
                            <div>
                              <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                </span>
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.detailedInfo.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* Notable Projects */}
                            <div>
                              <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                </span>
                                Notable Projects
                              </h4>
                              <ul className="space-y-2">
                                {exp.detailedInfo.projects.map((project, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-secondary-700">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
