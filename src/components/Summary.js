import React from 'react'

const Summary = ({ summary }) => {
   const statsArray = ['confirmed', 'active', 'recovered', 'deaths']

   return (
      <div className="summary">
         {
            statsArray.map((stat, index) => {
               return <SummaryBox key={index} summary={summary} stat={stat} />
            })
         }
      </div>
   )
}

const SummaryBox = ({ summary, stat }) => {
   return (
      <div className="summary-box">
         <h4>{stat}</h4>
         <span>{summary[`delta${stat}`]}</span>
         <p>{summary[stat]}</p>
      </div>
   )
}

export { Summary as default }