import React from 'react'

import { SUMMARY_STATS } from './../data/constants'
import { capitalize, formatNumber, getDate } from './../utils/commonFunctions'

const Summary = ({ summary }) => {
   return (
      <section className="summary">
         <div className="updated-at">
            {summary.lastupdatedtime && getDate(summary.lastupdatedtime)} IST
         </div>
         <div className="summary-inner">
            {
               SUMMARY_STATS.map((stat, index) => {
                  return (
                     <SummaryBox
                        key={index}
                        summary={summary}
                        stat={stat}
                     />
                  )
               })
            }
         </div>
      </section>
   )
}

const SummaryBox = ({ summary, stat }) => {
   return (
      <div className="summary-box">
         <h4 className="title">{capitalize(stat.title)}</h4>
         <div className="new-cases">
            {
               summary[`delta${stat.title}`] && '+ ' + formatNumber(summary[`delta${stat.title}`])
            }
         </div>
         <p className="total-cases">{formatNumber(summary[stat.title])}</p>
         <i className="icon">{stat.icon}</i>
      </div>
   )
}

export { Summary as default }