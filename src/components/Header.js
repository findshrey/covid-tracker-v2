import React, { useContext } from 'react'

import IconDark from './icons/IconDark'
import IconLight from './icons/IconLight'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
   const { darkTheme, handleDarkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <header className={`site-head ${classUpdate}`}>
         <div className="container">
            <h1 className={`logo ${classUpdate}`}>
               COVID19<span>INDIA</span>
            </h1>
            <button
               className={`theme-icon ${classUpdate}`}
               onClick={() => handleDarkTheme()}
            >
               {
                  darkTheme ? <IconLight /> : <IconDark />
               }
            </button>
         </div>
      </header>
   )
}

export { Header as default }