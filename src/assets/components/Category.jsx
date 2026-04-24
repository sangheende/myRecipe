import { useState } from "react"
import Chip from "./Chip"

const categories = [
    "🍚 밥요리",
    "🍲 국물요리",
    "🍜 면요리",
    "🍖 고기요리",
    "🍳 반찬",
    "🍰 디저트"
]

const Category = ({onClick = () => {}}) => {
    const [selectedId, setSelectedId] = useState(null)

    const onClickCategory = (categoryId) => {
        const isDeselect = selectedId === categoryId
        setSelectedId(isDeselect ? null : categoryId)
        onClick({ target: { name: "category", value: isDeselect ? "" : categories[categoryId - 1] } })
    }

    return <div className="category">
        {categories.map((item, idx) => <Chip key={idx} categoryId={idx+1} text={item} type={selectedId === idx+1 ? "primary" : "white"} onClick={onClickCategory}/>)}
    </div>
}

export default Category;