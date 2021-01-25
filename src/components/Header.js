import React from 'react'
import * as FiIcons from 'react-icons/fi'

const Header = () => {
   return (
      <header className="main-head">
         <h1 className="logo">
            COVID19
            <span>INDIA</span>
         </h1>
         <div className="theme-icon">
            <FiIcons.FiMoon />
         </div>
      </header>
   )
}

export { Header as default }