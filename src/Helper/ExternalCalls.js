
class ExternalCalls {
 
    static async callLocalApi( localcall){
    fetch('http://localhost:8080/test/entity1')
    .then(response => response.json())
    .then(data => {
        localcall(data);
    })}
}   


export default ExternalCalls
