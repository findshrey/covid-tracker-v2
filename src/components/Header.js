import React from 'react'
import IconNight from './icons/IconNight'

const Header = () => {
   return (
      <header className="site-head">
         <div className="container">
            <h1 className="logo">
               COVID<span>INDIA</span>
            </h1>
            <div className="theme-icon">
               <IconNight />
            </div>
         </div>
      </header>
   )
}

export { Header as default }