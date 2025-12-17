import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { MediaItem, CategoryType } from '../types'
import { mediaItems } from '../data/mediaItems'
import MediaCard from './MediaCard'

interface GalleryProps {
  typeFilter: 'all' | 'photos' | 'videos'
  categoryFilter: CategoryType | 'all'
  onItemClick: (item: MediaItem) => void
}

export default function Gallery({ typeFilter, categoryFilter, onItemClick }: GalleryProps) {
  const filteredItems = useMemo(() => {
    let filtered = mediaItems

    if (typeFilter !== 'all') {
      filtered = filtered.filter((item) => item.type === typeFilter)
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter((item) => item.category === categoryFilter)
    }

    return filtered
  }, [typeFilter, categoryFilter])

  if (filteredItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-gray-400 text-lg">Keine Projekte gefunden.</p>
        <p className="text-gray-500 text-sm mt-2">Versuche andere Filter auszuwählen.</p>
      </motion.div>
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 flex items-center justify-between"
      >
        <p className="text-gray-400">
          <span className="text-white font-semibold">{filteredItems.length}</span>
          {' '}{filteredItems.length === 1 ? 'Projekt' : 'Projekte'} gefunden
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredItems.map((item, index) => (
          <MediaCard 
            key={item.id} 
            item={item} 
            index={index}
            onClick={() => onItemClick(item)} 
          />
        ))}
      </motion.div>
    </>
  )
}
