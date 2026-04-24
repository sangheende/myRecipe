import Chip from "../components/Chip"
import Card from "../components/Card"
import Search from "../components/SearchInput"
import Category from "../components/Category"
const onCategoryClick = () => {
    
}

const RecipeList = ({data}) => {
    return <div className="RecipeList">
        <Category/>
        <div className="RecipeList__list">
            {data.map((recipe) => (
                <Card key={recipe.pageId} {...recipe} />
            ))}
        </div>
    </div>
}

export default RecipeList;