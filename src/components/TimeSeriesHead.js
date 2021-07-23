import React, { useState, useContext } from 'react'

import { TIMESERIES_RANGE, STATE_NAMES } from './../data/constants'
import ThemeContext from '../context/ThemeContext'

const TimeSeriesHead = ({ handleOptions }) => {
   const [activeBtn, setActiveBtn] = useState(0)
   const [selectedState, setSelectedState] = useState('DL')
   const themeCtx = useContext(ThemeContext)

   // Extract state codes
   const stateCodes = Object.keys(STATE_NAMES)

   const classUpdate = themeCtx.darkTheme && 'dark'

   return (
      <header className="time-series-head">
         <h2>Spread Trends</h2>
         <div className={`time-series-range ${classUpdate}`}>
            {
               TIMESERIES_RANGE.map((range, index) => {
                  return <button
                     key={index}
                     className={index === activeBtn ? 'range-btn active' : 'range-btn'}
                     onClick={() => { setActiveBtn(index); handleOptions('range', range.value) }}
                  >
                     {range.name}
                  </button>
               })
            }
         </div>
         <select
            className={`state-list ${classUpdate}`}
            value={selectedState}
            onChange={(e) => { setSelectedState(e.target.value); handleOptions('stateCode', e.target.value) }}
         >
            {
               stateCodes.map((code, index) => {
                  return <option
                     key={index}
                     value={code}
                  >
                     {STATE_NAMES[code]}
                  </option>
               })
            }
         </select>
      </header>
   )
}

export { TimeSeriesHead as default }