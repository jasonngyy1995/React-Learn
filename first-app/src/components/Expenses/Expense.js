import "./Expense.css";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import React, { useState } from 'react';

const Expense = (props) => {
  // 2020 as default year
  const [selectedYear, setYear] = useState("2020");

  const saveSelectedYear = (year) => {
    setYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onSaveSelectedYear={saveSelectedYear}/>
        {props.items.map((expense) => <ExpenseItem
          // should always add a key when mapping out a list, so React can uniquely identify all items and aware which item needed to be replaced
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
      </Card>
    </div> 
  );
}

export default Expense;
