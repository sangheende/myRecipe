import {useContext} from 'react';
import { RecipeContext } from "../../App"
import Search from "../components/SearchInput";
import RecipeList from "../components/RecipeList";

import "./css/home.css"
const Home = () =>{
    const data = useContext(RecipeContext);
    console.log(data)
    return <div className="home">
        <Search />
        <RecipeList data={data}/>
    </div>
}

export default Home;