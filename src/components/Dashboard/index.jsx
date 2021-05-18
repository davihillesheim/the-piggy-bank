import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardMetric from '../DashboardMetric';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/expenses/user', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: localStorage.getItem('loggedUser'),
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