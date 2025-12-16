import { useState } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import CategoryOverview from './components/CategoryOverview'
import { MediaItem, CategoryType } from './types'

function App() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [typeFilter, setTypeFilter] = useState<'all' | 'photos' | 'videos'>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryType | 'all'>('all')
  const [showCategories, setShowCategories] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header 
        typeFilter={typeFilter} 
        setTypeFilter={setTypeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />
      <main className="container mx-auto px-4 py-8">
        {showCategories ? (
          <CategoryOverview onSelectCategory={(cat) => {
            setCategoryFilter(cat)
            setShowCategories(false)
          }} />
        ) : (
          <Gallery 
            typeFilter={typeFilter} 
            categoryFilter={categoryFilter}
            onItemClick={setSelectedItem} 
          />
        )}
      </main>
      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  )
}

export default App

