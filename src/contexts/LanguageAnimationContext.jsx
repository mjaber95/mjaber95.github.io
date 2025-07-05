import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageAnimationContext = createContext()

export const useLanguageAnimation = () => {
  const context = useContext(LanguageAnimationContext)
  if (!context) {
    throw new Error('useLanguageAnimation must be used within a LanguageAnimationProvider')
  }
  return context
}

export const LanguageAnimationProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animationType, setAnimationType] = useState('fade') // 'fade', 'slide', 'scale', 'flip'
  const [previousLanguage, setPreviousLanguage] = useState(i18n.language)

  // Animation duration in milliseconds
  const ANIMATION_DURATION = 600

  const startLanguageTransition = async (newLanguage, animation = 'fade') => {
    if (isTransitioning || newLanguage === i18n.language) return

    setIsTransitioning(true)
    setAnimationType(animation)
    setPreviousLanguage(i18n.language)

    // Wait for exit animation
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION / 2))
    
    // Change language
    await i18n.changeLanguage(newLanguage)
    
    // Wait for enter animation
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION / 2))
    
    setIsTransitioning(false)
  }

  const value = {
    isTransitioning,
    animationType,
    previousLanguage,
    startLanguageTransition,
    ANIMATION_DURATION
  }

  return (
    <LanguageAnimationContext.Provider value={value}>
      {children}
    </LanguageAnimationContext.Provider>
  )
}

export default LanguageAnimationContext
