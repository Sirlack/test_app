import { createStore } from 'redux';
import reducers from "../Redux/reducers";


const initialState = { parent: { value : 0, externalPayload: '',localPayload:'' }}
// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(reducers,initialState);

// Puedes suscribirte manualmente a los cambios, o conectar tu vista directamente
store.subscribe(() => {
  console.log(store.getState())
});

export default store