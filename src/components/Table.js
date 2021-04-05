import React, { useContext } from 'react'

import { TABLE_HEADINGS } from './../data/constants'
import { formatNumber } from './../utils/commonFunctions'
import ThemeContext from './../context/theme-context'

const Table = ({ sortedStats }) => {
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <div className="table">
         <div className="table-inner">
            <div className="table-headings">
               {
                  TABLE_HEADINGS.map((heading, index) => {
                     return <div className={`cell bold ${classUpdate}`} key={index}>{heading}</div>
                  })
               }
            </div>
            <div className="table-stats">
               {
                  sortedStats.map((stat, index) => {
                     return <div key={index} className="table-row">
                        <span className={`cell bold ${classUpdate}`}>{stat.state}</span>
                        <span className={`cell ${classUpdate}`}>{formatNumber(stat.confirmed)}</span>
                        <span className={`cell ${classUpdate}`}>{formatNumber(stat.active)}</span>
                        <span className={`cell ${classUpdate}`}>{formatNumber(stat.recovered)}</span>
                        <span className={`cell ${classUpdate}`}>{formatNumber(stat.deaths)}</span>
                     </div>
                  })
               }
            </div>
         </div>
      </div>
   )
}

export { Table as default }