import './App.css'
import { createContext } from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from './assets/pages/Home'
import Recipe from './assets/pages/Recipe'
import AddRecipe from './assets/pages/AddRecipe'
import Edit from './assets/pages/Edit'
import NotFound from './assets/pages/NotFound'
import Header from './assets/components/Header'
import useRecipes from './assets/hooks/useRecipes'

export const RecipeContext = createContext()
export const RecipeDispatchContext = createContext()

function App() {
  const { data, onCreate, onUpdate, onDelete } = useRecipes();


  return (
    <div className="App">
      <RecipeContext.Provider value={data}>
        <RecipeDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/new" element={<AddRecipe />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </div>
  )
}


export default App
