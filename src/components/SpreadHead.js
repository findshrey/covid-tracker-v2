import React, { useState } from 'react'

import { STATE_NAMES, SPREAD_RANGE } from './../data/constants'

const SpreadHead = ({ handleCharts }) => {
   const [range, setRange] = useState(31)
   const [stateCode, setStateCode] = useState('DL')

   const stateCodes = Object.keys(STATE_NAMES)
   const rangeArray = Object.keys(SPREAD_RANGE)

   return (
      <header className="spread-head">
         <h2>Spread Trends</h2>
         <div className="spread-range">
            {
               rangeArray.map((range, index) => {
                  return <button
                     key={index}
                     onClick={() => { setRange(parseInt(range)); handleCharts(stateCode, range) }}
                  >
                     {SPREAD_RANGE[range]}
                  </button>
               })
            }
         </div>
         <select
            className="state-list"
            onChange={(e) => { setStateCode(e.target.value); handleCharts(e.target.value, range); }}
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

export { SpreadHead as default }