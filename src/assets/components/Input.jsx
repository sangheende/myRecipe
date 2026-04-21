import './components.css';
import {XCircle} from 'feather-icons-react';
import {useState} from "react";

const Input = ({label, isNecessary = false, onChange}) => {
    const [value, setValue] = useState("");

    const onChangeValue = (e)=> {
        setValue(e.target.value);
        onChange?.(e);
    }
    return<>
        <div className={`input__label ${isNecessary ? 'necessary' : ''}`} style={{display: label ? 'block' : 'none'}}>
            <span >
                {label}
            </span>
        </div>
        <div className="input">
            <input className="input__input" type="text" placeholder="입력해주세요" value={value} onChange={onChangeValue}/>
            <button className={`input__button ${value ? 'active' : ''}`} onClick={() => setValue("")}><XCircle /></button>
        
        </div>
    </> 
}

export default Input;