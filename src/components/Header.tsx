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
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {/* Top Row: Title and Main Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent cursor-pointer"
              onClick={() => {
                setCategoryFilter('all')
                setShowCategories(false)
              }}
            >
              Mein Portfolio
            </motion.h1>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  showCategories
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showCategories ? 'Galerie' : 'Kategorien'}
              </button>
              {typeFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTypeFilter(f.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    typeFilter === f.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Row */}
          {!showCategories && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600 font-medium">Kategorie:</span>
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                    categoryFilter === cat.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Active Filter Display */}
          {!showCategories && categoryFilter !== 'all' && selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span>Aktive Kategorie:</span>
              <span className="font-semibold text-primary-600">
                {selectedCategory.icon} {selectedCategory.name}
              </span>
              <button
                onClick={() => setCategoryFilter('all')}
                className="text-primary-600 hover:text-primary-700 underline ml-2"
              >
                Zurücksetzen
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

