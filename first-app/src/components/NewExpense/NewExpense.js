import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseInput) => {
    const expenseData = {
      ...expenseInput,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData points to the function saveExpenseDataHandler, as an input being passed to ExpenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
