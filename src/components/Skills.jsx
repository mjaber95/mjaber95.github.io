import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { BarChart3, Database, Brain, TrendingUp, Calculator, Eye, PieChart, Code, Activity, Layers, Target, BarChart, LineChart } from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: <Code className="w-6 h-6" />
  },
  {
    name: "Data Analysis",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    name: "Machine Learning",
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: "Deep Learning",
    icon: <Layers className="w-6 h-6" />
  },
  {
    name: "R Programming",
    icon: <Calculator className="w-6 h-6" />
  },
  {
    name: "SQL",
    icon: <Database className="w-6 h-6" />
  },
  {
    name: "Tableau",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    name: "Pandas",
    icon: <Activity className="w-6 h-6" />
  },
  {
    name: "NumPy",
    icon: <Target className="w-6 h-6" />
  },
  {
    name: "Scikit-learn",
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: "TensorFlow",
    icon: <Layers className="w-6 h-6" />
  },
  {
    name: "Keras",
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: "Data Visualization",
    icon: <PieChart className="w-6 h-6" />
  },
  {
    name: "Statistics",
    icon: <TrendingUp className="w-6 h-6" />
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              My Skills
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              A snapshot of skills and technologies I've mastered over the years,
              enabling me to transform data into actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-badge flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="text-primary-600">{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
