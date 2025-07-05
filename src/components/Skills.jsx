import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp, Briefcase, Clock, Target } from "lucide-react";
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: "/icons/python.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Primary language for data science, machine learning, and automation across all my roles.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Built end-to-end ML pipelines using Python for fraud detection systems processing 1M+ transactions daily. Developed automated feature engineering scripts that improved model accuracy by 25%.",
              technologies: ["pandas", "scikit-learn", "TensorFlow", "FastAPI", "asyncio"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Created comprehensive Python curriculum teaching 1000+ students. Developed hands-on projects covering data manipulation, statistical analysis, and machine learning implementation.",
              technologies: ["Jupyter", "matplotlib", "seaborn", "statsmodels", "pytest"]
            },
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Automated reporting processes using Python, reducing manual work by 60%. Built ETL pipelines and data validation frameworks for ensuring data quality across multiple sources.",
              technologies: ["pandas", "SQLAlchemy", "schedule", "logging", "requests"]
            }
          ]
        }
      },
      {
        name: "R Programming",
        icon: "/icons/r.svg",
        experience: {
          yearsUsed: "4+",
          proficiencyLevel: "Advanced",
          description: "Specialized in statistical analysis, data visualization, and academic research projects.",
          applications: [
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Taught advanced statistical concepts using R. Created interactive dashboards with Shiny and conducted comprehensive statistical modeling for research projects.",
              technologies: ["ggplot2", "dplyr", "shiny", "caret", "tidyr"]
            },
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Performed complex statistical analysis for customer segmentation, A/B testing, and market research. Generated detailed statistical reports for executive stakeholders.",
              technologies: ["ggplot2", "plotly", "knitr", "rmarkdown", "randomForest"]
            }
          ]
        }
      },
      {
        name: "SQL",
        icon: "/icons/sql.svg",
        experience: {
          yearsUsed: "6+",
          proficiencyLevel: "Expert",
          description: "Extensive experience with complex queries, database optimization, and data warehousing across multiple platforms.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Optimized complex queries processing millions of payment transactions. Built data marts for real-time fraud detection and created stored procedures for automated reporting.",
              technologies: ["PostgreSQL", "MySQL", "Window Functions", "CTEs", "Indexing"]
            },
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Designed and maintained data warehouse architecture. Created complex ETL processes and optimized query performance for large-scale analytics workloads.",
              technologies: ["SQL Server", "BigQuery", "Snowflake", "dbt", "Apache Airflow"]
            },
            {
              role: "Junior Data Scientist",
              company: "StartupData",
              usage: "Built foundational data pipelines and performed exploratory data analysis on customer behavior data. Developed automated data quality checks and monitoring.",
              technologies: ["PostgreSQL", "Redis", "MongoDB", "Data Modeling", "Performance Tuning"]
            }
          ]
        }
      }
    ]
  },
  {
    title: "Data Science & Analytics",
    skills: [
      {
        name: "Data Analysis",
        icon: "/icons/data-analysis.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Comprehensive experience in exploratory data analysis, statistical modeling, and business intelligence.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Led analysis of payment processing patterns identifying $2M+ in cost savings opportunities. Performed cohort analysis and customer lifetime value modeling for enterprise clients.",
              technologies: ["pandas", "numpy", "scipy", "matplotlib", "seaborn"]
            },
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Conducted customer segmentation analysis identifying $500K revenue opportunity. Built comprehensive dashboards tracking KPIs and business metrics for 50+ stakeholders.",
              technologies: ["Excel", "Power BI", "Tableau", "Google Analytics", "SQL"]
            }
          ]
        }
      },
      {
        name: "Statistics",
        icon: "/icons/statistics.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Deep expertise in statistical inference, hypothesis testing, and experimental design.",
          applications: [
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Taught advanced statistical concepts including Bayesian inference, time series analysis, and multivariate statistics to 1000+ students. Developed curriculum covering both theoretical foundations and practical applications.",
              technologies: ["R", "Python", "SPSS", "SAS", "Statistical Modeling"]
            },
            {
              role: "Junior Data Scientist",
              company: "StartupData",
              usage: "Implemented A/B testing framework with proper statistical significance testing. Conducted hypothesis testing for product feature effectiveness and user behavior analysis.",
              technologies: ["scipy.stats", "statsmodels", "A/B testing", "Confidence Intervals", "ANOVA"]
            }
          ]
        }
      },
      {
        name: "A/B Testing",
        icon: "/icons/ab-testing.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "Designed and implemented comprehensive A/B testing frameworks for product optimization.",
          applications: [
            {
              role: "Junior Data Scientist",
              company: "StartupData",
              usage: "Built company's first A/B testing platform used by entire product team. Implemented statistical significance analysis and automated reporting for experiment results.",
              technologies: ["Python", "Statistical Testing", "Experimentation Design", "Causal Inference"]
            }
          ]
        }
      },
      {
        name: "Time Series Analysis",
        icon: "/icons/time-series.svg",
        experience: {
          yearsUsed: "4+",
          proficiencyLevel: "Advanced",
          description: "Specialized in forecasting, trend analysis, and temporal pattern recognition.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Developed time series models for predicting payment processing volumes and fraud patterns. Built real-time monitoring systems for detecting anomalies in transaction flows.",
              technologies: ["ARIMA", "Prophet", "Seasonal Decomposition", "Anomaly Detection"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Created advanced curriculum on time series analysis covering forecasting techniques, seasonality detection, and business applications in finance and operations.",
              technologies: ["R", "Python", "Tableau", "Forecasting Models"]
            }
          ]
        }
      },
      {
        name: "Forecasting",
        icon: "/icons/forecasting.svg",
        experience: {
          yearsUsed: "4+",
          proficiencyLevel: "Advanced",
          description: "Built predictive models for business planning, resource allocation, and demand forecasting.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Developed supply chain optimization models improving efficiency by 30%. Created demand forecasting systems for resource planning and capacity management.",
              technologies: ["Prophet", "LSTM", "XGBoost", "Ensemble Methods"]
            }
          ]
        }
      },
      {
        name: "Pandas",
        icon: "/icons/pandas.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Primary tool for data manipulation, cleaning, and analysis in Python ecosystem.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Processed and analyzed massive payment datasets using advanced pandas techniques. Built efficient data pipelines handling millions of transactions daily with optimized memory usage.",
              technologies: ["DataFrame Operations", "GroupBy", "Multi-indexing", "Memory Optimization"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Taught comprehensive pandas curriculum to 1000+ students. Created hands-on exercises covering data cleaning, transformation, and analysis techniques.",
              technologies: ["Data Cleaning", "Merging", "Pivoting", "Time Series Operations"]
            }
          ]
        }
      },
      {
        name: "NumPy",
        icon: "/icons/numpy.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Advanced",
          description: "Foundation for numerical computing and scientific computing applications.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Optimized mathematical computations for real-time fraud detection algorithms. Implemented custom statistical functions and numerical methods for financial calculations.",
              technologies: ["Array Operations", "Linear Algebra", "Statistical Functions", "Broadcasting"]
            }
          ]
        }
      }
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      {
        name: "Machine Learning",
        icon: "/icons/machine-learning.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Comprehensive experience across supervised, unsupervised, and reinforcement learning techniques.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Led development of machine learning models for fraud detection achieving 95% accuracy. Implemented customer churn prediction reducing churn by 15% and built recommendation systems.",
              technologies: ["Classification", "Regression", "Clustering", "Feature Engineering", "Model Selection"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Designed comprehensive ML curriculum covering theory and practical implementation. Mentored 100+ students into data science careers with hands-on project-based learning.",
              technologies: ["Scikit-learn", "Model Evaluation", "Cross-validation", "Hyperparameter Tuning"]
            },
            {
              role: "Junior Data Scientist",
              company: "StartupData",
              usage: "Built first ML model achieving 85% accuracy for customer behavior prediction. Implemented automated model training and evaluation pipelines.",
              technologies: ["Supervised Learning", "Model Deployment", "Performance Metrics"]
            }
          ]
        }
      },
      {
        name: "Deep Learning",
        icon: "/icons/deep-learning.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "Specialized in neural networks for complex pattern recognition and prediction tasks.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Developed deep learning models for fraud detection processing real-time transactions. Built neural networks for pattern recognition in payment processing identifying sophisticated fraud schemes.",
              technologies: ["Neural Networks", "CNNs", "RNNs", "LSTM", "Transfer Learning"]
            }
          ]
        }
      },
      {
        name: "Scikit-learn",
        icon: "/icons/sklearn.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Primary machine learning library for traditional ML algorithms and model evaluation.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Implemented ensemble methods and advanced feature selection techniques. Built robust model evaluation pipelines with cross-validation and hyperparameter optimization.",
              technologies: ["Ensemble Methods", "Pipeline", "GridSearchCV", "Feature Selection"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Taught practical machine learning implementation to 1000+ students. Created comprehensive exercises covering all major algorithms and evaluation techniques.",
              technologies: ["Classification", "Regression", "Clustering", "Model Selection"]
            }
          ]
        }
      },
      {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "Built and deployed deep learning models for production environments.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Developed neural networks for real-time fraud detection using TensorFlow. Implemented model serving infrastructure with TensorFlow Serving for high-throughput predictions.",
              technologies: ["Keras", "TensorFlow Serving", "Model Optimization", "Distributed Training"]
            }
          ]
        }
      },
      {
        name: "PyTorch",
        icon: "/icons/pytorch.svg",
        experience: {
          yearsUsed: "2+",
          proficiencyLevel: "Intermediate",
          description: "Used for research projects and rapid prototyping of deep learning models.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Prototyped advanced neural network architectures for fraud detection research. Implemented custom loss functions and training loops for specialized payment processing tasks.",
              technologies: ["Dynamic Computation Graphs", "Custom Layers", "Training Loops"]
            }
          ]
        }
      },
      {
        name: "Keras",
        icon: "/icons/keras.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "High-level deep learning framework for rapid model development and prototyping.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Built deep learning models for transaction pattern recognition. Implemented custom callbacks and model architectures for specialized fraud detection tasks.",
              technologies: ["Sequential Models", "Functional API", "Custom Callbacks", "Transfer Learning"]
            }
          ]
        }
      },
      {
        name: "LangChain",
        icon: "/icons/langchain.svg",
        experience: {
          yearsUsed: "1+",
          proficiencyLevel: "Intermediate",
          description: "Built LLM applications for data analysis and automated reporting.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Developed automated report generation system using LangChain and LLMs. Created conversational interfaces for business stakeholders to query payment data using natural language.",
              technologies: ["LLM Chains", "Prompt Engineering", "Vector Databases", "RAG"]
            }
          ]
        }
      }
    ]
  },
  {
    title: "Visualization & BI",
    skills: [
      {
        name: "Data Visualization",
        icon: "/icons/data-visualization.svg",
        experience: {
          yearsUsed: "5+",
          proficiencyLevel: "Expert",
          description: "Created comprehensive dashboards and visualizations for stakeholder communication.",
          applications: [
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Built interactive dashboards serving 50+ stakeholders. Created executive-level reports and visualizations that influenced strategic business decisions worth millions.",
              technologies: ["Matplotlib", "Seaborn", "Plotly", "D3.js", "Interactive Dashboards"]
            },
            {
              role: "Data Science Instructor",
              company: "DataLearn Academy",
              usage: "Taught data visualization best practices and created comprehensive curriculum on effective visual communication of data insights.",
              technologies: ["ggplot2", "Matplotlib", "Tableau", "Design Principles"]
            }
          ]
        }
      },
      {
        name: "Tableau",
        icon: "/icons/tableau.svg",
        experience: {
          yearsUsed: "4+",
          proficiencyLevel: "Advanced",
          description: "Built complex dashboards and performed advanced analytics in Tableau.",
          applications: [
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Created real-time KPI tracking dashboards and developed automated reporting systems. Built complex calculated fields and implemented advanced analytics features.",
              technologies: ["Dashboard Design", "Calculated Fields", "Parameters", "Actions", "Data Blending"]
            }
          ]
        }
      },
      {
        name: "PowerBI",
        icon: "/icons/powerbi.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "Developed enterprise-level business intelligence solutions and automated reporting.",
          applications: [
            {
              role: "Data Analyst",
              company: "Analytics Pro",
              usage: "Built automated reporting system reducing report generation time from 2 days to 2 hours. Created comprehensive business intelligence solutions for executive decision making.",
              technologies: ["DAX", "Power Query", "Data Modeling", "Custom Visuals", "Row-level Security"]
            }
          ]
        }
      }
    ]
  },
  {
    title: "Data Infrastructure",
    skills: [
      {
        name: "Elasticsearch",
        icon: "/icons/elastic.svg",
        experience: {
          yearsUsed: "2+",
          proficiencyLevel: "Intermediate",
          description: "Implemented search and analytics solutions for large-scale data processing.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Built real-time transaction monitoring system using Elasticsearch. Implemented full-text search capabilities for fraud investigation and anomaly detection.",
              technologies: ["Indexing", "Query DSL", "Aggregations", "Kibana", "Logstash"]
            }
          ]
        }
      },
      {
        name: "Microsoft Azure",
        icon: "/icons/azure.svg",
        experience: {
          yearsUsed: "3+",
          proficiencyLevel: "Advanced",
          description: "Deployed and managed machine learning models and data pipelines in Azure cloud.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Implemented MLOps practices reducing deployment time by 40%. Built scalable data pipelines using Azure Data Factory and deployed ML models using Azure Machine Learning.",
              technologies: ["Azure ML", "Data Factory", "Synapse Analytics", "Cognitive Services", "DevOps"]
            }
          ]
        }
      },
      {
        name: "Google Cloud Platform",
        icon: "/icons/gcp.svg",
        experience: {
          yearsUsed: "2+",
          proficiencyLevel: "Intermediate",
          description: "Utilized GCP services for big data processing and machine learning model deployment.",
          applications: [
            {
              role: "Senior Data Scientist",
              company: "Tech Solutions Inc.",
              usage: "Built data processing pipelines using BigQuery and Dataflow. Deployed machine learning models using Vertex AI for real-time fraud detection.",
              technologies: ["BigQuery", "Dataflow", "Vertex AI", "Cloud Storage", "Pub/Sub"]
            }
          ]
        }
      }
    ]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const categoryColors = {
    "Programming Languages": "from-blue-500 to-purple-600",
    "Data Science & Analytics": "from-green-500 to-teal-600", 
    "Machine Learning & AI": "from-purple-500 to-pink-600",
    "Visualization & BI": "from-orange-500 to-red-600",
    "Data Infrastructure": "from-gray-500 to-blue-600"
  };

  const toggleSkillExpansion = (skillName) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <AnimatedSection className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                {t('skills.title', 'My Skills')}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                {t('skills.description', 'Click on any skill below to discover how I\'ve applied these technologies in real-world projects and professional experiences.')}
              </p>
            </AnimatedSection>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === null 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-md'
              }`}
            >
              {t('skills.allSkills', 'All Skills')}
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.title 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-md'
                }`}
              >
                {t(`skills.categories.${category.title.toLowerCase().replace(/\s+/g, '_').replace('&', 'and')}`, category.title)}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {skillCategories
              .filter(category => !selectedCategory || category.title === selectedCategory)
              .map((category, categoryIndex) => (
              <AnimatedSection
                key={category.title}
                animationType="fade"
                delay={categoryIndex * 100}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                  <div className="flex items-center justify-center mb-8">
                    <div className={`bg-gradient-to-r ${categoryColors[category.title]} p-1 rounded-2xl`}>
                      <div className="bg-white rounded-xl px-6 py-3">
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${categoryColors[category.title]} bg-clip-text text-transparent`}>
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
                      >
                        {/* Skill Header */}
                        <div 
                          className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => toggleSkillExpansion(skill.name)}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className="flex-shrink-0 hover:scale-110 hover:rotate-2 transition-transform duration-200"
                            >
                              <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-12 h-12 drop-shadow-md"
                              />
                            </div>
                            
                            <div>
                              <h4 className="text-xl font-bold text-secondary-900 mb-1">
                                {skill.name}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{skill.experience.yearsUsed} years</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Target className="w-4 h-4" />
                                  <span>{skill.experience.proficiencyLevel}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div
                            className={`text-secondary-600 transition-transform duration-200 ${
                              expandedSkills[skill.name] ? 'rotate-180' : ''
                            }`}
                          >
                            <ChevronDown className="w-6 h-6" />
                          </div>
                        </div>
                        
                        {/* Expandable Experience Content */}
                        {expandedSkills[skill.name] && (
                          <div
                            className="border-t border-gray-200 bg-white transition-all duration-300 ease-in-out"
                          >
                              <div className="p-6 space-y-6">
                                {/* Description */}
                                <div>
                                  <p className="text-secondary-700 leading-relaxed">
                                    {skill.experience.description}
                                  </p>
                                </div>
                                
                                {/* Experience Applications */}
                                <div className="space-y-4">
                                  <h5 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-primary-600" />
                                    Professional Experience
                                  </h5>
                                  
                                  {skill.experience.applications.map((app, appIndex) => (
                                    <div
                                      key={appIndex}
                                      className="border-l-4 border-primary-200 pl-4 py-3 bg-gray-50 rounded-r-lg transition-opacity duration-300"
                                      style={{ animationDelay: `${appIndex * 100}ms` }}
                                    >
                                      <div className="flex justify-between items-start mb-2">
                                        <div>
                                          <h6 className="font-semibold text-secondary-900">
                                            {app.role}
                                          </h6>
                                          <p className="text-sm text-primary-600 font-medium">
                                            {app.company}
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <p className="text-secondary-700 mb-3 leading-relaxed">
                                        {app.usage}
                                      </p>
                                      
                                      <div className="flex flex-wrap gap-2">
                                        {app.technologies.map((tech, techIndex) => (
                                          <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
          </div>

          {/* Skills Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), label: t('skills.stats.totalSkills', 'Total Skills') },
              { number: skillCategories.length, label: t('skills.stats.categories', 'Categories') },
              { number: "5+", label: t('skills.stats.experience', 'Years Experience') },
              { number: "10+", label: t('skills.stats.projects', 'Projects Completed') }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-all duration-200"
              >
                <div 
                  className="text-3xl font-bold text-primary-600 mb-2"
                >
                  {stat.number}
                </div>
                <div className="text-sm text-secondary-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
