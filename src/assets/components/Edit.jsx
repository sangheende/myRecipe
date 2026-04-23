import Chip from "./Chip";
import IngredientSection from "./IngredientSection";
import "./components.css"
const Edit = () => {
    return <div className="edit">
        <section className="section__category">
            <h4 className="input__label">카테고리</h4>
            <div className="section__content">
                <Chip text="🍚 밥요리"/>
                <Chip text="🍲 국물요리"/>
                <Chip text="🍜 면요리"/>
                <Chip text="🍖 고기요리"/>
                <Chip text="🍳 반찬"/>
                <Chip text="🍰 디저트"/>
            </div>
        </section>
        <section className="section__info">
            <div className="section__content">
                <div className="section__content__item">
                    <h4 className="input__label">레시피 이름</h4>
                    <div className="input">
                        <input type="text" className="input__input" placeholder="입력해주세요" />
                    </div>
                </div>
                <div className="section__content__item">
                    <h4 className="input__label">조리시간</h4>
                    <div className="input">
                        <input type="number" className="input__input"/>
                        <span>분</span>
                    </div>
                </div>
            </div>
        </section>
        <IngredientSection />
        <section className="section__step">
            <h4 className="input__label">조리과정</h4>
            <div className="section__content">
                <div className="textarea">
                    <textarea name="" id="" className="textarea__input"  placeholder="엔터로 조리 순서를 구분해주세요">

                    </textarea>

                </div>
            </div>
        </section>
    </div>
}

export default Edit;