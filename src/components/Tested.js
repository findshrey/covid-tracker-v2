import React from 'react'

import { getDateTime, getDate, formatNumber } from './../utils/commonFunctions'

const Tested = ({ tested }) => {
   return (
      <div className="tested">
         <div className="tested-left">
            <h2>India</h2>
            <p>Last Updated on {getDateTime(tested[tested.length - 1].updatetimestamp)}</p>
         </div>
         <div className="tested-right">
            <h4>Tested</h4>
            <div className="sample-tested">{formatNumber(tested[tested.length - 1].totalsamplestested)}</div>
            <p>As of {getDate(tested[tested.length - 1].testedasof)}</p>
         </div>
      </div>
   )
}

export { Tested as default }