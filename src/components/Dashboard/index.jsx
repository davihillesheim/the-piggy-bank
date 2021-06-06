import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardMetric from '../DashboardMetric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal';
import ExpenseList from '../ExpenseList';
import Chart from '../Chart';
import DatePicker from 'react-datepicker';
import { getLastDayOfMonth } from '../../utils';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [total, setTotal] = useState(0);


  useEffect(() => {
    fetch('http://localhost:3001/expenses/user', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: localStorage.getItem('loggedUser'),
        not_before: startDate,
        not_after: getLastDayOfMonth(startDate)
      })
    })
      .then(response => response.json())
      .then(expenses => {
        setExpenses(expenses)
      }
      );
  }, [startDate, expenses])

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const addExpense = (({ expense }) => {
    setExpenses([...expenses, expense])
  })

  useEffect(() => {
    let sum = 0;
    expenses.forEach(expense => {
      sum += Number(expense.amount)
    });
    setTotal(sum);
  }, [expenses])

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="metrics">
        <DashboardMetric title={"Expenses"} value={total.toFixed(2)} />
      </div>
      <button onClick={() => setIsModalVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      <DatePicker
        selected={startDate}
        onChange={(date) => { 
          setStartDate(date)
        }}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
      />
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} categories={categories} addExpense={addExpense}></Modal>}
      <div className="dashboard-content">
        <div className="expense-list">
          <ExpenseList expenses={expenses} categories={categories} setExpenses={setExpenses} />
        </div>
        <div className="chart">
          <Chart expenses={expenses} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;