import React from 'react'

const headingArray = ['State/UT', 'Confirmed', 'Active', 'Recovered', 'Deaths']

const Table = ({ tableStats }) => {
   // console.log(tableStats);
   return (
      <section className="table">
         <div className="table-headings">
            {
               headingArray.map((heading, index) => {
                  return <div className="cell" key={index}>{heading}</div>
               })
            }
         </div>
         <div className="table-stats">
            {
               tableStats && tableStats.map((stat, index) => {
                  return <div key={index} className="zz">
                     <span className="cell">{stat.state}</span>
                     <span className="cell">{stat.confirmed}</span>
                     <span className="cell">{stat.active}</span>
                     <span className="cell">{stat.recovered}</span>
                     <span className="cell">{stat.deaths}</span>
                  </div>
               })
            }
         </div>
      </section>
   )
}

export { Table as default }