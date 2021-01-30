import React from 'react'
import IconNight from './icons/IconNight'

const Header = () => {
   return (
      <header className="site-head">
         <div className="container">
            <h1 className="logo">
               COVID19<span>INDIA</span>
            </h1>
            <button className="theme-icon">
               <IconNight />
            </button>
         </div>
      </header>
   )
}

export { Header as default }