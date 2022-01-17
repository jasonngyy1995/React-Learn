import "./Expense.css";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import React, { useState } from 'react';

const Expense = (props) => {
  // 2020 as default year
  const [selectedYear, setYear] = useState("2020");

  const saveSelectedYear = (year) => {
    console.log(year);
    setYear(year);
  }

  return (
    <div>
      <ExpenseFilter selected={selectedYear} onSaveSelectedYear={saveSelectedYear}/>
      <Card className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div> 
  );
}

export default Expense;
