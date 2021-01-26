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
         {
            statsArray.map((stat, index) => {
               return <SummaryBox key={index} summary={summary} stat={stat} />
            })
         }
      </section>
   )
}

const SummaryBox = ({ summary, stat }) => {
   return (
      <div className="summary-box">
         <h4>{stat.title === 'deaths' ? 'deceased' : stat.title}</h4>
         {
            summary[`delta${stat.title}`] && <span>+{summary[`delta${stat.title}`]}</span>
         }
         <p>{summary[stat.title]}</p>
         {stat.icon}
      </div>
   )
}

export { Summary as default }