import Category from "./Category";
import IngredientSection from "./IngredientSection";
import './css/components.css';

const Editor = ({ input, setInput }) => {


     const onChangeInput = (e) => {
        const value = e.target.name === "steps"
            ? e.target.value.split("\n")
            : e.target.value;
        setInput({
            ...input,
            [e.target.name]: value
        });
    };

    return <div className="edit">
        <section className="section__category">
            <h4 className="input__label">카테고리</h4>
            <div className="section__content">
                <Category name="category" onClick={onChangeInput}/>
            </div>
        </section>
        <section className="section__info">
            <div className="section__content">
                <div className="section__content__item">
                    <h4 className="input__label">레시피 이름</h4>
                    <div className="input">
                        <input type="text" className="input__input" placeholder="입력해주세요" name="title" value={input?.title ?? ""} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="section__content__item">
                    <h4 className="input__label">조리시간</h4>
                    <div className="input">
                        <input type="number" className="input__input" name="time" value={input?.time ?? ""} onChange={onChangeInput}/>
                        <span>분</span>
                    </div>
                </div>
            </div>
        </section>
        <IngredientSection name="ingredients" onChange={onChangeInput} value={input?.ingredients}/>
        <section className="section__step">
            <h4 className="input__label">조리과정</h4>
            <div className="section__content">
                <div className="textarea">
                    <textarea name="steps" id="" className="textarea__input" placeholder="엔터로 조리 순서를 구분해주세요" value={input?.steps?.join("\n") ?? ""} onChange={onChangeInput}></textarea>

                </div>
            </div>
        </section>
    </div>
}

export default Editor;