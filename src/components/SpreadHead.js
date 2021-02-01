import React, { useState } from 'react'

import { SPREAD_RANGES, STATE_NAMES } from './../data/constants'

const SpreadHead = ({ handleCharts }) => {
   const [activeBtn, setActiveBtn] = useState(0)
   const [spreadRange, setSpreadRange] = useState(31)
   const [selectedState, setSelectedState] = useState('DL')

   const rangeKeys = Object.keys(SPREAD_RANGES)
   const stateNameKeys = Object.keys(STATE_NAMES)

   return (
      <header className="spread-head">
         <h2>Spread Trends</h2>
         <div className="spread-range">
            {
               rangeKeys.map((range, index) => {
                  return <button
                     key={index}
                     className={index === activeBtn ? 'range-btn active' : 'range-btn'}
                     onClick={() => { setActiveBtn(index); setSpreadRange(parseInt(range)); handleCharts(selectedState, range) }}
                  >
                     {SPREAD_RANGES[range]}
                  </button>
               })
            }
         </div>
         <select
            className="state-list"
            value={selectedState}
            onChange={(e) => { setSelectedState(e.target.value); handleCharts(e.target.value, spreadRange) }}
         >
            {
               stateNameKeys.map((stateCode, index) => {
                  return <option
                     key={index}
                     value={stateCode}
                  >
                     {STATE_NAMES[stateCode]}
                  </option>
               })
            }
         </select>
      </header>
   )
}

export { SpreadHead as default }