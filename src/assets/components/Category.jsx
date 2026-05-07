import { useState, useEffect } from "react"
import Chip from "./Chip"

const categories = [
    "🍚 밥요리",
    "🍲 국/찌개",
    "🍜 면요리",
    "🍖 구이/튀김",
    "🍳 반찬",
    "🍰 디저트",
    "🍹 음료"
]
const Category = ({value, onClick = () => {}, showAll = false}) => {
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        if (value) setSelectedId(Number(value))
    }, [value])

    const onClickCategory = (categoryId) => {
        if (categoryId === 'all') {
            setSelectedId(null)
            onClick({ target: { name: "categoryId", value: 'all' } })
            return
        }
        const isDeselect = selectedId === categoryId
        setSelectedId(isDeselect ? null : categoryId)
        onClick({ target: { name: "categoryId", value: categoryId} })
    }

    return <div className="category">
        <div className="category__wrap">
            {showAll && <Chip categoryId="all" text="전체" type={selectedId === null ? "primary" : "white"} onClick={onClickCategory}/>}
            {categories.map((item, idx) => <Chip key={idx} categoryId={idx+1} text={item} type={selectedId === idx+1 ? "primary" : "white"} onClick={onClickCategory}/>)}

        </div>
    </div>
}

export default Category;