import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Twitter, CreditCard, TrendingUp, Shield, Zap } from 'lucide-react'

const Hero = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mamdouh@example.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/mamdouhjaber",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mamdouhjaber",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/mamdouhjaber",
      label: "Twitter"
    }
  ]

  const expertiseItems = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      text: "Payment Processing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Fraud Detection"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Financial Analytics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Real-time Systems"
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-background text-white relative overflow-hidden" style={{ height: '60vh', minHeight: '500px' }}>
      {/* Contact Links - Top Right */}
      <motion.div
        className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md text-white p-2 rounded-lg hover:bg-primary-600 transition-all duration-300 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="group-hover:scale-110 transition-transform duration-200">
              {link.icon}
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name and Title */}
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mamdouh Jaber
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Payment Processing Expert & Data Science Leader
              </motion.p>
            </div>

            {/* Expertise Banner */}
            <motion.div
              className="bg-primary-600 border-l-4 border-primary-400 p-6 rounded-r-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                Specialized in Financial Technology Solutions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {expertiseItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3 text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-primary-200">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-primary px-8 py-4 text-center cursor-pointer"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-secondary-900 transition-all duration-300 text-center cursor-pointer"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Payment Processing Visualization */}
            <div className="relative">
              {/* Central Node */}
              <motion.div
                className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(227, 18, 11, 0.7)",
                    "0 0 0 15px rgba(227, 18, 11, 0)",
                    "0 0 0 0 rgba(227, 18, 11, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CreditCard className="w-8 h-8 text-white" />
              </motion.div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 90, 180, 270].map((rotation, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
                    style={{
                      transformOrigin: 'center',
                      transform: `rotate(${rotation}deg) translateY(-70px)`
                    }}
                    animate={{
                      rotate: [rotation, rotation + 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div style={{ transform: `rotate(-${rotation}deg)` }}>
                      {index === 0 && <Shield className="w-4 h-4 text-primary-400" />}
                      {index === 1 && <TrendingUp className="w-4 h-4 text-primary-400" />}
                      {index === 2 && <Zap className="w-4 h-4 text-primary-400" />}
                      {index === 3 && <CreditCard className="w-4 h-4 text-primary-400" />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { number: "$10B+", label: "Processed" },
                { number: "99.9%", label: "Uptime" },
                { number: "500+", label: "Integrations" },
                { number: "50ms", label: "Avg Response" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-md p-3 rounded-lg text-center border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-lg font-bold text-primary-400">{stat.number}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Mobile Contact Links */}
      <motion.div
        className="md:hidden absolute bottom-6 left-6 right-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex justify-center gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md text-white p-3 rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F5F5F5"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,144C672,117,768,107,864,128C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

