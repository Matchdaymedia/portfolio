import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MediaItem } from '../types'
import { categories } from '../data/categories'
import { tools } from '../data/categories'

interface LightboxProps {
  item: MediaItem | null
  onClose: () => void
}

const toolIcons: Record<string, string> = {
  canva: '🎨',
  photoshop: '🖼️',
  'premiere-pro': '🎞️',
  capcut: '✂️',
  filmen: '📹',
  cutten: '🎬',
  fotografie: '📷',
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [item])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!item) return null

  const category = categories.find(cat => cat.id === item.category)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="glass rounded-2xl overflow-hidden border border-white/10">
          {/* Media */}
          <div className="relative bg-dark-800 flex items-center justify-center min-h-[50vh] max-h-[70vh]">
            {item.type === 'photo' ? (
              <img
                src={item.url}
                alt={item.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
            ) : (
              <video
                src={item.url}
                controls
                autoPlay
                className="max-w-full max-h-[70vh]"
              >
                Dein Browser unterstützt das Video-Element nicht.
              </video>
            )}
          </div>

          {/* Info */}
          <div className="p-6 md:p-8 bg-dark-800/50">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="text-gray-400 max-w-2xl">{item.description}</p>
                )}
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                item.type === 'photo'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'bg-accent-pink/20 text-accent-pink border border-accent-pink/30'
              }`}>
                {item.type === 'photo' ? '📸 Foto' : '🎬 Video'}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {category && (
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent-purple/20 text-accent-purple border border-accent-purple/30 flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              )}
              {item.date && (
                <span className="px-4 py-2 rounded-full text-sm glass text-gray-300">
                  📅 {new Date(item.date).toLocaleDateString('de-DE', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              )}
              {item.client && (
                <span className="px-4 py-2 rounded-full text-sm glass text-accent-cyan">
                  👤 {item.client}
                </span>
              )}
            </div>

            {item.tools && item.tools.length > 0 && (
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Verwendete Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => {
                    const toolData = tools.find(t => t.id === tool)
                    return toolData ? (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full text-sm glass text-white flex items-center gap-2"
                      >
                        <span>{toolIcons[tool] || '🔧'}</span>
                        <span>{toolData.name}</span>
                      </span>
                    ) : null
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
