import React from 'react'
import { defaults, Bar } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Fira Sans'
defaults.global.defaultFontSize = 10
defaults.global.defaultFontStyle = 600
defaults.global.datasets.bar.categoryPercentage = 1.0

const Chart = ({ dates, stats }) => {
   const chartLabel = Object.keys(stats)[0]
   let chartColor

   if (chartLabel === 'Confirmed') {
      chartColor = '#e85b55'
   } else if (chartLabel === 'Recovered') {
      chartColor = '#2bb54b'
   } else if (chartLabel === 'Deceased') {
      chartColor = '#7d868e'
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
      <div className="chart-wrapper">
         <Bar data={chartData} options={options} />
      </div>
   )
}

export { Chart as default }