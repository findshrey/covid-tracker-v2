import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Summary from './Summary'
import Table from './Table'

const Statistics = () => {
   const [covidStats, setCovidStats] = useState({})

   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/data.json')

         setCovidStats(response.data)
      }
      getData()
   }, [])

   // console.log(covidStats);

   return (
      <section className="statistics">
         <div className="container">
            <div className="stats-left">
               <Summary
                  summary={Object.keys(covidStats).length > 0 && covidStats.statewise[0]}
               />
               <Table
                  tableStats={Object.keys(covidStats).length > 0 && covidStats.statewise}
               />
            </div>
            <div className="stats-right">

            </div>
         </div>
      </section>
   )
}

export { Statistics as default }