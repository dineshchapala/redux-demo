
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment ,  decrement} from './actions';
function App() {
const counter = useSelector(state =>state.counter);
const isLogged = useSelector(state =>state.isLogged);
const dispatch = useDispatch();


  return (
    <div>
      <h1>
    Items added to cart {counter}
    </h1>
   
    <button onClick= {()=>dispatch(increment())}>click to add</button>
    <button onClick= {()=>dispatch(decrement())}>click to remove</button>
    {isLogged? <h3>this is value</h3>: ''}
    </div>
  );
}

export default App;
