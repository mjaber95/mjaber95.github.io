import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [homeExpanded, setHomeExpanded] = useState(true)
  const location = useLocation()

  // Navigation items for homepage sections
  const homeSections = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Contact', href: '#contact' },
  ]

  // Always include Blog link
  const blogLink = { name: 'Blog', href: '/blog', type: 'route' }
  
  const isHomePage = location.pathname === '/'
  const navItems = isHomePage ? [...homeSections, blogLink] : [{ name: 'Home', href: '/', type: 'route' }, blogLink]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Only update active section on homepage
      if (isHomePage) {
        const sections = homeSections.map(item => item.href.substring(1))
        const scrollPosition = window.scrollY + 100
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Vertical Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-48 bg-white/30 backdrop-blur-md border-r border-gray-200/50 z-50 hidden lg:flex flex-col">
        {/* Logo - The Economist Style */}
        <div className="p-4 border-b border-gray-200/30">
          <Link 
            to="/" 
            className="block"
          >
            <div className="bg-primary-600 text-white px-3 py-2 text-xs font-bold tracking-wide uppercase hover:bg-primary-700 transition-colors duration-300 text-center leading-tight">
              <div>Mamdouh</div>
              <div>Jaber</div>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4">
          <div className="px-3 space-y-1">
            {/* Home with expandable subsections */}
            {isHomePage ? (
              <div>
                <button
                  onClick={() => setHomeExpanded(!homeExpanded)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-l-4 ${
                    location.pathname === '/' 
                      ? 'text-primary-700 bg-primary-50/80 border-primary-600 font-semibold' 
                      : 'text-secondary-700 hover:text-primary-700 hover:bg-primary-50/50 border-transparent hover:border-primary-500'
                  }`}
                >
                  <span>Home</span>
                  <motion.div
                    animate={{ rotate: homeExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </button>
                
                {/* Expandable Subsections */}
                <AnimatePresence>
                  {homeExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-4 mt-1"
                    >
                      <div className="space-y-1 border-l border-gray-200/50 pl-3">
                        {homeSections.filter(item => item.name !== 'Home').map((item) => {
                          const sectionId = item.href.substring(1)
                          const isActive = activeSection === sectionId
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                              className={`block px-3 py-1.5 rounded text-xs transition-all duration-300 ${
                                isActive 
                                  ? 'text-primary-600 bg-primary-50/60 font-medium' 
                                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50/30'
                              }`}
                            >
                              {item.name}
                            </a>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/"
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-l-4 ${
                  location.pathname === '/' 
                    ? 'text-primary-700 bg-primary-50/80 border-primary-600 font-semibold' 
                    : 'text-secondary-700 hover:text-primary-700 hover:bg-primary-50/50 border-transparent hover:border-primary-500'
                }`}
              >
                Home
              </Link>
            )}
            
            {/* Blog Link */}
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-l-4 ${
                location.pathname === '/blog' || location.pathname.startsWith('/blog/') 
                  ? 'text-primary-700 bg-primary-50/80 border-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-700 hover:bg-primary-50/50 border-transparent hover:border-primary-500'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 lg:hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="block"
              >
                <div className={`px-3 py-2 text-xs font-bold tracking-wide uppercase transition-colors duration-300 text-center leading-tight ${
                  isScrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
                }`}>
                  <div>Mamdouh</div>
                  <div>Jaber</div>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-700 hover:bg-primary-100' 
                    : 'text-white hover:text-primary-200 hover:bg-white/10'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                {navItems.map((item) => {
                  if (item.type === 'route') {
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-secondary-700 hover:text-primary-700 hover:bg-primary-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )
                  } else {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                        className="text-secondary-700 hover:text-primary-700 hover:bg-primary-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    )
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
