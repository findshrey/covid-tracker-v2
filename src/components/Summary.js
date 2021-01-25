import React from 'react'

const Summary = ({ summary }) => {
   const aa = ['active', 'deaths', 'recovered', 'confirmed']

   return (
      <div className="summary">
         {
            aa.map((a) => {
               return <SummaryBox a={a} summary={summary} />
            })
         }
      </div>
   )
}

const SummaryBox = ({ a, summary }) => {
   return (
      <div className="summary-box">
         <h1>{a}</h1>
         <p>{summary[`delta${a}`]}</p>
         <p>{summary[a]}</p>
      </div>
   )
}

export { Summary as default }