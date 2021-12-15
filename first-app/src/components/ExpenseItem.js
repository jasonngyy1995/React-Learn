// a component in React is just a Javascript function

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

// * props -> pass data between components
function ExpenseItem(props) {

  return (
    // toLocaleString() output date in human readable format
    // className instead of class which used in normal JS
    // <ExpenseDate></ExpenseDate> == <ExpenseDate/>   
    <div className="expense-item">
      <ExpenseDate date={props.date}/>  
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
