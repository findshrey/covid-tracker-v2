import React, { useState, useEffect } from "react"

import { API_DOMAIN_TIMESERIES } from "../data/constants"
import { formatChartDate } from "../utils/commonFunctions"
import Chart from "./Chart"
import TimeSeriesHead from "./TimeSeriesHead"
import useHttp from "../hooks/useHttp"

// Filter data using stateCode and range
const filterData = (data, { stateCode, range }) => {
   if (!data?.[stateCode]?.dates) {
      return { dates: [], stats: [] }
   }

   // Datewise state's data
   const stateData = data[stateCode].dates

   // Extract dates within range
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
   const { isLoading, error, sendRequest: fetchData } = useHttp()

   // Fetch statewise (daily) data
   useEffect(() => {
      fetchData({ url: API_DOMAIN_TIMESERIES }, setTimeSeriesData)
   }, [fetchData])

   // Set stateCode/ range
   const handleOptions = (option, value) => {
      setOptions({ ...options, [option]: value })
   }

   const filteredData = filterData(timeSeriesData, options)

   return (
      <section className="time-series">
         {isLoading && <p>Loading...</p>}
         {!isLoading && error && <p>{error}</p>}
         {!isLoading && !error && Object.keys(timeSeriesData).length === 0 && (
            <p>Found no items to show.</p>
         )}
         {!isLoading && Object.keys(timeSeriesData).length > 0 && (
            <>
               <TimeSeriesHead handleOptions={handleOptions} />
               <div className="time-series-charts">
                  {filteredData.stats.map((stat, index) => {
                     return (
                        <Chart
                           key={index}
                           dates={filteredData.dates}
                           stat={stat}
                        />
                     )
                  })}
               </div>
            </>
         )}
      </section>
   )
}

export { TimeSeries as default }
