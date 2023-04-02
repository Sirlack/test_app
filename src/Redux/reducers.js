// cargamos el método de Redux para
// poder combinar reducers
import { combineReducers } from "redux";


function parent(state = [], action = {}) {
  let copy = {...state};
  switch (action.type) {
    
    case "counter/increment":
      copy.value++;
      return {...copy};
    case "counter/decrement":
      copy.value--;
      return {...copy};
    case "counter/newValue":        
      copy.value = 0;
      return {...copy};  
    case "counter/addValue":
      copy.externalPayload = action.payload;
      return {...copy};  
    case "api/localcall":
      copy.localPayload = action.payload;  
      return {...copy};
    default:
      // si el action.type no existe o no concuerda
      // con ningunos de los casos definidos
      // devolvemos el estado sin modificar
      return state;
  }
}

// combinamos nuestros reducers
// los keys que usemos para nuestros reducers
// van a ser usados como keys en nuestro store
// en este ejemplo sería: { todos: [], }
const reducers = combineReducers({
  parent
});

export default reducers;