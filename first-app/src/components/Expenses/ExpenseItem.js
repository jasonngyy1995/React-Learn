// a component in React is just a Javascript function
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// * props -> pass data between components
const ExpenseItem = (props) => {
  
  // useState() can't be called in a nested function
  // first value: the current state value, second value: function to update the value
  // props.title will only be considered when the component runs for the first time
  // React always returns the latest state
  const [title, setTitle] = useState(props.title);

  // why instead of function ()? Because it will call too early and automatically when below jsx code runs
  const clickHandler = () => {
    setTitle('update');
    // 'update' shown but still print the previous value, since the setTitle() does not change the value right away
    console.log(title);
  }

  return (
    // toLocaleString() output date in human readable format
    // className instead of class which used in normal JS
    // <ExpenseDate></ExpenseDate> == <ExpenseDate/>  
    
    // Here, className becomes a key of props to pass css definition to Card componet
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>  
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
