import React, { useState } from 'react'

import { SUMMARY_STATS } from './../data/constants'

const TableHead = ({ handleTableSort }) => {
   const [active, setActive] = useState(0)

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
                     onClick={() => { handleTableSort(stat.title); handleActive(index) }}
                     className={active === index ? 'active' : ''}
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