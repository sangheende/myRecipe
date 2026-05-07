import { useState, useContext } from 'react';
import { RecipeContext } from "../../App"
import Search from "../components/SearchInput";
import RecipeList from "../components/RecipeList";
import Header from "../components/Header"

import "./css/home.css"
const Home = () =>{
    const data = useContext(RecipeContext);
    const [searchValue, setSearchValue] = useState("")

    return <div className="home">
        <Header right = {{
            text: "레시피 추가하기",
            type: "primary",
            className: "btn-add",
            icon: "plus",
            path: "/new"
        }}/>
        <Search value={searchValue} onChange={setSearchValue}/>
        <RecipeList data={data} searchValue={searchValue}/>
    </div>
}

export default Home;