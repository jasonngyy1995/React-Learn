import React, { useState } from "react";
import "./ExpenseForm.css";
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  var currentDate = new Date();
  var max_date = currentDate.toLocaleDateString("zh-Hans-CN");
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDay();
  var min_date = year + 1 + "/" + month + "" / +day;

  const [enteredItem, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    // to prevent web browser and server reload when submit button clicked
    event.preventDefault();

    const expenseItem = {
      title: enteredItem,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // pass up to parent component "NewExpense"
    props.onSaveExpenseData(expenseItem);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredItem}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="num"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={min_date}
            max={max_date}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// --------------------------

// // multiple state into one state
// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
//   });

//   const titleChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredTitle: event.target.value
//     })
//     // safer way to guarantee always updating the latest state
//     // setUserInput((prevState) => {
//     //     return { ...prevState, enteredTitle: event.target.value };
//     // })
//   };

//   const amountChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredAmount: event.target.value
//     })
//   };

//   const dateChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredDate: event.target.value
//     })
//   };
