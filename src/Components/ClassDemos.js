import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Additions from './Additions';
import {increment,decrement,newValue} from '../Actions/Action';
import store from '../Store/Store';
import { connect } from 'react-redux'
//import { useSelector, useDispatch } from 'react-redux';

let popo;

function pepe(){
    //popo =  store.getState().value;
    popo =  'Jolines';
}
const mapStateToProps = state => {
    return { Name: state.parent.children2, storeNewField: state.parent.children3 };
  };
class ClassDemos extends React.Component{


    classMod(){
        this.setState({name: 'Clasical',  nameStore : 'Music'/*store.getState().value*/});
    }
    constructor(props){
        super(props);
        this.state={
            name: props.Name,
            nameStore : store.getState().parent.children1
        }
    }
    
    render(){
        //const dispatch = useDispatch();
        return (
            

        <div>
            <Additions></Additions>
            <h1>Hello props.storeNewField {this.props.storeNewField}</h1>
            <h1>Hello props.name {this.props.Name}</h1>
            <h1>Hello state name {this.state.name}</h1>
            <h1>Hello state nameStore {this.state.nameStore}</h1>            
            {/*<h1>Hello store value {store.getState().value}</h1>*/}
            <h1>Hello global variable{popo}</h1>
            <input type="text" class="form-control" id="usr"></input>
            {/*<button  onClick={() => store.dispatch(this.props.increment())}>Dispatch action</button>*/}
            <button  onClick={() => this.props.newValue()}>Dispatch action create new value in the store</button>
            <button  onClick={() => this.props.increment()}>Dispatch action increment</button>
            <button  onClick={() => this.props.decrement()}>Dispatch action decrement</button>
            <button  onClick={() => this.classMod()}>State Modification</button>
            <button  onClick={() => pepe()}>Modificación Global variable</button>
            
            
        </div>
        );    
    

    }

}
export default connect(mapStateToProps, {increment,decrement,newValue})(ClassDemos)
//export default ClassDemos