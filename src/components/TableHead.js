import React, { useState, useContext } from 'react'

import { SUMMARY_TITLES } from './../data/constants'
import ThemeContext from '../context/ThemeContext'

const TableHead = ({ handleSortOption }) => {
   const [activeBtn, setActiveBtn] = useState(0)
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <div className={`table-head ${classUpdate}`}>
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