import "./Expense.css";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import React, { useState } from 'react';

/* For condition check, apart from ? : syntax, && can be used to
  returns the part after the AND operator if the first condition is met 
  e.g. i > 0 && a = 1 */ 

const Expense = (props) => {
  // 2020 as default year
  const [selectedYear, setYear] = useState("2022");

  const saveSelectedYear = (year) => {
    setYear(year);
  }

  const yearFilteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  }); 

  let expensesContent = <p>No expense found.</p>;

  if (yearFilteredExpenses.length > 0)
  {
    expensesContent = yearFilteredExpenses.map((expense) => (
      <ExpenseItem
        // should always add a key when mapping out a list, so React can uniquely identify all items and aware which item needed to be replaced
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onSaveSelectedYear={saveSelectedYear}/>
          {expensesContent}
      </Card>
    </div> 
  );
}

export default Expense;

