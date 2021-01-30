import React from 'react'

import { SUMMARY_STATS } from './../data/constants'
import { capitalize, formatNumber, getDateTime } from './../utils/commonFunctions'
import IconClock from './icons/IconClock'

const Summary = ({ summary }) => {
   return (
      <section className="summary">
         <div className="update-time">
            <IconClock />
            <h4 className="time">
               {summary.lastupdatedtime && `Last Updated on ${getDateTime(summary.lastupdatedtime)}`}
            </h4>
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
               summary[`delta${stat.title}`] && '+' + formatNumber(summary[`delta${stat.title}`])
            }
         </div>
         <div className="total-cases">{formatNumber(summary[stat.title])}</div>
         <i className="icon">{stat.icon}</i>
      </div>
   )
}

export { Summary as default }