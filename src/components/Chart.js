import React, { useContext } from 'react'
import { defaults, Bar } from 'react-chartjs-2'

import ThemeContext from './../context/theme-context'

defaults.global.defaultFontFamily = 'Fira Sans'
defaults.global.defaultFontSize = 10
defaults.global.defaultFontStyle = 600
defaults.global.datasets.bar.categoryPercentage = 1.0

const Chart = ({ dates, stats }) => {
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   const chartLabel = Object.keys(stats)[0]
   let chartColor

   switch (chartLabel) {
      case 'Confirmed':
         chartColor = '#e23028'
         break;
      case 'Active':
         chartColor = '#007bff'
         break
      case 'Recovered':
         chartColor = '#28a745'
         break
      case 'Deceased':
         chartColor = '#6c757d'
         break
   }

   const chartData = {
      labels: dates, // Y-axis data
      datasets: [
         {
            label: chartLabel,
            data: stats[chartLabel], // X-axis data
            backgroundColor: chartColor,
            borderColor: chartColor,
            borderWidth: 1
         }
      ]
   }

   const options = {
      responsive: true,
      maintainAspectRatio: true,
      layout: {
         padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
         }
      },
      legend: {
         display: true,
         align: 'start',
         labels: {
            boxWidth: 0,
            fontColor: chartColor,
            fontSize: 15
         }
      },
      scales: {
         xAxes: [
            {
               gridLines: {
                  color: chartColor,
                  drawOnChartArea: false,
                  lineWidth: 2,
                  tickMarkLength: 5,
                  zeroLineColor: chartColor
               },
               ticks: {
                  beginAtZero: true,
                  fontColor: chartColor,
                  padding: 5,
                  maxRotation: 0,
                  minRotation: 0,
                  maxTicksLimit: 5
               }
            }
         ],
         yAxes: [
            {
               position: 'right',
               gridLines: {
                  color: chartColor,
                  drawOnChartArea: false,
                  lineWidth: 2,
                  tickMarkLength: 5,
                  zeroLineColor: chartColor
               },
               ticks: {
                  beginAtZero: true,
                  fontColor: chartColor,
                  padding: 5,
                  stepSize: 5000,
                  callback: function (label, index, labels) {
                     if (label > 999 || label < -999) {
                        return label / 1000 + 'k'
                     } else {
                        return label
                     }
                  }
               }
            }
         ]
      }
   }

   return (
      <div className={`chart-wrapper ${classUpdate}`}>
         <Bar data={chartData} options={options} />
      </div>
   )
}

export { Chart as default }