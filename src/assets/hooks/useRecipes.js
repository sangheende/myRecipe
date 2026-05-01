import { useReducer, useRef, useEffect } from 'react';
import defaultRecipes from '../data/recipes';

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.data.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("recipe", JSON.stringify(nextState));
  return nextState;
}

const useRecipes = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("recipe");
    if (!storedData) {
      dispatch({ type: "INIT", data: defaultRecipes });
      return;
    }
    const parseData = JSON.parse(storedData);
    if (!Array.isArray(parseData)) return;

    let maxId = 0;
    parseData.forEach((item) => {
      if (Number(item.id) > maxId) maxId = Number(item.id);
    });

    idRef.current = maxId + 1;
    dispatch({ type: "INIT", data: parseData });
  }, []);

  const onCreate = ({ categoryId, title, time, ingredients, steps }) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, categoryId, title, time, ingredients, steps },
    });
  };

  const onUpdate = ({ id, categoryId, title, time, ingredients, steps }) => {
    dispatch({
      type: "UPDATE",
      data: { id, categoryId, title, time, ingredients, steps },
    });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", data: { id } });
  };

  return { data, onCreate, onUpdate, onDelete };
};

export default useRecipes;
