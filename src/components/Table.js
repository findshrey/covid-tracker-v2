import React from 'react'

import { TABLE_HEADINGS } from './../data/constants'
import { formatNumber } from './../utils/commonFunctions'

const Table = ({ tableStats }) => {
   return (
      <section className="table">
         <div className="table-headings">
            {
               TABLE_HEADINGS.map((heading, index) => {
                  return <div className="cell bold" key={index}>{heading}</div>
               })
            }
         </div>
         <div className="table-stats">
            {
               tableStats && tableStats.map((stat, index) => {
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
      </section>
   )
}

export { Table as default }