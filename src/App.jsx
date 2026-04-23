import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Routes, Route} from 'react-router-dom'

import defaultRecipes from './assets/data/recipes'
import Home from './assets/pages/Home'
import Recipe from './assets/pages/Recipe'
import AddRecipe from './assets/pages/AddRecipe'
import Edit from './assets/pages/Edit'
import NotFound from './assets/pages/NotFound'
import Header from './assets/components/Header'

function reducer(state, action){
    switch(action.type){
      case "CREATE":
        return [action.data, ...state];
      case "UPDATE": 
        return state.map((item) =>String(item.pageId) === String(action.data.pageId)? action.data : item );
      case "DELETE": 
        return state.filter((item) => String(item.pageId) !== String(action.data.pageId));
      default:
        return state;
  }
}

export const RecipeContext = createContext()
export const RecipeDispatchContext = createContext()

function App() {

  const [data, dispatch] = useReducer(reducer, defaultRecipes);
  const idRef = useRef(3);
  const onCreate = (pageId, title, ea, steps, time, ingre) =>{
    dispatch(
      {
        type: "CREATE",
        data: {
          pageId : idRef.current++,
          title,
          ingre,
          ea,
          steps,
          time,
        }
      }
    )
  } 

  const onUpdate = (pageId, title, ea, steps, time, ingre) => {
    dispatch(
      {
        type: "UPDATE",
        data: {
          pageId,
          title,
          ingre,
          ea,
          steps,
          time,
        }
      }
    )
  }

  const onDelete = pageId => {
    dispatch(
      {
        type: "DELETE",
        data: {
          pageId,
        }
      }
    )
  }


  return (
    <div className="App">
      <Header />
      <RecipeContext.Provider value={data}>
        <RecipeDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </div>
  )
}


export default App
