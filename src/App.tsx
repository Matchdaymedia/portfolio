import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyMe from './components/WhyMe'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import CategoryOverview from './components/CategoryOverview'
import Footer from './components/Footer'
import { MediaItem, CategoryType } from './types'

function App() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [typeFilter, setTypeFilter] = useState<'all' | 'photos' | 'videos'>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryType | 'all'>('all')
  const [showCategories, setShowCategories] = useState(true)

  return (
    <div className="min-h-screen noise">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Header 
        typeFilter={typeFilter} 
        setTypeFilter={setTypeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />
      <main className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {showCategories ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CategoryOverview onSelectCategory={(cat) => {
                setCategoryFilter(cat)
                setShowCategories(false)
              }} />
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Gallery 
                typeFilter={typeFilter} 
                categoryFilter={categoryFilter}
                onItemClick={setSelectedItem} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
