import { motion } from 'framer-motion'
import { CategoryType } from '../types'
import { categories } from '../data/categories'

interface HeaderProps {
  typeFilter: 'all' | 'photos' | 'videos'
  setTypeFilter: (filter: 'all' | 'photos' | 'videos') => void
  categoryFilter: CategoryType | 'all'
  setCategoryFilter: (category: CategoryType | 'all') => void
  showCategories: boolean
  setShowCategories: (show: boolean) => void
}

export default function Header({ 
  typeFilter, 
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
  showCategories,
  setShowCategories
}: HeaderProps) {
  const typeFilters = [
    { id: 'all' as const, label: 'Alle' },
    { id: 'photos' as const, label: 'Fotos' },
    { id: 'videos' as const, label: 'Videos' },
  ]

  const selectedCategory = categories.find(cat => cat.id === categoryFilter)

  return (
    <header id="portfolio" className="sticky top-0 z-40 glass border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-display font-bold cursor-pointer"
              onClick={() => {
                setCategoryFilter('all')
                setShowCategories(true)
              }}
            >
              <span className="text-gradient">MATCHDAY</span>
              <span className="text-white">MEDIA</span>
            </motion.h2>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  showCategories
                    ? 'bg-accent-cyan text-dark-900'
                    : 'glass glass-hover text-white'
                }`}
              >
                {showCategories ? '✨ Kategorien' : '📂 Kategorien'}
              </button>
              {typeFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTypeFilter(f.id)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    typeFilter === f.id
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Row */}
          {!showCategories && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-accent-purple text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Alle Projekte
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    categoryFilter === cat.id
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Active Filter Display */}
          {!showCategories && categoryFilter !== 'all' && selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-sm"
            >
              <span className="text-gray-500">Zeige:</span>
              <span className="px-3 py-1 rounded-full glass text-accent-cyan font-medium">
                {selectedCategory.icon} {selectedCategory.name}
              </span>
              <button
                onClick={() => setCategoryFilter('all')}
                className="text-gray-500 hover:text-accent-pink transition-colors"
              >
                ✕ Filter zurücksetzen
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
