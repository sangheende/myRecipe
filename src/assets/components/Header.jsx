import { useLocation } from 'react-router-dom';
import {ArrowLeft} from 'feather-icons-react';
function locationButton(path){
    const location = useLocation();
    return location.pathname === path;
}

const Header = () =>{
    return <div className="header">
        <button className= {locationButton('/') ? 'header__button' : 'header__button active'}><ArrowLeft /> 뒤로가기</button>
        <h1 className="header__logo">오늘 뭐 먹지?</h1>
        <button className={locationButton('add') ? 'header__button' : 'header__button active'}>레시피 추가</button>
    </div>
}

export default Header;