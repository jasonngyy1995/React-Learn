import "./Expense.css";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onSaveSelectedYear={saveSelectedYear}/>
        <ExpensesChart expenses={yearFilteredExpenses}/>
        <ExpensesList items={yearFilteredExpenses}/>
      </Card>
    </div> 
  );
}

export default Expense;

