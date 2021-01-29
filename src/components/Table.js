import React from 'react'

import { TABLE_HEADINGS } from './../data/constants'
import { formatNumber } from './../utils/commonFunctions'

// Sort table stats in descending order
const sort = (stats, sortBy) => {
   if (sortBy) {
      return stats.sort((a, b) => {
         if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
            return 1
         } else if (parseInt(b[sortBy]) < parseInt(a[sortBy])) {
            return -1
         } else {
            return 0
         }
      })
   }
}

const Table = ({ stateStats = [] }) => {
   let tableStats = stateStats.filter((el) => el.state !== 'Total' && el.state !== 'State Unassigned')
   tableStats = sort(tableStats, 'confirmed')

   return (
      <section className="table">
         <div className="table-inner">
            <div className="table-headings">
               {
                  TABLE_HEADINGS.map((heading, index) => {
                     return <div className="cell bold" key={index}>{heading}</div>
                  })
               }
            </div>
            <div className="table-stats">
               {
                  tableStats.map((stat, index) => {
                     return <div key={index} className="table-row">
                        <span className="cell bold">{stat.state}</span>
                        <span className="cell">{formatNumber(stat.confirmed)}</span>
                        <span className="cell">{formatNumber(stat.active)}</span>
                        <span className="cell">{formatNumber(stat.recovered)}</span>
                        <span className="cell">{formatNumber(stat.deaths)}</span>
                     </div>
                  })
               }
            </div>
         </div>
      </section>
   )
}

export { Table as default }