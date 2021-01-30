import React from 'react'

import IconShield from './icons/IconShield'

const Vaccine = ({ covidStats }) => {
   return (
      <div className="vaccine">
         <div className="vaccine-inner">
            <IconShield />
            <span>
               {covidStats.tested[covidStats.tested.length - 1].totaldosesadministered}
            </span>
            <span>vaccine doses administered</span>
         </div>
      </div>
   )
}

export { Vaccine as default }