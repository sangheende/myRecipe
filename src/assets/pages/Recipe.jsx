import { useParams } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import Chip from "../components/Chip"
import {Clock} from 'feather-icons-react';

import "./css/recipe.css"

const Recipe = ({}) =>{
    const { id } = useParams();
    const recipe = useRecipes().find(r => r.id == id);

    if (!recipe) return null;

    return <div className="recipe">
        <div className="section__header">
            <h1>{recipe.title}</h1>
            <Chip label={`${recipe.time}분`} type={"primary"}/>
        </div>
        <div className='section__content'>
            <div className="recipe__ingredients">
                <h2>재료</h2>
                <ul className='recipe__ingre__list'>
                    {recipe.ingredients.map((ingredient, index) => <li key={index}>
                        <span className='ingre_list_name'>{ingredient}</span>
                        <span className='ingre_list_ea'>{recipe.ea[index]}</span>
                    </li>)}
                </ul>
            </div>
            <div className="recipe__steps">
                <h2>조리법</h2>
                <ol>
                    {recipe.steps.map((instruction, index) => <li key={index}><span className="step__number">{index + 1}</span>{instruction}</li>)}
                </ol>
            </div>

        </div>
    </div>
}

export default Recipe;