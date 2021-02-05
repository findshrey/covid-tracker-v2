import React, { useState } from 'react'

import { SUMMARY_TITLES } from './../data/constants'

const TableHead = ({ handleSortOption }) => {
   const [activeBtn, setActiveBtn] = useState(0)

   return (
      <div className="table-head">
         {
            SUMMARY_TITLES.map((stat, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => { setActiveBtn(index); handleSortOption(stat.title) }}
                     className={index === activeBtn ? 'table-btn active' : 'table-btn'}
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