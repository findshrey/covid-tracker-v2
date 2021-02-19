import React from 'react'

import { SUMMARY_TITLES } from './../data/constants'
import { capitalize, formatNumber, getDateTime } from './../utils/commonFunctions'
import IconClock from './icons/IconClock'

const Summary = ({ summary }) => {
   return (
      <section className="summary">
         <div className="update-time">
            <IconClock />
            <div className="time">
               {`Last Updated on ${getDateTime(summary.lastupdatedtime)}`}
            </div>
         </div>
         <div className="summary-inner">
            {
               SUMMARY_TITLES.map((stat, index) => {
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
         <h3 className="title">{capitalize(stat.title)}</h3>
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