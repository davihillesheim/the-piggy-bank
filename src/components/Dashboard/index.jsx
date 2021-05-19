import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardMetric from '../DashboardMetric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  console.log(categories);

  useEffect(() => {
    fetch('http://localhost:3001/expenses/user', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: localStorage.getItem('loggedUser'),
        // will have two states for not before and not after that will be set by the user (will have the standard which is get this month and show only for this month)
        not_before: "2021-01-12",
	      not_after: "2021-10-13"
      })
    })
    .then(response => response.json())
    .then(data => setData(data));
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <div className="metrics">
        <DashboardMetric title={"Budget"} value={"$25000,00"} />
        <DashboardMetric title={"Expenses"} value={"$14000,00"} />
        <DashboardMetric title={"Saved"} value={"$11000,00"} />
      </div>
      <button onClick={() => setIsModalVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} categories={categories}><h2>children bitch</h2></Modal>}
      <div className="dashboard-content">
        <div className="expense-list">
          <p>Here will be the list</p>
        </div>
        <div className="graph">
          <p>Here will be the chart</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard;