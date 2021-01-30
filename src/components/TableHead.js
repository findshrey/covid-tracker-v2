import React, { useState } from 'react'

import { SUMMARY_STATS } from './../data/constants'

const TableHead = ({ handleTableSort }) => {
   const [active, setActive] = useState(0)

   // Highlight active button
   const handleActive = (index) => {
      setActive(index)
   }

   return (
      <div className="table-head">
         {
            SUMMARY_STATS.map((stat, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => { handleActive(index); handleTableSort(undefined, stat.title) }}
                     className={active === index ? 'active table-btn' : 'table-btn'}
                     title={`Sort by ${stat.title}`}
                  >
                     {stat.icon}
                  </button>
               )
            })
         }
      </div>
   )
}

export { TableHead as default }