import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Summary from './Summary'
import Table from './Table'
import TableHead from './TableHead'
import IconShield from './icons/IconShield'

const Statistics = () => {
   const [covidStats, setCovidStats] = useState({})
   const [tableSort, setTableSort] = useState('confirmed')

   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/data.json')

         setCovidStats(response.data)
      }
      getData()
   }, [])

   const handleTableSort = (sortBy) => {
      setTableSort(sortBy)
   }

   // if (covidStats.tested) {
   //    console.log(covidStats.tested[covidStats.tested.length - 1].totaldosesadministered);
   // }

   return (
      <section className="statistics">
         <div className="container">
            <Summary
               summary={Object.keys(covidStats).length > 0 && covidStats.statewise[0]}
            />
            <div className="statistics-inner">
               <div className="stats-left">
                  {
                     covidStats.tested &&
                     <div className="vaccine">
                        <div className="vaccine-inner">
                           <IconShield />
                           <span>{covidStats.tested[covidStats.tested.length - 1].totaldosesadministered}</span>
                           vaccine doses administered
                        </div>
                     </div>
                  }
                  <TableHead handleTableSort={handleTableSort} />
                  <Table
                     stateStats={covidStats.statewise}
                     sortBy={tableSort}
                  />
               </div>
               <div className="stats-right">

               </div>
            </div>
         </div>
      </section>
   )
}

export { Statistics as default }