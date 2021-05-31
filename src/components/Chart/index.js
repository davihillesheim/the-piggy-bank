import React, { useState, useEffect } from 'react'
import { Line as LineChart } from 'react-chartjs-2';

const Chart = ({ expenses }) => {

  const [expenseData, setExpenseData] = useState({});

  const sortDate = (key) => {
    return key.sort((a, b) => new Date(a) - new Date(b));
  }

  const chartData = canvas => {
    const ctx = canvas.getContext('2d');
    const key = Object.keys(expenseData);
    var gradientFill = ctx.createLinearGradient(
      0,
      0,
      0,
      250
    );
    gradientFill.addColorStop(0, 'rgba(0, 97, 215, 0.3)');
    gradientFill.addColorStop(1, 'rgba(0, 200, 255, 0)');
    return {
      labels: sortDate(key).map(date => date),
      datasets: [
        {
          label: 'Expenses',
          borderColor: '#3182ce',
          data: sortDate(key).map(date => expenseData[date]),
          backgroundColor: gradientFill
        }
      ]
    };
  };

  useEffect(() => {
    let dict = {}
    expenses.forEach(expense => {
      const dateObj = new Date(expense.date);
      const date = (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();

      if(dict[date]) {
        dict[date] += Number(expense.amount)
      } else {
        dict[date] = Number(expense.amount)
      }
    })
    console.log(dict)
    setExpenseData(dict)
  }, [expenses]);

  return (
    <LineChart
      height={100}
      data={chartData}
      options={{
        elements: {
          line: {
            tension: 0.3,
            borderWidth: 1.5
          },
          point: { radius: 0 }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                // callback: value => formatCurrency(value)
              }
            }
          ]
        }
      }}
    />
  )
}

export default Chart;
