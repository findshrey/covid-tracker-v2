import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { checkNum } from './../utils/commonFunctions'
import SpreadHead from './SpreadHead'
import SpreadCharts from './SpreadCharts'

const SpreadTrends = () => {
   const [spreadData, setSpreadData] = useState({})
   const [chartData, setChartData] = useState([])

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

      setChartData([stateDates, confirmedData, recoveredData, deceasedData])
   }

   console.log(chartData);

   return (
      <section className="spread-trends">
         <SpreadHead handleCharts={handleCharts} />
         <SpreadCharts
            date={chartData[0]}
            confirmed={chartData[1]}
            recovered={chartData[2]}
            deceased={chartData[3]}
         />
      </section>
   )
}

export { SpreadTrends as default }