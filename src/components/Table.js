import React from 'react'

const headingArray = ['State/UT', 'Confirmed', 'Active', 'Recovered', 'Deaths']

const Table = ({ tableStats }) => {
   console.log(tableStats);
   return (
      <section className="table">
         <div className="table-headings">
            {
               headingArray.map((heading, index) => {
                  return <div key={index}>{heading}</div>
               })
            }
         </div>
         <div className="table-stats">
            {
               tableStats && tableStats.map((stat) => {
                  return <div className="zz">
                     <span>{stat.state}</span>
                     <span>{stat.confirmed}</span>
                     <span>{stat.active}</span>
                     <span>{stat.recovered}</span>
                     <span>{stat.deaths}</span>
                  </div>
               })
            }
         </div>
      </section>
   )
}

export { Table as default }