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
    const {onUpdate, onDelete} = useContext(RecipeDispatchContext);
    

    console.log(data)
    useEffect(()=>{
        const currentId = data.find((item) => String(item.id) === String(params.id))

        if(!currentId){
            window.alert("존재하지 않는 레시피입니다.")
            nav("/", {replace: true})
        }

        setCurrentItem(currentId)
    },[params.id])

    useEffect(()=>{
        if(currentItem) setInput(currentItem)
    },[currentItem])

    const onSubmit = () => {
        onUpdate(input);
        window.alert("레시피 수정이 완료되었습니다")
        nav("/", {replace: true})
        
    };
    const onSubmitDelete = () => {
        onDelete(input);
        window.alert("레시피 삭제가 완료되었습니다")
        nav("/", {replace: true})
        
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
        <div className='button__section'>
            <Button text="수정하기" className="large__button" type="primary" onClick={onSubmit}/>
            <Button text="삭제하기" className="large__button" type="primary" onClick={onSubmitDelete}/>

        </div>
    </div>
}

export default Edit;