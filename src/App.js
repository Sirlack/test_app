import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Addition from './Components/Added'
import ClassDemo from './Components/ClassDemos'
import store from './Store/Store';


// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.


class App extends Component{   

  render(){
    return(
    <div className="App"> 
     
        <img src={logo} className="App-logo" alt="logo" />      
       <ClassDemo Name={store.getState().parent.children1}></ClassDemo>
       <ClassDemo Name={'Nacho'}></ClassDemo>
       
             
    </div>
  );
}
}
export default App;
