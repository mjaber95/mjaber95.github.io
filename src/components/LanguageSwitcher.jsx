import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguageAnimation } from '../contexts/LanguageAnimationContext'

const LanguageSwitcher = ({ className = "" }) => {
  const { i18n, t } = useTranslation()
  const { startLanguageTransition, isTransitioning } = useLanguageAnimation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = async (languageCode) => {
    setIsOpen(false)
    // Use different animation types based on language direction
    const animationType = languageCode === 'fr' ? 'slide' : 'fade'
    await startLanguageTransition(languageCode, animationType)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
          isTransitioning 
            ? 'text-primary-600 bg-primary-50 cursor-wait' 
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`}
        title={t('language.switch')}
        disabled={isTransitioning}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                disabled={isTransitioning}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-200 ${
                  isTransitioning 
                    ? 'text-gray-400 cursor-wait' 
                    : i18n.language === language.code 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-base">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {i18n.language === language.code && (
                  <span className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher
