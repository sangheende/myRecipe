import {useEffect} from "react";
import {Search} from 'feather-icons-react';
import Card from "../components/Card";
import "./css/home.css"
const Home = () =>{
    useEffect(()=> {},[])
    return <div className="home">
        <div className="search">
            <Search />
            <input className='search__input' type="text" placeholder="레시피 이름 또는 재료를 검색하세요"/>
        </div>
        <div className="card__list">
            <Card />
            <Card />
            <Card />

        </div>
    </div>
}

export default Home;