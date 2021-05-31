import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, categories }) => {

  const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ul>
      {(expenses && categories) &&
        sortedExpenses.map(expense =>
          <li key={expense.id} className='expense-content'>
            <div className="expense-wrap">
              <div className="expense-title">
                <span>
                  {expense.date}
                </span>
                <span>
                  {expense.name}
                </span>
              </div>
              <div className="expense-amount">
                <span>x</span>
                <span>{expense.amount}</span>
              </div>
            </div>
          </li>
        )}
    </ul>
  )
}

export default ExpenseList;
