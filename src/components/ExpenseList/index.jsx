import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, categories }) => {

  return (
    <ul>
      {(expenses && categories) && expenses.map(expense =>
        <li key={expense.id} className='expense-content'>
          <div>
            {categories[expense.category_id].name}
          </div>
          {expense.amount}
        </li>
      )}
    </ul>
  )
}

export default ExpenseList;
