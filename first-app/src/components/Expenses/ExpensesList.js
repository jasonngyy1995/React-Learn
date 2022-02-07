import React, { useState } from 'react';
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';

// return TWO different results as two components change entirely based on different conditions
const Expenseslist = props => {
    if (props.items.length === 0)
    {
        return <h2 className='expense_list__fallback'>No expense found.</h2>;
    }

    return (
        <ul className='expense-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    // should always add a key when mapping out a list, so React can uniquely identify all items and aware which item needed to be replaced
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </ul>
    );
};

export default Expenseslist;