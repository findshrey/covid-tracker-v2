import React from 'react'
import { defaults, Bar } from 'react-chartjs-2'

const SpreadCharts = ({ dates, datasetData }) => {
   const label = Object.keys(datasetData)[0]
   let colorPallet

   if (label === 'Confirmed') {
      colorPallet = '#e85b55'
   } else if (label === 'Recovered') {
      colorPallet = '#2bb54b'
   } else if (label === 'Deceased') {
      colorPallet = '#7d868e'
   }

   // defaults.global.defaultFontColor = colorPallet
   defaults.global.defaultFontFamily = 'Fira Sans'
   defaults.global.defaultFontSize = 10
   defaults.global.defaultFontStyle = 600
   defaults.global.datasets.bar.categoryPercentage = 1.0;
   // defaults.global.datasets.bar.barPercentage = 1.0;

   const confirmedData = {
      labels: dates,
      datasets: [
         {
            label: label,
            data: datasetData[label],
            backgroundColor: colorPallet,
            borderColor: colorPallet,
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
            fontColor: colorPallet,
            fontSize: 15,
            // padding: 5
         }
      },
      scales: {
         xAxes: [
            {
               gridLines: {
                  color: colorPallet,
                  drawOnChartArea: false,
                  tickMarkLength: 5,
                  zeroLineColor: colorPallet,
                  lineWidth: 2
               },
               ticks: {
                  beginAtZero: true,
                  fontColor: colorPallet,
                  padding: 5,
                  maxTicksLimit: 5,
                  maxRotation: 0,
                  minRotation: 0
               }
            }
         ],
         yAxes: [
            {
               position: 'right',
               gridLines: {
                  color: colorPallet,
                  drawOnChartArea: false,
                  tickMarkLength: 5,
                  zeroLineColor: colorPallet,
                  lineWidth: 2
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
                  fontColor: colorPallet,
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
      <div className="chart-wrapper">
         <Bar data={confirmedData} options={options} />
      </div>
   )
}

export { SpreadCharts as default }