import {useEffect} from "react";
import useRecipes from '../hooks/useRecipes';
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import "./css/home.css"
const Home = () =>{
    const recipes = useRecipes();
    console.log(recipes);
    return <div className="home">
        <SearchInput />
        <div className="card__list">
            {recipes.map(recipe => <Card id={recipe.id} title={recipe.title} time={recipe.time} chips={recipe.ingredients}/>)}

        </div>
    </div>
}

export default Home;