import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Additions from '../Additions';
import {increment,decrement,newValue,addValue,showlocalcall} from '../../Actions/Action';
import store from '../../Store/Store';
import { connect } from 'react-redux'
//import { useSelector, useDispatch } from 'react-redux';
import '../../CSS/styles.module.css';
import Chart from '../Charts/Chart';
import Chart2 from '../Charts/Chart2';
import ExternalCalls from '../../Helper/ExternalCalls'; 


let g_test;
let value = false;
function funcGlobalTest(){
    g_test =  'Global function executed';
}
const mapStateToProps = state => {
    return { 
        value: state.parent.value, externalPayload: state.parent.externalPayload, localPayload: state.parent.localPayload };
  };
class ClassDemos extends React.Component{


    
    classMod(){
        this.setState({name: this.props.value,  nameStore : store.getState().parent.value});
    }
    constructor(props){
        super(props);
        this.state={
            name: props.value,
            nameStore : store.getState().parent.value,        
        }
    }
    setVis(){
        value = true;
    }

    async callLocalApi(){
        fetch('http://localhost:8080/test/entity1')
        .then(response => response.json())
        .then(data => {
            this.props.showlocalcall(data);
        })
        
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
            <h1>Hello props.value: {this.props.value}</h1>
            <h1>Hello state name: {this.state.name}</h1>
            <h1>Hello state nameStore: {this.state.nameStore}</h1>            
            <h1>Show props local call: {this.props.localPayload && this.props.localPayload.name}</h1>            
            <h1>Hello global variable: {g_test}</h1>
            
            <button class="btn btn-primary" onClick={() => this.props.newValue()}>Dispatch action create new value in the store</button>
            <button class="btn btn-primary" onClick={() => this.props.increment()}>Dispatch action increment</button>
            <button class="btn btn-primary" onClick={() => this.props.decrement()}>Dispatch action decrement</button>
            <button class="btn btn-primary" onClick={() => this.classMod()}>State Class Modification</button>
            <button class="btn btn-primary" onClick={() => funcGlobalTest()}>Modificación Global variable</button>
            <button class="btn btn-primary" onClick={() => this.callApi()}>Add value in the store from external API</button>            
            <button class="btn btn-primary" onClick={() => ExternalCalls.callLocalApi(this.props.showlocalcall)}>Call local api</button>            

            <Chart></Chart>            
            <Chart2 data={this.props.externalPayload}></Chart2>
            
            
            
            
        </div>
        );    
    

    }

}
export default connect(mapStateToProps, {increment,decrement,newValue,addValue,showlocalcall})(ClassDemos)
//export default ClassDemos