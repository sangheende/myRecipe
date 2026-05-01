import {useParams, useNavigate} from 'react-router-dom';
import { useState ,useContext, useEffect } from 'react';

import Header from "../components/Header"
import SectionHeader from "../components/SectionHeader"
import Editor from '../components/Editor'
import Button from '../components/Button'
import { RecipeDispatchContext, RecipeContext } from '../../App';


const Edit = ()=>{
    const params = useParams();
    const nav = useNavigate();
    const data = useContext(RecipeContext);
    const [currentItem, setCurrentItem] = useState();
    const [input, setInput] = useState();
    const {onUpdate} = useContext(RecipeDispatchContext);
    

    console.log(data)
    useEffect(()=>{
        const currentId = data.find((item) => String(item.id) === String(params.id))

        if(!currentId){
            window.alert("존재하지 않는 일기입니다.")
            nav("/", {replace: true})
        }

        setCurrentItem(currentId)
    },[params.id])

    useEffect(()=>{
        if(currentItem) setInput(currentItem)
    },[currentItem])

    const onSubmit = () => {
        onUpdate(input);
    };

    return <div className="edit">
         <Header
            left={{
                icon:"arrow-left",
                type:"transparent",
                path: -1
            }}
        />
        <SectionHeader title="레시피 수정하기"/>
        <Editor input={input} setInput={setInput}/>
        <Button text="추가하기" className="editRecipe__button" type="primary" onClick={onSubmit}/>
    </div>
}

export default Edit;