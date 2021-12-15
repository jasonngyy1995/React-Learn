import Expense from "./components/Expenses/Expense";

// = function() {}
const App = () => {
  // if in regular javascript
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);

  const expenses = [
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

  return (
    // create the key of props as "items", to be called in other components
    <Expense items={expenses}></Expense>
  );
}

export default App;
