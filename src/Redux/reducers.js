// cargamos el método de Redux para
// poder combinar reducers
import { combineReducers } from "redux";


function parent(state = [], action = {}) {
  switch (action.type) {
    case "counter/increment":
      // creamos una copia del estado actual
      const copy = Array.from(state);
      // modificamos lo que necesitamos
      //copy.push(action.payload.text);
      // retornamos el nuevo estado
      return {children1:'increment1',children2:'increment2'};
      case "counter/decrement":
        // creamos una copia del estado actual
        //const copy = Array.from(state);
        // modificamos lo que necesitamos
        //copy.push(action.payload.text);
        // retornamos el nuevo estado
        return {children1:'decrement1',children2:'decrement2'};
        case "counter/newValue":
        return {children1:'decrement1',children2:'decrement2',children3:'newValue'};  
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