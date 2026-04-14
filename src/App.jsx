import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './assets/pages/Home'
import Recipe from './assets/pages/Recipe'
import AddRecipe from './assets/pages/AddRecipe'
import NotFound from './assets/pages/NotFound'
import Header from './assets/components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
