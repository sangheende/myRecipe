import { useState, useEffect, useRef, useContext } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import {RecipeContext,RecipeDispatchContext} from '../../App'
import Button from "./Button";
import './css/components.css';

const KebabMenu = ({items}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const nav = useNavigate();
    const data = useContext(RecipeContext)
    const {onDelete} = useContext(RecipeDispatchContext)

    const onOpenEdit = (e) => {
        const elId = e.target.closest('.card').id
        console.log(elId)
        nav(`/edit/${elId}`)
    }
    
    const onClickDelete = (e) => {
        const elId = e.target.closest('.card').id
        window.alert("삭제 시 다시 복구되지 않습니다 그래도 지우시겠습니까?")
        onDelete(elId)

    }

    return <div className="kebab__wrapper"
    onClick={(e) => e.stopPropagation()}
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}>


        
        <Button type="transparent" className ="kebab__button" icon={"more-vertical"} />

        <div className='kebab__menu' ref={ref} style={{display: open ? 'block' : 'none'}}>
            <ul className='kebab__menu__list'>
               <li className='kebab__menu__item' onClick={onOpenEdit}>✏️ 수정</li>
               <li className='kebab__menu__item kebab__menu__item--danger' onClick={onClickDelete}>🗑️ 삭제</li>
            </ul>
        </div>
    </div>
}

export default KebabMenu;