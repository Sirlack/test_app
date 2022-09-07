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

  export default increment
  export  {increment,decrement}
  