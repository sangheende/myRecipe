import { useNavigate ,useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import './components.css';

const Button = ({type,text, onClick, className, path, icon}) => {
    
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }

    function locationButton(path){
        const location = useLocation();
        const isPath =  location.pathname === path;
        return isPath ?  className : className += ' active';
    }


    return <button className={`button button--${type} ${path ? locationButton(path) : {className}}`} onClick={path ? () => handleClick(path) : onClickß}>{icon && <FeatherIcon icon={icon} />} {text}</button>
}

export default Button;