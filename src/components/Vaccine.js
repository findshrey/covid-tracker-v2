import React, { useContext } from 'react'

import { formatNumber } from './../utils/commonFunctions'
import IconShield from './icons/IconShield'
import ThemeContext from './../context/theme-context'

const Vaccine = ({ vaccine }) => {
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <div className="vaccine">
         <div className={`vaccine-inner ${classUpdate}`}>
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