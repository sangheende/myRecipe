import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import "./css/addRecipes.css";
const AddRecipe = () =>{
    return <div>
        <div className="section__header">
            <h1>새 레시피 추가</h1>
        </div>
        <div className="addRecipe__container">
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
                <h2 className="addRecipe__list__title">재료</h2>
                <div className="addRecipe__list__label">
                    <span>재료명</span>
                    <span>필요량</span>
                    <span>단위</span>
                </div>

                <div className="addRecipe__list__item">
                    <Input/>
                    <Input/>
                    <Input/>
                </div>

                <Button text="재료 추가" type="secondary" className ="addRecipe__button" icon={"plus"}/>
            </div>
            <div className="addRecipe__list addRecipe__list--method">
                <div className="addRecipe__list__item">
                    <TextArea/>
                </div>
            </div>
        </div>
    </div>
}

export default AddRecipe;