import React from 'react';
import './Dashboard.css';
import DashboardMetric from '../DashboardMetric';

const Dashboard = () => {
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