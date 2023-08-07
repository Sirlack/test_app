
class ExternalCalls {
 
    static async callLocalApi( localcall){
    fetch('http://localhost:8080/test/entity1')
    .then(response => response.json())
    .then(data => {
        localcall(data);
    })}

    static async callApi(addValue){
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
           addValue(Response);
        });
    }     
}   


export default ExternalCalls
