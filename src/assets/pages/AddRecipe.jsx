import {useState} from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import "./css/addRecipes.css";


const AddRecipe = () =>{

    const [ingredients, setIngredients] = useState([{name: "", ea: "", unit: ""}]);

    const addIngredient = () => {
        setIngredients([...ingredients, {name: "", ea: "", unit: ""}]);
        console.log(ingredients);
    }

    const handleChange = (idx, field, value) => {
        const updated = ingredients.map((item, i) =>
            i === idx ? { ...item, [field]: value } : item
        );
        setIngredients(updated);
    }

    const deleteIngredient = (e) => {
        const index = Array.from(e.currentTarget.parentNode.parentNode.children).indexOf(e.currentTarget.parentNode);
        setIngredients(ingredients.filter((_, idx) => idx !== index));
        
    }

    return <div>
        <div className="section__header">
            <h1>새 레시피 추가</h1>
        </div>
        <div className="section__content">
            <div className="addRecipe__list addRecipe__list--basic">
                <div className="addRecipe__list__item">
                    <Input label="레시피 이름" isNecessary={true}/>
                </div>
                <div className="addRecipe__list__item">
                    <Input label="조리시간" isNecessary={true}/>
                    분
                </div>
            </div>
            <div className="addRecipe__list addRecipe__list--ingredient">
                <div className="addRecipe__list__header">
                    <h2 className="addRecipe__list__title">재료</h2>
                    <div className="addRecipe__list__label">
                        <span>재료명</span>
                        <span>필요량</span>
                        <span>단위</span>
                    </div>

                </div>
                <div className="addRecipe__list__content">
                    {ingredients.map((item, idx) => (
                        <div key={idx} className="addRecipe__list__item">
                            <Input onChange={(e) => handleChange(idx, "name", e.target.value)} />
                            <Input onChange={(e) => handleChange(idx, "ea", e.target.value)} />
                            <Input onChange={(e) => handleChange(idx, "unit", e.target.value)} />
                            <Button icon={"x"} type="danger" name="addRecipe__closeBtn" onClick={deleteIngredient}/>
                        </div>
                    ))}

                </div>

                <Button text="재료 추가" type="secondary" name ="addRecipe__button" icon={"plus"} onClick={addIngredient}/>
            </div>
            <div className="addRecipe__list addRecipe__list--method">
                <div className="addRecipe__list__item">
                    <TextArea/>
                </div>
            </div>
        </div>

        <Button text="레시피 저장" name="addRecipe__button" type="primary"/>
    </div>
}

export default AddRecipe;