import { motion } from 'framer-motion'
import { MediaItem } from '../types'
import { categories } from '../data/categories'

interface MediaCardProps {
  item: MediaItem
  index: number
  onClick: () => void
}

export default function MediaCard({ item, index, onClick }: MediaCardProps) {
  const category = categories.find(cat => cat.id === item.category)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
      
      <div className="relative glass rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-dark-700">
          <img
            src={item.thumbnail || item.url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Video play button */}
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </motion.div>
            </div>
          )}
          
          {/* Type badge */}
          <div className="absolute top-3 right-3 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              item.type === 'photo'
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                : 'bg-accent-pink/20 text-accent-pink border border-accent-pink/30'
            }`}>
              {item.type === 'photo' ? '📸 Foto' : '🎬 Video'}
            </span>
          </div>
          
          {/* Category icon */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="text-2xl drop-shadow-lg">{category.icon}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-white text-lg mb-2 line-clamp-1 group-hover:text-accent-cyan transition-colors">
            {item.title}
          </h3>
          
          {item.description && (
            <p className="text-gray-400 text-sm line-clamp-2 mb-3">
              {item.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            {category && (
              <span className="text-xs text-gray-500">
                {category.name}
              </span>
            )}
            
            <motion.span
              className="text-accent-cyan text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 3 }}
            >
              Ansehen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
