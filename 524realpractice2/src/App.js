import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function countInitial(){
  console.log('run function')
  return 4
}

function App() {

const [state, setCount]= useState({count: 4, theme: 'blue'})
const count=state.count
const theme=state.theme
//I put in 4 as a default state.
//second updates it.
//use the function version so that it only works one time. 

function decrementCount(){
  //setCount(prevCount=>prevCount-1)
  setCount(prevCount=prevCount-1)
  }
  //if I don't use prevCount it'll just be '4-1' over and over.


    
}

function incremetCount(){
  setCount(prevCount=>prevCount+1)
}


//React Hooks must be called in the exact same order.

return (
  <>
    <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <span>{theme}</span>
     <button onClick={incremetCount}>+</button>
     </>
  );
    
export default App;
