import Chip from "../components/Chip"
import Card from "../components/Card"
import Search from "../components/SearchInput"

const onCategoryClick = () => {
    
}

const RecipeList = ({data}) => {
    return <div className="RecipeList">
        <div className="category">
            <Chip text="🍚 밥요리"/>
            <Chip text="🍲 국물요리"/>
            <Chip text="🍜 면요리"/>
            <Chip text="🍖 고기요리"/>
            <Chip text="🍳 반찬"/>
            <Chip text="🍰 디저트"/>
        </div>
        <div className="RecipeList__list">
            {data.map((recipe) => (
                <Card key={recipe.pageId} {...recipe} />
            ))}
        </div>
    </div>
}

export default RecipeList;