import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './css/components.css';

const Header = () =>{
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path)
    }

    return <div className="header">
        <Button text="뒤로가기" type="transparent" className ="header__button" icon={"arrow-left"}  onClick={() => handleClick('/')} />
        <h1 className="header__logo" onClick={() => handleClick('/')}>오늘 뭐 먹지?</h1>
        <Button text="레시피 추가" type="primary"className ="header__button" icon={"plus"} onClick={() => handleClick('/add')}/>
    </div>
}

export default Header;