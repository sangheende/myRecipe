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
                {items.map((item, index) => <li key={index} className={`kebab__item ${item.type === 'danger' ? 'kebab__item--danger' : ''}`}>{item.label}</li>)}
            </ul>
        </div>
    </div>
}

export default KebabMenu;