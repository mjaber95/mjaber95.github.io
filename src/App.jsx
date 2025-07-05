import React, { useState, useEffect, useCallback, useRef, useMemo, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import { LanguageAnimationProvider } from './contexts/LanguageAnimationContext'
import LanguageAnimationWrapper from './components/LanguageAnimationWrapper'
import LanguageTransitionOverlay from './components/LanguageTransitionOverlay'

// Initialize i18n
import './i18n'

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'))
const Blog = React.lazy(() => import('./components/Blog'))
const BlogPost = React.lazy(() => import('./components/BlogPost'))

function App() {
  const [scrollY, setScrollY] = useState(0)
  const ticking = useRef(false)

  const updateScrollY = useCallback(() => {
    setScrollY(window.scrollY)
    ticking.current = false
  }, [])

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollY)
      ticking.current = true
    }
  }, [updateScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Optimized gradient calculation with memoization
  const backgroundStyle = useMemo(() => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const scrollProgress = Math.min(scrollY / maxScroll, 1)
    
    // Simplified gradient calculation for better performance
    const progress = Math.round(scrollProgress * 100)
    
    return {
      background: `linear-gradient(135deg, 
        #F5F5F5 ${Math.max(0, 100 - progress)}%, 
        #E8F4F8 ${Math.max(0, 75 - progress * 0.75)}%, 
        #E1F5FE ${Math.max(25, 50 - progress * 0.25)}%, 
        #F3E5F5 ${Math.min(75, 25 + progress * 0.5)}%, 
        #FFF3E0 ${Math.min(100, progress)}%
      )`,
      transition: 'background 0.1s ease-out'
    }
  }, [scrollY])

  return (
    <LanguageAnimationProvider>
      <Router>
        <div className="App scrolling-gradient-bg" style={backgroundStyle}>
          <Navbar />
          {/* Main content area - adjusted for vertical sidebar */}
          <div className="lg:ml-48">
            <main>
              <LanguageAnimationWrapper>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                  </Routes>
                </Suspense>
              </LanguageAnimationWrapper>
            </main>
            <Footer />
          </div>
          {/* Language transition overlay */}
          <LanguageTransitionOverlay />
        </div>
      </Router>
    </LanguageAnimationProvider>
  )
}

export default App
