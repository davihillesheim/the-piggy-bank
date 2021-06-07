import React, { useEffect, useState } from 'react';
import './ExpenseList.css';
import { dayMonthYear } from '../../utils';

const ExpenseList = ({ expenses, categories, setExpenses }) => {

  const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  const [dataAvailable, setDataAvailable] = useState();

  const deleteExpense = (id) => {
    fetch('http://localhost:3001/delete-transaction', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        expense_id: parseInt(id)
      })
    }).then(response => response.json()).then(deleted => {
      setExpenses(expenses.filter(x => x.id !== deleted.expense_id));
    })
  }

  useEffect(() => {
    const expensesExist = (expenses.length > 0);
    const categoriesExist = (categories.length > 0);

    setDataAvailable(expensesExist && categoriesExist)
  }, [expenses.length, categories.length])

  return (
    <ul className={!dataAvailable ? 'no-expenses' : ''}>
      {dataAvailable ?
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
        ) :
        <p>No expenses in this month yet.</p>
      }
    </ul>
  )
}

export default ExpenseList;
