import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './components.css';

const Header = () =>{
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path)
    }

    return <div className="header">
        <Button text="뒤로가기" path="/" type="transparent" className ="header__button" icon={"arrow-left"}/>
        <h1 className="header__logo" onClick={() => handleClick('/')}>오늘 뭐 먹지?</h1>
        <Button text="레시피 추가" path="/add" type="primary"className ="header__button" icon={"plus"}/>
    </div>
}

export default Header;