import React from 'react'

import { STATE_NAMES } from './../data/constants'

const SpreadHead = ({ handleCharts }) => {
   const stateCodes = Object.keys(STATE_NAMES)

   return (
      <header className="spread-head">
         <h2>Spread Trends</h2>
         <select className="state-list" onChange={(e) => handleCharts(e.target.value)}>
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