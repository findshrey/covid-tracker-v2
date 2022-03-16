import React, { useContext } from "react"

import { TABLE_HEADINGS } from "../data/constants"
import { formatNumber } from "../utils/commonFunctions"
import ThemeContext from "../context/ThemeContext"

const Table = ({ sortedStats }) => {
   const { themeClass } = useContext(ThemeContext)

   return (
      <div className="table">
         <div className="table-inner">
            <div className="table-headings">
               {TABLE_HEADINGS.map((heading, index) => {
                  return (
                     <div className={`cell bold ${themeClass}`} key={index}>
                        {heading}
                     </div>
                  )
               })}
            </div>
            <div className="table-stats">
               {sortedStats.map((stat, index) => {
                  return (
                     <div key={index} className="table-row">
                        <span className={`cell bold ${themeClass}`}>
                           {stat.state}
                        </span>
                        <span className={`cell ${themeClass}`}>
                           {formatNumber(stat.confirmed)}
                        </span>
                        <span className={`cell ${themeClass}`}>
                           {formatNumber(stat.active)}
                        </span>
                        <span className={`cell ${themeClass}`}>
                           {formatNumber(stat.recovered)}
                        </span>
                        <span className={`cell ${themeClass}`}>
                           {formatNumber(stat.deaths)}
                        </span>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export { Table as default }
