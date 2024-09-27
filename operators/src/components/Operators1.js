import React from 'react'

function operators() {
  let score=0;
  return (
    <div>
        <button type='button' onClick={()=>{
          let a=12%5;
          console.log(a)
         
            
        }}>Arithmatic Operators</button>
        <button type='button' onClick={()=>{
          score++;
          console.log(score)
         
            
        }}>Increment</button>
        <button type='button' onClick={()=>{
          score--;
          console.log(score)
         
            
        }}>decrement</button>
        <button type='button' onClick={()=>{
          let a =15;
          a +=10;
          a *=5;
          a -=2;
          console.log(a)
        }}>Assignment Operator</button>
        <button type='button' onClick={()=>{
          let telMarks = 35;
          console.log(telMarks==35);
          console.log(telMarks>=45);
          console.log(telMarks<=50);
          console.log(telMarks!=70);
          
        }}>Comparision Operator</button>
      
      
    </div>
  )
}

export default operators
