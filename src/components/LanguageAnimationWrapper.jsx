import React from 'react'
import { useLanguageAnimation } from '../contexts/LanguageAnimationContext'

const LanguageAnimationWrapper = ({ 
  children, 
  className = '', 
  animationType = null, // Override global animation type
  delay = 0 // Stagger animation delays
}) => {
  const { isTransitioning, animationType: globalAnimationType, ANIMATION_DURATION } = useLanguageAnimation()
  
  const activeAnimationType = animationType || globalAnimationType
  
  // Animation class mappings
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
      case 'slide':
        return 'opacity-100 transform translate-x-0'
      case 'scale':
        return 'opacity-100 transform scale-100'
      case 'flip':
        return 'opacity-100 transform rotateY-0'
      default:
        return 'opacity-100 transform translate-y-0'
    }
  }
  
  const getExitClasses = (type) => {
    switch (type) {
      case 'fade':
        return 'opacity-0 transform translate-y-4'
      case 'slide':
        return 'opacity-0 transform -translate-x-8'
      case 'scale':
        return 'opacity-0 transform scale-95'
      case 'flip':
        return 'opacity-0 transform rotateY-90'
      default:
        return 'opacity-0 transform translate-y-4'
    }
  }
  
  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${ANIMATION_DURATION / 2}ms`
  }
  
  const animationClasses = getAnimationClasses(activeAnimationType, isTransitioning)
  
  return (
    <div 
      className={`${animationClasses} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  )
}

export default LanguageAnimationWrapper
