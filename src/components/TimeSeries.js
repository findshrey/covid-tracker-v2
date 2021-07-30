import React, { useState, useEffect } from "react"
import axios from "axios"

import { formatChartDate } from "../utils/commonFunctions"
import Chart from "./Chart"
import TimeSeriesHead from "./TimeSeriesHead"

// Filter data using stateCode and range
const filterData = (data, { stateCode, range }) => {
   if (!data?.[stateCode]?.dates) {
      return { dates: [], stats: [] }
   }

   // Datewise state's data
   const stateData = data[stateCode].dates

   // Extract dates
   let stateDates = Object.keys(stateData)
   stateDates = stateDates.slice(-range)

   let confirmedData = []
   let activeData = []
   let recoveredData = []
   let deceasedData = []

   // Populate stats for each date
   stateDates.forEach((date) => {
      const delta = stateData[date].delta

      confirmedData.push(delta?.confirmed ?? 0)
      activeData.push(
         (delta?.confirmed ?? 0) -
            ((delta?.recovered ?? 0) + (delta?.deceased ?? 0))
      )
      recoveredData.push(delta?.recovered ?? 0)
      deceasedData.push(delta?.deceased ?? 0)
   })

   // Format date
   stateDates.forEach((date, index) => {
      stateDates[index] = formatChartDate(date)
   })

   return {
      dates: stateDates,
      stats: [
         { Confirmed: confirmedData },
         { Active: activeData },
         { Recovered: recoveredData },
         { Deceased: deceasedData },
      ],
   }
}

const TimeSeries = () => {
   const [timeSeriesData, setTimeSeriesData] = useState({})
   const [options, setOptions] = useState({ stateCode: "DL", range: 31 })

   // Fetch statewise daily data
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get(
            "https://api.covid19india.org/v4/timeseries.json"
         )

         setTimeSeriesData(response.data)
      }

      getData()
   }, [])

   // Set stateCode/ range
   const handleOptions = (option, value) => {
      setOptions({ ...options, [option]: value })
   }

   const filteredData = filterData(timeSeriesData, options)

   return (
      <section className="time-series">
         <TimeSeriesHead handleOptions={handleOptions} />
         <div className="time-series-charts">
            {filteredData.stats.map((stat, index) => {
               return (
                  <Chart key={index} dates={filteredData.dates} stats={stat} />
               )
            })}
         </div>
      </section>
   )
}

export { TimeSeries as default }
