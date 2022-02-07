import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (expenseInput) => {
    const expenseData = {
      ...expenseInput,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const addNewSubmitHandler = () => {
    setIsEditing(true);
  }

  const cancelHandler = () => {
    setIsEditing(false);
  }
    
    return (
      <div className="new-expense">
        {/* when isEditing is false */}
        {!isEditing && <button onClick={addNewSubmitHandler}>Add New Expense</button>}
        {/* onSaveExpenseData points to the function saveExpenseDataHandler, as an input being passed to ExpenseForm */}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
      </div>
    );
};

export default NewExpense;
