import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { checkNum } from './../utils/commonFunctions'
import { formatChartDate } from './../utils/commonFunctions'
import SpreadHead from './SpreadHead'
import Chart from './Chart'

const SpreadTrends = () => {
   const [spreadData, setSpreadData] = useState({})
   const [chartDates, setChartDates] = useState([])
   const [chartStats, setChartStats] = useState([])

   // Fetch statewise data
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/v4/timeseries.json')

         setSpreadData(response.data)
         // handleCharts('DL')
      }

      getData()
   }, [])

   // Update graph state and rangewise
   const handleCharts = (selectedState, spreadRange) => {
      // Datewise state data
      const stateData = spreadData[selectedState].dates

      // Extract dates
      let stateDates = Object.keys(stateData)
      stateDates = stateDates.slice(-spreadRange)

      let confirmedData = []
      // let activeData = []
      let recoveredData = []
      let deceasedData = []

      stateDates.forEach((date) => {
         const delta = stateData[date].delta

         if (delta) {
            confirmedData.push(delta.confirmed)
            // activeData.push(checkNum(delta.confirmed - (delta.recovered + delta.deceased)))
            recoveredData.push(delta.recovered)
            deceasedData.push(delta.deceased)
         }
      })

      // Format date
      stateDates.forEach((date, index) => {
         stateDates[index] = formatChartDate(date)
      })

      setChartDates(stateDates)
      setChartStats([
         { 'Confirmed': confirmedData },
         { 'Recovered': recoveredData },
         { 'Deceased': deceasedData }
      ])
   }

   // console.log(chartStats);

   return (
      <section className="spread-trends">
         <SpreadHead handleCharts={handleCharts} />
         <div className="spread-charts">
            {
               chartStats.map((stats, index) => {
                  return <Chart
                     key={index}
                     dates={chartDates}
                     stats={stats}
                  />
               })
            }
         </div>
      </section>
   )
}

export { SpreadTrends as default }