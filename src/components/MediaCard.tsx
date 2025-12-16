import { motion } from 'framer-motion'
import { MediaItem } from '../types'
import { categories } from '../data/categories'
import { tools } from '../data/categories'

interface MediaCardProps {
  item: MediaItem
  onClick: () => void
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

export default function MediaCard({ item, onClick }: MediaCardProps) {
  const category = categories.find(cat => cat.id === item.category)

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        {item.type === 'photo' ? (
          <img
            src={item.thumbnail || item.url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={item.thumbnail || '/placeholder-video.jpg'}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-primary-600 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </motion.div>
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.type === 'photo'
              ? 'bg-blue-500 text-white'
              : 'bg-red-500 text-white'
          }`}>
            {item.type === 'photo' ? 'Foto' : 'Video'}
          </span>
          {category && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-700">
              {category.icon}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {item.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {category && (
            <span className="inline-block px-2 py-1 text-xs text-primary-600 font-medium bg-primary-50 rounded-full">
              {category.name}
            </span>
          )}
          {item.tools && item.tools.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              {item.tools.slice(0, 3).map((tool) => {
                const toolData = tools.find(t => t.id === tool)
                return toolData ? (
                  <span key={tool} className="px-2 py-1 bg-gray-100 rounded-full" title={toolData.name}>
                    {toolIcons[tool] || '🔧'}
                  </span>
                ) : null
              })}
              {item.tools.length > 3 && (
                <span className="text-gray-400">+{item.tools.length - 3}</span>
              )}
            </div>
          )}
        </div>
        {item.client && (
          <p className="text-xs text-gray-500 mt-2">
            Für: {item.client}
          </p>
        )}
      </div>
    </motion.div>
  )
}

