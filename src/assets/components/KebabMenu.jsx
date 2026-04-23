import { useState, useEffect, useRef } from 'react';
import Button from "./Button";
import './components.css';
const KebabMenu = ({items}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    return <div className="kebab__wrapper"
    onClick={(e) => e.stopPropagation()}
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}>
        
        <Button type="transparent" className ="kebab__button" icon={"more-vertical"} />

        <div className='kebab__menu' ref={ref} style={{display: open ? 'block' : 'none'}}>
            <ul className='kebab__menu__list'>
               <li className='kebab__menu__item'>✏️ 수정</li>
               <li className='kebab__menu__item kebab__menu__item--danger'>🗑️ 삭제</li>
            </ul>
        </div>
    </div>
}

export default KebabMenu;