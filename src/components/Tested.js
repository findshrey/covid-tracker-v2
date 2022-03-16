import React, { useContext } from "react"

import { getDateTime, formatDate, formatNumber } from "../utils/commonFunctions"
import ThemeContext from "../context/ThemeContext"

const Tested = ({ tested }) => {
   const { themeClass } = useContext(ThemeContext)

   return (
      <div className="tested">
         <div className={`tested-left ${themeClass}`}>
            <h2>India</h2>
            <p>
               Last Updated on{" "}
               {getDateTime(tested[tested.length - 1].updatetimestamp)}
            </p>
         </div>
         <div className="tested-right">
            <h3>Tested</h3>
            <div className={`sample-tested ${themeClass}`}>
               {formatNumber(tested[tested.length - 1].totalsamplestested)}
            </div>
            <span>
               As of {formatDate(tested[tested.length - 1].testedasof)}
            </span>
         </div>
      </div>
   )
}

export { Tested as default }
