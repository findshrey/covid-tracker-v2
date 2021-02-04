import React, { useState } from 'react'

import { TIMESERIES_RANGE, STATE_NAMES } from '../data/constants'

const TimeSeriesHead = ({ handleOptions }) => {
   const [activeBtn, setActiveBtn] = useState(0)
   const [selectedState, setSelectedState] = useState('DL')

   // Extract state codes
   const stateCodes = Object.keys(STATE_NAMES)

   return (
      <header className="time-series-head">
         <h2>Spread Trends</h2>
         <div className="time-series-range">
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
            className="state-list"
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