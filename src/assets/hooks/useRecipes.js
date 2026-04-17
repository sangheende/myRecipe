import defaultRecipes from '../data/recipes';
import {useState, useEffect} from 'react';
const useRecipes = () =>{
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        setRecipes(defaultRecipes);
    },[])

    return recipes;
}

export default useRecipes;