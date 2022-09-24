import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Additions from './Additions';
import {increment,decrement,newValue,addValue} from '../Actions/Action';
import store from '../Store/Store';
import { connect } from 'react-redux'
//import { useSelector, useDispatch } from 'react-redux';
import '../CSS/styles.module.css';
import Chart from './Chart';
import Chart2 from './Chart2';


let popo;
let value = false;
function pepe(){
    //popo =  store.getState().value;
    popo =  'Jolines';
}
const mapStateToProps = state => {
    return { Name: state.parent.children2, storeNewField: state.parent.children3, externalPayload: state.parent.children4 };
  };
class ClassDemos extends React.Component{


    
    classMod(){
        this.setState({name: 'Clasical',  nameStore : 'Music'/*store.getState().value*/});
    }
    constructor(props){
        super(props);
        this.state={
            name: props.Name,
            nameStore : store.getState().parent.children1,        
        }
    }
    setVis(){
        value = true;
    }

    async callApi(){
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=I64PI21AOKWDAHSG')
        .then(response => response.json())
        .then(data =>{             
           
            let Response;
            //CHART2
            Response = {value1:new Array(),value2:new Array(),time:new Array()};
            const objectArrayData = Object.entries(data["Monthly Adjusted Time Series"]);
            objectArrayData.forEach(
                time => {
                    Response.value1.push( time[1]["1. open"]);
                    Response.value2.push( time[1]["1. open"]);
                    Response.time.push(time[0]);
    
                }
                );
            //CHART      
            const objectArray = Object.entries(data["Monthly Adjusted Time Series"]);
            let objectArray2 = objectArray.map(
                function(value){ 
                    return {time: value[0],value: value[1]["1. open"]}}
                );
           Response.chart =  objectArray2;
           this.props.addValue(Response);
        });
    } 

    
    render(){
        
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
            <button class="btn btn-primary" onClick={() => this.props.increment()}>Dispatch action increment</button>
            <button class="btn btn-primary" onClick={() => this.props.decrement()}>Dispatch action decrement</button>
            <button class="btn btn-primary" onClick={() => this.classMod()}>State Modification</button>
            <button class="btn btn-primary" onClick={() => pepe()}>Modificación Global variable</button>
            <button class="btn btn-primary" onClick={() => this.callApi()}>Add value in the store from external API</button>            
            {/*button class="btn btn-primary" onClick={() => this.setVis()}>Set visible graf.</button>*/}
            {/*<h1>External payload:  {this.props.externalPayload ? JSON.stringify(this.props.externalPayload) : ""}</h1> */}
            <Chart></Chart>
            
            <Chart2 data={this.props.externalPayload}></Chart2>
            
            
            
            
        </div>
        );    
    

    }

}
export default connect(mapStateToProps, {increment,decrement,newValue,addValue})(ClassDemos)
//export default ClassDemos