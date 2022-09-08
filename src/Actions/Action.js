import React from 'react'

const increment = () => {
    return {      
      type: 'counter/increment'
    }
  }

  const decrement = () => {
    return {      
      type: 'counter/decrement'
    }
  }  

  const newValue = () => {
    return {      
      type: 'counter/newValue'
    }
  }  
  export default increment
  export  {increment,decrement,newValue}
  