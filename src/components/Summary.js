import React from 'react'
import IconConfirmed from './icons/IconConfirmed'
import IconActive from './icons/IconActive'
import IconRecovered from './icons/IconRecovered'
import IconDeceased from './icons/IconDeceased'

const statsArray = [
   {
      'title': 'confirmed',
      'icon': <IconConfirmed />
   },
   {
      'title': 'active',
      'icon': <IconActive />
   },
   {
      'title': 'recovered',
      'icon': <IconRecovered />
   },
   {
      'title': 'deaths',
      'icon': <IconDeceased />
   }
]

const Summary = ({ summary }) => {
   return (
      <section className="summary">
         <div className="updated-at">
            {summary.lastupdatedtime}
         </div>
         <div className="summary-inner">
            {
               statsArray.map((stat, index) => {
                  return <SummaryBox key={index} summary={summary} stat={stat} />
               })
            }
         </div>
      </section>
   )
}

const SummaryBox = ({ summary, stat }) => {
   return (
      <div className="summary-box">
         <h4>{stat.title}</h4>
         {stat.icon}

         <p>{summary[stat.title]}</p>
         {
            summary[`delta${stat.title}`] && <span>+{summary[`delta${stat.title}`]}</span>
         }
      </div>
   )
}

export { Summary as default }