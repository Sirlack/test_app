import React from 'react'

async function callLocalApi(){
    fetch('http://localhost:8080/test/entity1')
    .then(response => response.json())
    .then(data => {
        this.props.showlocalcall(data);
    })}

export default callLocalApi