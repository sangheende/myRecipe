import './components.css';
import {useState, useEffect, useRef} from "react";

const TextArea = ({label, isNecessary = false}) => {
    const [value, setValue] = useState("");

    const onChangeValue = (e)=> {
        setValue(e.target.value);
    }
    return<>
        <div className={`input__label ${isNecessary ? 'necessary' : ''}`} style={{display: label ? 'block' : 'none'}}>
            <span >
                {label}
            </span>
        </div>
        <div className="textarea">
            <textarea className="textarea__input" placeholder="입력해주세요" value={value} onChange={onChangeValue}></textarea>
        </div>
    </> 
}

export default TextArea;