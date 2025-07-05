import React, { useState, useEffect } from 'react'
import { CreditCard, Shield, TrendingUp, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getContactLinksForComponent, componentConfigs, personalInfo } from '../config/contacts'
import SvgIcon from './SvgIcon'
import AnimatedSection from './AnimatedSection'

const Hero = () => {
  const { t } = useTranslation()
  
  // Get contact links and configuration from centralized config
  const contactLinks = getContactLinksForComponent('hero')
  const heroConfig = componentConfigs.hero

  const expertiseItems = [
    {
      icon: <SvgIcon name="data-analysis" className="w-6 h-6" />,
      text: t('hero.expertise.items.analytics')
    },
    {
      icon: <SvgIcon name="machine-learning" className="w-6 h-6" />,
      text: t('hero.expertise.items.fraud')
    },
    {
      icon: <SvgIcon name="data-visualization" className="w-6 h-6" />,
      text: t('hero.expertise.items.transactions')
    },
    {
      icon: <SvgIcon name="statistics" className="w-6 h-6" />,
      text: t('hero.expertise.items.risk')
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden text-gray-900" style={{ height: '60vh', minHeight: '500px' }}>
      {/* Contact Links - Top Right */}
      <AnimatedSection
        className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2"
        staggerChildren
        staggerDelay={100}
      >
        {contactLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md text-gray-700 p-2 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 group shadow-lg hover:scale-110"
              title={link.label}
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                {link.iconName ? (
                  <IconComponent
                    name={link.iconName}
                    className={`${heroConfig.contactLinkSize} icon-secondary group-hover:icon-white transition-all duration-300`}
                  />
                ) : (
                  <IconComponent
                    className={`${heroConfig.contactLinkSize} icon-secondary group-hover:icon-white transition-all duration-300`}
                  />
                )}
              </div>
            </a>
          )
        })}
      </AnimatedSection>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <AnimatedSection className="space-y-6" staggerChildren staggerDelay={100}>
            {/* Name and Title */}
            <div>
              <AnimatedSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-gray-900">
                {t('hero.title')}
              </h1>
              </AnimatedSection>
              <AnimatedSection>
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                {t('hero.tagline')}
              </p>
              </AnimatedSection>
            </div>

            {/* Expertise Banner */}
            <AnimatedSection
              className="bg-white/30 backdrop-blur-md border-l-4 border-primary-600 p-6 rounded-r-lg shadow-lg"
              staggerChildren
              staggerDelay={100}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {t('hero.expertise.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {expertiseItems.map((item, index) => (
                  <AnimatedSection
                    key={item.text}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="text-primary-600">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

          </AnimatedSection>

          {/* Right Column - Visual Elements */}
          <AnimatedSection className="relative hidden lg:block" staggerChildren staggerDelay={100}>
            {/* Payment Processing Visualization */}
            <div className="relative">
              {/* Central Node */}
              <AnimatedSection
                className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 animate-pulse"
              >
                <CreditCard className="w-8 h-8 text-white" />
              </AnimatedSection>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 90, 180, 270].map((rotation, index) => (
                  <AnimatedSection
                    key={index}
                    className="absolute w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      transformOrigin: 'center',
                      transform: `rotate(${rotation}deg) translateY(-70px)`
                    }}
                  >
                    <div style={{ transform: `rotate(-${rotation}deg)` }}>
                      {index === 0 && <Shield className="w-4 h-4 text-primary-400" />}
                      {index === 1 && <TrendingUp className="w-4 h-4 text-primary-400" />}
                      {index === 2 && <Zap className="w-4 h-4 text-primary-400" />}
                      {index === 3 && <CreditCard className="w-4 h-4 text-primary-400" />}
                    </div>
                  </AnimatedSection>
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
                <AnimatedSection
                  key={stat.label}
                  className="bg-white/20 backdrop-blur-md p-3 rounded-lg text-center border border-white/30 shadow-lg"
                >
                  <div className="text-lg font-bold text-primary-600">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>


      {/* Mobile Contact Links */}
      <AnimatedSection
        className="md:hidden absolute bottom-6 left-6 right-6"
        staggerChildren
        staggerDelay={100}
      >
        <div className="flex justify-center gap-4">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-md text-gray-700 p-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg"
                title={link.label}
              >
                {link.iconName ? (
                  <IconComponent
                    name={link.iconName}
                    className={`${heroConfig.contactLinkSize} icon-secondary icon-hover-primary transition-all duration-300`}
                  />
                ) : (
                  <IconComponent
                    className={`${heroConfig.contactLinkSize} icon-secondary icon-hover-primary transition-all duration-300`}
                  />
                )}
              </a>
            )
          })}
        </div>
      </AnimatedSection>

    </section>
  )
}

export default Hero

