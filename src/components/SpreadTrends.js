import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SpreadHead from './SpreadHead'
import SpreadCharts from './SpreadCharts'

const SpreadTrends = () => {
   const [spreadData, setSpreadData] = useState({})
   const [chartData, setChartData] = useState([])

   // Fetch daily state data
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/v4/timeseries.json')

         setSpreadData(response.data)

         // handleCharts('DL')
      }

      getData()
   }, [])

   // Change graph statewise
   const handleCharts = (stateCode, spreadRange) => {
      // Daily data for a state
      const dates = spreadData[stateCode].dates

      const allDates = Object.keys(dates)

      // Dates for the last 7 days
      const showDate = allDates.slice(-spreadRange, allDates.length - 1)

      let statForTheDay = []
      showDate.forEach((date) => {
         statForTheDay.push(dates[date].delta ? dates[date].delta.confirmed : 0)
      })



      // console.log(showDate);

      setChartData([showDate, statForTheDay])
   }

   // console.log(chartData);

   return (
      <section className="spread-trends">
         <SpreadHead handleCharts={handleCharts} />
         <SpreadCharts date={chartData[0]} confirmed={chartData[1]} />
      </section>
   )
}

export { SpreadTrends as default }