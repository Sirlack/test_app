import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
class SelectSharing extends Component{
    render(){
        return(
        
        <div class="full-height">
            
                <div class="row" id="full-height">               
                    <div class="col-md-2" id="lat-izq">
                    </div>
                    <div class="col-md-8" id="cent"> 
                        <div class="row align-items-center" id="pepe"> 
                        <div class="row">                                              
                                <div  class="col-md-4">
                                    <h3>label 1</h3>                                            
                                    <input type="text" class="form-control" id="usr"/>
                                </div> 
                                <div  class="col-md-4">
                                    <h3>label 1</h3>
                                    <input type="text" class="form-control" id="usr"/>
                                </div>                        
                                <div  class="col-md-4">                        
                                    <h3>label 1</h3>
                                    <input type="text" class="form-control" id="usr"/>                                                 
                                </div>
                            </div> 
                            </div>
                        </div>                                               
                    <div class="col-md-2" id="lat-der">                        
                    </div>
                </div>
                
            
            
        </div>
        )
    }
}
export default SelectSharing