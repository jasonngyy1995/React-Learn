import React, { useState } from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// = function() {}
const App = () => {
  // if in regular javascript
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // update the state based on the older snapshot of the same states
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      // spread operator, add expense to prevExpenses array
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/*create the key of props as "items", to be called in other components*/}
      <Expense items={expenses}></Expense>
    </div>
  );
};

export default App;
