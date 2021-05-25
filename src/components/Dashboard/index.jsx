import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardMetric from '../DashboardMetric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal';
import ExpenseList from '../ExpenseList';
import Graph from '../Graph';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/expenses/user', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: localStorage.getItem('loggedUser'),
        // todo change later
        not_before: "2021-01-01",
	      not_after: "2021-10-30"
      })
    })
    .then(response => response.json())
    .then(expenses => {
      setExpenses(expenses)}
      );
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const addExpense = (({expense}) => {
    setExpenses([...expenses, expense])
  })
  
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="metrics">
        {/* todo change it later */}
        <DashboardMetric title={"Budget"} value={"$25000,00"} />
        <DashboardMetric title={"Expenses"} value={"$14000,00"} />
        <DashboardMetric title={"Saved"} value={"$11000,00"} />
      </div>
      <button onClick={() => setIsModalVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} categories={categories} addExpense={addExpense}></Modal>}
      <div className="dashboard-content">
        <div className="expense-list">
          <ExpenseList expenses={expenses} categories={categories}/>
        </div>
        <div className="graph">
          <Graph expenses={expenses}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;