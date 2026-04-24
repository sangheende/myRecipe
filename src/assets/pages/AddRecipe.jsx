import {useContext, useState} from 'react';
import SectionHeader from "../components/SectionHeader"
import Edit from "../components/Edit"
import Button from "../components/Button"
import { RecipeDispatchContext } from "../../App"
import "./css/addRecipes.css";


const AddRecipe = () =>{
    const {onCreate} = useContext(RecipeDispatchContext);

    const [input, setInput] = useState({
        category: "",
        name: "",
        time: "",
        ingredients: [{name: "", ea: "", unit: ""}],
        steps: []
    });

    const onChangeInput = (e) => {
        const value = e.target.name === "steps"
            ? e.target.value.split("\n")
            : e.target.value;
        setInput({
            ...input,
            [e.target.name]: value
        });
    };

    const onSubmit = () => {
        onCreate(input);
    };

    return <div>
        <SectionHeader title="새 레시피 추가" />
        <Edit input={input} onChangeInput={onChangeInput} />
        <Button text="추가하기" className="addRecipe__button" type="primary" onClick={onSubmit}/>
    </div>
}

export default AddRecipe;