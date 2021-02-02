import React from 'react'
import { defaults, Bar } from 'react-chartjs-2'

defaults.global.defaultFontColor = 'rgba(226, 48, 40, 1)'
defaults.global.defaultFontFamily = 'Montserrat'
defaults.global.defaultFontSize = 10
defaults.global.defaultFontStyle = 600

const SpreadCharts = ({ dates, confirmed, recovered, deceased }) => {
   const confirmedData = {
      labels: dates,
      datasets: [
         {
            label: 'Confirmed',
            data: confirmed,
            backgroundColor: 'rgba(226, 48, 40, 1)',
            borderColor: 'rgba(226, 48, 40, 1)',
            borderWidth: 1
         },
      ],
   }

   const options = {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
         display: true,
         align: 'start',
         // fullWidth: true,
         labels: {
            boxWidth: 0,
            fontSize: 18,
            // padding: 5
         }
      },
      scales: {
         xAxes: [
            {
               gridLines: {
                  color: 'rgba(226, 48, 40, 1)',
                  drawOnChartArea: false,
                  tickMarkLength: 5,
                  zeroLineColor: 'rgba(226, 48, 40, 1)',
               },
               ticks: {
                  beginAtZero: true,
                  padding: 5,
                  maxTicksLimit: 5,
                  maxRotation: 0,
                  minRotation: 0
               },
               categoryPercentage: 1.0,
               // barPercentage: 1.0
            }
         ],
         yAxes: [
            {
               position: 'right',
               gridLines: {
                  color: 'rgba(226, 48, 40, 1)',
                  drawOnChartArea: false,
                  tickMarkLength: 5,
                  zeroLineColor: 'rgba(226, 48, 40, 1)',
               },
               ticks: {
                  beginAtZero: true,
                  callback: function (label, index, labels) {
                     if (label > 999 || label < -999) {
                        return label / 1000 + 'k'
                     } else {
                        return label
                     }
                  },
                  padding: 5,
                  stepSize: 5000
               }
               // scaleLabel: {
               //    display: true,
               //    labelString: '1k = 1000'
               // }
            }
         ]
      },
      layout: {
         padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
         }
      }
   }

   return (
      <div className="spread-charts">
         <div className="chart-wrapper">
            <Bar data={confirmedData} options={options} />
         </div>
      </div>
   )
}

export { SpreadCharts as default }