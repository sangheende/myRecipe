import {Clock} from 'feather-icons-react';
import {useNavigate} from 'react-router-dom';
import Chip from "./Chip";
import KebabMenu from "./KebabMenu";
import './components.css'; 

const Card = ({title, time, chips, image, id}) =>{
    const navigate = useNavigate();
    return <div className="card" onClick={() => navigate(`/recipe/${id}`)}>
        <KebabMenu items={[
             { label: '✏️ 수정'},
             { label: '🗑️ 삭제', type: 'danger' }
        ]} />
            <div className="card__image"></div>
            <div className="card__content">
                <h2 className="card__content__title">{title}</h2>
                <span className="card__content__time"><Clock /> {time}분</span>
                <div className="card__content__chipList">
                    {chips.map((chip, index) => <Chip key={index} label={chip} type="default" />)}
                </div>
            </div>
    </div>
}
export default Card;