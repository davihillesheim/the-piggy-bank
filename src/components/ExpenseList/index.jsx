import React from 'react';
import './ExpenseList.css';
import { dayMonthYear } from '../../utils';

const ExpenseList = ({ expenses, categories, setExpenses }) => {

  const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

  const deleteExpense = (id) => {
    fetch('http://localhost:3001/delete-transaction', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        expense_id: parseInt(id)
      })
    }).then(response => response.json()).then(deleted => {
      setExpenses(expenses.filter(x => x.id != deleted.expense_id));
    })
  }

  return (
    <ul>
      {(expenses && categories) &&
        sortedExpenses.map(expense =>
          <li key={expense.id} className='expense-content'>
            <div className="expense-wrap">
              <div className="expense-title">
                <span>
                  {dayMonthYear(expense.date)}
                </span>
                <span>
                  {expense.name}
                </span>
              </div>
              <div className="expense-amount">
                <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
                <span>{expense.amount}</span>
              </div>
            </div>
          </li>
        )}
    </ul>
  )
}

export default ExpenseList;
