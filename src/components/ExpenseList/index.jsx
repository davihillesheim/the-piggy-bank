import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, categories }) => {

  // if (expenses) {
  //   console.log(expenses)
  // } else {
  //   console.log('fucking hell')
  // }

  return (
    <ul>
      {(expenses && categories) &&
        expenses.map(expense =>
          <li key={expense.id} className='expense-content'>
            <div>
              {expense.name}
            </div>
            {expense.amount}
          </li>
        )}
    </ul>
  )
}

export default ExpenseList;
