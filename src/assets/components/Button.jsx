import { useNavigate ,useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import './components.css';

const Button = ({type,text, onClick, name, path, icon}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }

    const isActive = path && location.pathname === path;

    return <button className={`button button--${type} ${name}${isActive ? ' active' : ''}`} onClick={path ? () => handleClick(path) : onClick}>{icon && <FeatherIcon icon={icon} />} {text}</button>
}

export default Button;