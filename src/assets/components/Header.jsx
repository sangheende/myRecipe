import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './css/components.css';

const Header = ({left, right}) =>{
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path)
    }

    console.log(right)

    return <div className="header">
        {left? <Button className={`${left.className} header__btn--left`} type={left.type} onClick={left.path? () => handleClick(left.path) :left.onClick} text={left.text} icon={left.icon}/> : ''}
        <h1 className="header__logo" onClick={() => handleClick('/')}>오늘 뭐 먹지?</h1>
        {right? <Button className={`${right.className} header__btn--right`} type={right.type} onClick={right.path? () => handleClick(right.path) : right.onClick} text={right.text} icon={right.icon}/> : ''}
    </div>
}

export default Header;