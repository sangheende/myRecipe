import {useContext, useState} from 'react';
import SectionHeader from "../components/SectionHeader"
import Header from "../components/Header"
import Edit from "../components/Editor"
import Button from "../components/Button"
import { RecipeDispatchContext } from "../../App"
import "./css/addRecipes.css";
import { type } from 'feather-icons-react/build/icons.json';


const AddRecipe = () =>{
    const {onCreate} = useContext(RecipeDispatchContext);

    const [input, setInput] = useState({
        categoryId: "",
        title: "",
        time: "",
        ingredients: [{name: "", ea: "", unit: ""}],
        steps: []
    });

    const onSubmit = () => {
        onCreate(input);
    };

    return <div>
        <Header
            left={{
                icon:"arrow-left",
                type:"transparent",
                path: -1
            }}
        />
        <SectionHeader title="새 레시피 추가" />
        <Edit input={input} setInput={setInput} />
        <Button text="추가하기" className="addRecipe__button" type="primary" onClick={onSubmit}/>
    </div>
}

export default AddRecipe;