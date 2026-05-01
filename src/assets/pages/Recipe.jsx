import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import {Clock} from 'feather-icons-react';

import { RecipeDispatchContext, RecipeContext } from '../../App';
import Header from "../components/Header"
import SectionHeader from "../components/SectionHeader"
import "./css/recipe.css"

const Recipe = ({}) =>{
    const params = useParams();
    const [currentItem, setCurrentItem] = useState();
    const data = useContext(RecipeContext)

    useEffect(()=>{
        const currentId = data.find((item) => String(item.id) === String(params.id))
        if(!currentId){
            window.alert("존재하지 않는 레시피입니다.")
            nav("/", {replace: true})
        }
        setCurrentItem(currentId)
    },[params.id])

    return <div className="recipe">
        <Header
            left={{
                icon:"arrow-left",
                type:"transparent",
                path: -1
            }}
            right={{
                text: "레시피 수정하기",
                path: `/edit/${params.id}`
            }}
        />
        <SectionHeader title={currentItem?.title} chip={`${currentItem?.time}분`}/>
       <div className='section__content'>
            <div className='recipe__ingre'>
                <h2 className='title'>재료</h2>
                <div className='recipe__ingre__list'>
                {currentItem?.ingredients.map((item, idx) => (
                        <div key={idx} className="recipe__ingre__item">
                            <div className='recipe__ingre__item__title'>
                                {item.name}
                            </div>
                            <div className='recipe__ingre__item__ea'>
                                {item.ea}{item.unit}
                            </div>
                        </div>
                ))}
                </div>
            </div>
            <ol className='recipe__steps'>
                <h2 className='title'>요리방법</h2>
                {currentItem?.steps.map((item, idx) => (
                    <li key={idx} className="recipe__steps__item">
                        <span className="step__num">{idx+1}</span>{item}
                    </li>
                ))}
            </ol>

       </div>
    </div>
}

export default Recipe;