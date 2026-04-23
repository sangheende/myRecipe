import { useParams } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import {Clock} from 'feather-icons-react';

import "./css/recipe.css"

const Recipe = ({}) =>{
    const { id } = useParams();
    return <div className="recipe">
    </div>
}

export default Recipe;