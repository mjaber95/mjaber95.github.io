import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, BarChart3, Brain, TrendingUp } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description: 'Built a machine learning model to predict customer churn with 92% accuracy using ensemble methods and feature engineering.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      icon: TrendingUp,
      github: '#',
      demo: '#',
      highlights: [
        '92% prediction accuracy',
        'Reduced churn by 15%',
        'Real-time prediction API'
      ]
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Interactive Tableau dashboard for sales forecasting using time series analysis and seasonal decomposition.',
      technologies: ['Tableau', 'Python', 'SQL', 'Time Series'],
      icon: BarChart3,
      github: '#',
      demo: '#',
      highlights: [
        'Real-time data updates',
        'Interactive visualizations',
        'Multi-dimensional analysis'
      ]
    },
    {
      title: 'NLP Sentiment Analysis Tool',
      description: 'Developed a sentiment analysis tool for social media data using deep learning and natural language processing.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
      icon: Brain,
      github: '#',
      demo: '#',
      highlights: [
        'Multi-language support',
        'Real-time processing',
        '95% sentiment accuracy'
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              A showcase of some of my most impactful data science projects and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card group hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-secondary-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-secondary-200">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/mamjaber"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
