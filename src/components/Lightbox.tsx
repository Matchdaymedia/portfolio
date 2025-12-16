import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  if (!item) return null

  const category = categories.find(cat => cat.id === item.category)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-7xl w-full max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="relative bg-black flex items-center justify-center min-h-[60vh] max-h-[80vh]">
              {item.type === 'photo' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh]"
                >
                  Dein Browser unterstützt das Video-Element nicht.
                </video>
              )}
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  )}
                </div>
                <div className="ml-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'photo'
                      ? 'bg-blue-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {item.type === 'photo' ? 'Foto' : 'Video'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {category && (
                  <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white flex items-center gap-2`}>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                )}
                {item.date && (
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    📅 {new Date(item.date).toLocaleDateString('de-DE', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                )}
                {item.client && (
                  <span className="px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 font-medium">
                    👤 {item.client}
                  </span>
                )}
              </div>

              {item.tools && item.tools.length > 0 && (
                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Verwendete Tools & Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => {
                      const toolData = tools.find(t => t.id === tool)
                      return toolData ? (
                        <span
                          key={tool}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center gap-2"
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
    </AnimatePresence>
  )
}

