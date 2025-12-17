import { motion } from 'framer-motion'
import { categories } from '../data/categories'
import { CategoryType } from '../types'
import { mediaItems } from '../data/mediaItems'

interface CategoryOverviewProps {
  onSelectCategory: (category: CategoryType) => void
}

export default function CategoryOverview({ onSelectCategory }: CategoryOverviewProps) {
  const getCategoryCount = (categoryId: CategoryType) => {
    return mediaItems.filter(item => item.category === categoryId).length
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Meine <span className="text-gradient">Arbeitsbereiche</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Wähle eine Kategorie aus, um meine Projekte zu entdecken
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={item}
            onClick={() => onSelectCategory(category.id)}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative glass rounded-2xl p-8 h-full border border-white/5 group-hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-cyan/10 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {getCategoryCount(category.id)} Projekte
                  </span>
                  <motion.span
                    className="flex items-center gap-2 text-accent-cyan font-medium text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Projekte', value: mediaItems.length, icon: '📁' },
          { label: 'Fotos', value: mediaItems.filter(i => i.type === 'photo').length, icon: '📸' },
          { label: 'Videos', value: mediaItems.filter(i => i.type === 'video').length, icon: '🎬' },
          { label: 'Kategorien', value: categories.length, icon: '🎯' },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
