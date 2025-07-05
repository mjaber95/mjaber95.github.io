import React from 'react'
import { useLanguageAnimation } from '../contexts/LanguageAnimationContext'
import { Globe } from 'lucide-react'

const LanguageTransitionOverlay = () => {
  const { isTransitioning, animationType } = useLanguageAnimation()

  if (!isTransitioning) return null

  const getOverlayAnimation = () => {
    switch (animationType) {
      case 'fade':
        return 'animate-pulse'
      case 'slide':
        return 'animate-bounce'
      case 'scale':
        return 'animate-ping'
      default:
        return 'animate-spin'
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200">
        <div className={`${getOverlayAnimation()}`}>
          <Globe className="w-8 h-8 text-primary-600" />
        </div>
        <div className="text-sm font-medium text-gray-700">
          Switching language...
        </div>
        {/* Progress bar */}
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary-600 rounded-full animate-progress" />
        </div>
      </div>
    </div>
  )
}

export default LanguageTransitionOverlay
