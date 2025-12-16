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

    // Filter nach Typ
    if (typeFilter !== 'all') {
      filtered = filtered.filter((item) => item.type === typeFilter)
    }

    // Filter nach Kategorie
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((item) => item.category === categoryFilter)
    }

    return filtered
  }, [typeFilter, categoryFilter])

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Keine Medien gefunden.</p>
        <p className="text-gray-400 text-sm mt-2">Versuche andere Filter auszuwählen.</p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredItems.length} {filteredItems.length === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <MediaCard item={item} onClick={() => onItemClick(item)} />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

