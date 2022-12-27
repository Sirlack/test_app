import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Addition from './Components/Added'
import ClassDemo from './Components/ClassDemos'
import store from './Store/Store';
import SelectSharing from './Components/Form/SelectSharing'


// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.


class App extends Component{   

  render(){
    return(
      <>
        <SelectSharing></SelectSharing>
        <ClassDemo></ClassDemo>
      </>
          
  );
}
}
export default App;
