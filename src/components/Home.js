import React, { useState, useEffect, useContext } from "react"

import { API_DOMAIN_ROOT } from "../data/constants"
import Spinner from "./Spinner"
import Summary from "./Summary"
import Table from "./Table"
import TableHead from "./TableHead"
import Tested from "./Tested"
import TimeSeries from "./TimeSeries"
import ThemeContext from "../context/ThemeContext"
import Vaccine from "./Vaccine"
import useHttp from "../hooks/useHttp"

// Sort table data by selected option
const sortData = (data, sortBy) => {
   if (!data) {
      return []
   }

   let statesOnly = data.filter(
      (el) => el.state !== "Total" && el.state !== "State Unassigned"
   )

   if (sortBy) {
      statesOnly = statesOnly.sort((a, b) => {
         if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
            return 1
         } else if (parseInt(b[sortBy]) < parseInt(a[sortBy])) {
            return -1
         } else {
            return 0
         }
      })
   }

   return statesOnly
}

const Home = () => {
   const [covidStats, setCovidStats] = useState({})
   const [sortBy, setSortBy] = useState("confirmed")
   const { themeClass } = useContext(ThemeContext)
   const { isLoading, error, sendRequest: fetchData } = useHttp()

   // Fetch data from endpoint
   useEffect(() => {
      fetchData({ url: API_DOMAIN_ROOT }, setCovidStats)
   }, [fetchData])

   // Set sort option
   const handleSortOption = (option) => {
      setSortBy(option)
   }

   const sortedData = sortData(covidStats.statewise, sortBy)

   return (
      <main className={`home ${themeClass}`}>
         <div className="container">
            {isLoading && <Spinner />}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && Object.keys(covidStats).length === 0 && (
               <p>Found no data to show.</p>
            )}
            {!isLoading && Object.keys(covidStats).length > 0 && (
               <>
                  <Summary summary={covidStats.statewise[0]} />
                  <div className="statistics">
                     <section className="stats-left">
                        <Vaccine vaccine={covidStats.tested} />
                        <TableHead handleSortOption={handleSortOption} />
                        <Table sortedStats={sortedData} />
                     </section>
                     <section className="stats-right">
                        <Tested tested={covidStats.tested} />
                        <TimeSeries />
                     </section>
                  </div>
               </>
            )}
         </div>
      </main>
   )
}

export { Home as default }
