import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './Header'
import Summary from './Summary'
import Vaccine from './Vaccine'
import TableHead from './TableHead'
import Table from './Table'
import Tested from './Tested'
import Footer from './Footer'


const CovidApp = () => {
   const [covidStats, setCovidStats] = useState({})
   const [sortedStats, setSortedStats] = useState([])

   // Fetch data from endpoint
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/data.json')

         setCovidStats(response.data)

         const statewiseStats = response.data.statewise
         handleTableSort(statewiseStats, 'confirmed')
      }

      getData()
   }, [])

   // Sort table stats by selected option
   const handleTableSort = (statesData = sortedStats, sortBy) => {
      let statesOnly = statesData.filter((el) => el.state !== 'Total' && el.state !== 'State Unassigned')

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

      setSortedStats(statesOnly)
   }

   // console.log(covidStats);

   return (
      <>
         <Header />
         <main>
            <div className="container">
               <Summary summary={Object.keys(covidStats).length > 0 && covidStats.statewise[0]} />
               <div className="statistics">
                  <div className="stats-left">
                     {covidStats.tested && <Vaccine vaccine={covidStats.tested} />}
                     <TableHead handleTableSort={handleTableSort} />
                     <Table sortedStats={sortedStats} />
                  </div>
                  <div className="stats-right">
                     {covidStats.tested && <Tested tested={covidStats.tested} />}
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   )
}

export { CovidApp as default }