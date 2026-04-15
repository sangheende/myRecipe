import {Clock} from 'feather-icons-react';
import Chip from "./Chip";
import './components.css';

const Card = ({title, time, chips, image}) =>{
    return <div className="card">
        <div className="card__image"></div>
        <div className="card__content">
            <h2 className="card__content__title">카드 제목</h2>
            <span className="card__content__time"><Clock /> 30분</span>
            <div className="card__content__chipList">
                <Chip label="#한식" type="korean" />
                <Chip label="#양식" type="western" />
                <Chip label="#중식" type="chinese" />
                <Chip label="#중식" type="chinese" />
            </div>
        </div>
    </div>
}
export default Card;