import React from 'react'
import { useLanguageAnimation } from '../contexts/LanguageAnimationContext'

const AnimatedSection = ({ 
  children, 
  className = '',
  animationType = 'fade',
  delay = 0,
  staggerChildren = false,
  staggerDelay = 100,
  ...props
}) => {
  const { isTransitioning, ANIMATION_DURATION } = useLanguageAnimation()
  
  const getAnimationClasses = (type, isActive) => {
    const baseClasses = 'transition-all duration-300 ease-in-out'
    
    if (!isActive) {
      return `${baseClasses} ${getEnterClasses(type)}`
    }
    
    return `${baseClasses} ${getExitClasses(type)}`
  }
  
  const getEnterClasses = (type) => {
    switch (type) {
      case 'fade':
        return 'opacity-100 transform translate-y-0'
      case 'slide-left':
        return 'opacity-100 transform translate-x-0'
      case 'slide-right':
        return 'opacity-100 transform translate-x-0'
      case 'slide-up':
        return 'opacity-100 transform translate-y-0'
      case 'slide-down':
        return 'opacity-100 transform translate-y-0'
      case 'scale':
        return 'opacity-100 transform scale-100'
      default:
        return 'opacity-100 transform translate-y-0'
    }
  }
  
  const getExitClasses = (type) => {
    switch (type) {
      case 'fade':
        return 'opacity-0 transform translate-y-2'
      case 'slide-left':
        return 'opacity-0 transform -translate-x-4'
      case 'slide-right':
        return 'opacity-0 transform translate-x-4'
      case 'slide-up':
        return 'opacity-0 transform -translate-y-4'
      case 'slide-down':
        return 'opacity-0 transform translate-y-4'
      case 'scale':
        return 'opacity-0 transform scale-95'
      default:
        return 'opacity-0 transform translate-y-2'
    }
  }
  
  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: '300ms'
  }
  
  const animationClasses = getAnimationClasses(animationType, isTransitioning)
  
  return (
    <div 
      className={`${animationClasses} ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
