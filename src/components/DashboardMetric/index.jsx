import React from 'react';
import './DashboardMetric.css';

const DashboardMetric = ({ title, value, icon }) => {
  return (
    <div className="metric-card">
      <p className="metric-title">{title}</p>
      <p className="metric-value">{value}</p>
    </div>
  )
}

export default DashboardMetric;
