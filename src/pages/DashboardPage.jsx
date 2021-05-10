import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <p>{`Hello, ${localStorage.getItem('loggedUser')}`}</p>
    </div>
  )
}

export default DashboardPage
