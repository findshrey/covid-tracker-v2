import React from 'react'

import { formatNumber } from './../utils/commonFunctions'
import IconShield from './icons/IconShield'

const Vaccine = ({ vaccine }) => {
   return (
      <div className="vaccine">
         <div className="vaccine-inner">
            <IconShield />
            <span>
               {formatNumber(vaccine[vaccine.length - 1].totaldosesadministered) + ' '}
               vaccine doses administered
            </span>
         </div>
      </div>
   )
}

export { Vaccine as default }