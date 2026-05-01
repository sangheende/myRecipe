import {Clock} from 'feather-icons-react';
import {useNavigate} from 'react-router-dom';
import Chip from "./Chip";
import KebabMenu from "./KebabMenu";
import './css/components.css'; 

const Card = ({title, time, ingredients, image, id, categoryId, isActive}) =>{
    const navigate = useNavigate();
    return <div className="card" id={id} onClick={() => isActive? navigate(`/recipe/${id}`):""}>
        <div className='card__inner'>
            <KebabMenu />
            
            <div className="card__content">
                <h2 className="card__content__title">{title}</h2>
                <span className="card__content__time"><Clock /> {time}분</span>
                <div className="card__content__chipList">
                    
                    {ingredients.slice(0,4).map((item, index) => <Chip key={index} text={item.name} type="default" />)}
                    <Chip key={5} text={"more..."} type="default" />
                </div>
            </div>
            <div className={`card__image--${categoryId}`}></div>

        </div>
    </div>
}
export default Card;