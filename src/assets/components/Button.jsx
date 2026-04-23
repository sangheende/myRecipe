import Feather from 'feather-icons-react';

const Button = ({text, type, icon, onClick, className}) => {
    return <button className={`button button--${type} ${className}`} onClick={onClick}>{icon && <Feather icon={icon} />}{text}</button>
}

export default Button;