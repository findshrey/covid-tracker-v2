import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './Header'
import Summary from './Summary'
import Vaccine from './Vaccine'
import TableHead from './TableHead'
import Table from './Table'
import Tested from './Tested'
import TimeSeries from './TimeSeries'
import Footer from './Footer'
import Spinner from './Spinner'

// Sort table data by selected option
const sortData = (data, sortBy) => {
   if (!data) {
      return []
   }

   let statesOnly = data.filter((el) => el.state !== 'Total' && el.state !== 'State Unassigned')

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

const CovidApp = () => {
   const [covidStats, setCovidStats] = useState({})
   const [sortBy, setSortBy] = useState('confirmed')

   // Fetch data from endpoint
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/data.json')

         setCovidStats(response.data)
      }

      getData()
   }, [])

   // Set sort option
   const handleSortOption = (option) => {
      setSortBy(option)
   }

   const sortedData = sortData(covidStats.statewise, sortBy)

   return (
      <>
         <Header />
         <main className="content-wrapper">
            <div className="container">
               {
                  Object.keys(covidStats).length > 0 ? (
                     <>
                        <Summary summary={covidStats.statewise[0]} />
                        <div className="statistics">
                           <div className="stats-left">
                              <Vaccine vaccine={covidStats.tested} />
                              <TableHead handleSortOption={handleSortOption} />
                              <Table sortedStats={sortedData} />
                           </div>
                           <div className="stats-right">
                              <Tested tested={covidStats.tested} />
                              <TimeSeries />
                           </div>
                        </div>
                     </>
                  ) : (
                        <Spinner />
                     )
               }
            </div>
         </main>
         <Footer />
      </>
   )
}

export { CovidApp as default }