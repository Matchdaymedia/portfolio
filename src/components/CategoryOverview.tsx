import { motion } from 'framer-motion'
import { categories } from '../data/categories'
import { CategoryType } from '../types'

interface CategoryOverviewProps {
  onSelectCategory: (category: CategoryType) => void
}

export default function CategoryOverview({ onSelectCategory }: CategoryOverviewProps) {
  return (
    <div className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
      >
        Meine Arbeitsbereiche
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectCategory(category.id)}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-all duration-300 group"
          >
            <div className={`text-5xl mb-4 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {category.description}
            </p>
            <div className="mt-4 flex items-center text-primary-600 font-medium text-sm">
              <span>Ansehen</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

