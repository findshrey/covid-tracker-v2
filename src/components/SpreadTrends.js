import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { checkNum } from './../utils/commonFunctions'
import { formatChartDate } from './../utils/commonFunctions'
import SpreadHead from './SpreadHead'
import Chart from './Chart'

// Update graph state and rangewise
const handleCharts = (data, { stateCode, range }) => {
   if (!data?.[stateCode]?.dates) {
      return [[], []];
   }

   // Datewise state data
   const stateData = data[stateCode].dates

   // Extract dates
   let stateDates = Object.keys(stateData)
   stateDates = stateDates.slice(-range)

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

   return [stateDates, [{ 'Confirmed': confirmedData }, { 'Recovered': recoveredData }, { 'Deceased': deceasedData }]]
}

const SpreadTrends = () => {
   const [spreadData, setSpreadData] = useState({})
   const [options, setOptions] = useState({ stateCode: 'DL', range: 30 })

   // Fetch statewise data
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/v4/timeseries.json')

         setSpreadData(response.data)
      }

      getData()
   }, [])

   const handleOptions = (type, value) => {
      setOptions({ ...options, [type]: value })
   }

   // console.log(spreadData);
   const aa = handleCharts(spreadData, options)
   const bb = aa[0]
   const cc = aa[1]

   return (
      <section className="spread-trends">
         <SpreadHead handleOptions={handleOptions} />
         <div className="spread-charts">
            {
               cc.map((stats, index) => {
                  return <Chart
                     key={index}
                     dates={bb}
                     stats={stats}
                  />
               })
            }
         </div>
      </section>
   )
}

export { SpreadTrends as default }