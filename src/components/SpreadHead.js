import React, { useState } from 'react'

import { SPREAD_RANGES, STATE_NAMES } from './../data/constants'

const SpreadHead = ({ handleOptions }) => {
   const [activeBtn, setActiveBtn] = useState(0)
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
                     onClick={() => { handleOptions('range', parseInt(range)); setActiveBtn(index) }}
                  >
                     {SPREAD_RANGES[range]}
                  </button>
               })
            }
         </div>
         <select
            className="state-list"
            value={selectedState}
            onChange={(e) => { handleOptions('stateCode', e.target.value); setSelectedState(e.target.value) }}
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