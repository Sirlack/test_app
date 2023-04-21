import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Addition from './Components/Added'
import ClassDemo from './Components/Forms/ClassDemos'
import store from './Store/Store';
import SelectSharing from './Components/Forms/SelectSharing';
import FormBootstrap1 from './Components/Forms/FormBootstrap1';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Forms/Navigation';



// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.


class App extends Component{   

  render(){
    return[
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SelectSharing nav ={Navigation()}></SelectSharing>} />
      <Route path="/dashboard" element={<ClassDemo></ClassDemo>} />
      <Route path="/bs_Inicio" element={<FormBootstrap1 nav ={Navigation()}></FormBootstrap1>} />
      </Routes>
      </BrowserRouter>
 
          
    ];
}
}
export default App;
