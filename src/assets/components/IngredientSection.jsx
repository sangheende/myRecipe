import {useState} from "react";

import "./components.css";
import Button from "./Button";

const IngredientSection = ({name, onChange = () => {}} ) => {

     const [ingredients, setIngredients] = useState([{name: "", ea: "", unit: ""}]);

    const addIngredient = () => {
        const newIngredients = [...ingredients, {name: "", ea: "", unit: ""}];
        setIngredients(newIngredients);
        onChange({ target: { name, value: newIngredients } });
    }

    const handleChange = (idx, field, value) => {
        const updated = ingredients.map((item, i) =>
            i === idx ? { ...item, [field]: value } : item
        );
        setIngredients(updated);
        onChange({ target: { name, value: updated } });
    }

    const deleteIngredient = (e) => {
        const index = Array.from(e.currentTarget.parentNode.parentNode.children).indexOf(e.currentTarget.parentNode);
        const updated = ingredients.filter((_, idx) => idx !== index);
        setIngredients(updated);
        onChange({ target: { name, value: updated } });
    }

    return (
        <section className="section__ingredient">
            <h4 className="input__label">재료</h4>

            <div className="section__ingredient__label">
                <span>재료명</span>
                <span>필요량</span>
                <span>단위</span>
            </div>
            <div className="section__content">
                {ingredients.map((item, idx) => (
                    <div className="section__content__item" key={idx}>
                        <div className="input">
                            <input type="text" className="input__input" placeholder="재료명" value={item.name} onChange={(e) => handleChange(idx, "name", e.target.value)}/>
                        </div>
                        <div className="input">
                            <input type="text" className="input__input" placeholder="필요량" value={item.ea} onChange={(e) => handleChange(idx, "ea", e.target.value)}/>
                        </div>
                        <div className="input">
                            <input type="text" className="input__input" placeholder="단위" value={item.unit} onChange={(e) => handleChange(idx, "unit", e.target.value)}/>
                        </div>
                        <Button className="section__ingredient__delete" text={"삭제"} icon={"trash"} onClick={deleteIngredient}/>
                    </div>
                ))}
            </div>
            <Button className="section__ingredient__add" text={"재료 추가"} icon={"plus"} onClick={addIngredient}/>
        </section>
    );
}

export default IngredientSection;
