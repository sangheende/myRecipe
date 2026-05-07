import { useState } from "react"
import CardStackList from "./CardStack"
import Category from "../components/Category"

const RecipeList = ({data, searchValue = ""}) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)

    const handleCategoryClick = ({ target: { value: categoryId } }) => {
        if (categoryId === 'all') {
            setSelectedCategoryId(null)
            return
        }
        setSelectedCategoryId(prev => prev === categoryId ? null : categoryId)
    }

    const filteredData = data
        .filter(item => !selectedCategoryId || item.categoryId === selectedCategoryId)
        .filter(item => {
            const q = searchValue.trim().toLowerCase()
            if (!q) return true
            return item.title?.toLowerCase().includes(q)
                || item.ingredients?.some(ing => ing.name?.toLowerCase().includes(q))
        })

    return <div className="RecipeList">
        <Category onClick={handleCategoryClick} showAll/>
        <div className="RecipeList__list">
            <CardStackList recipes={filteredData}/>
        </div>
    </div>
}

export default RecipeList;
