import React, { useContext } from 'react'

import { getDateTime, formatDate, formatNumber } from './../utils/commonFunctions'
import ThemeContext from './../context/theme-context'

const Tested = ({ tested }) => {
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <div className="tested">
         <div className={`tested-left ${classUpdate}`}>
            <h2>India</h2>
            <p>Last Updated on {getDateTime(tested[tested.length - 1].updatetimestamp)}</p>
         </div>
         <div className="tested-right">
            <h3>Tested</h3>
            <div className={`sample-tested ${classUpdate}`}>{formatNumber(tested[tested.length - 1].totalsamplestested)}</div>
            <span>As of {formatDate(tested[tested.length - 1].testedasof)}</span>
         </div>
      </div>
   )
}

export { Tested as default }