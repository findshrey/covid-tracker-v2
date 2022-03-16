import React, { useContext } from "react"

import IconDark from "../icons/IconDark"
import IconLight from "../icons/IconLight"
import ThemeContext from "../context/ThemeContext"

const Header = () => {
   const { themeClass, handleTheme } = useContext(ThemeContext)

   return (
      <header className={`site-head ${themeClass}`}>
         <div className="container">
            <h1 className={`logo ${themeClass}`}>
               COVID19<span>INDIA</span>
            </h1>
            <button
               className={`theme-icon ${themeClass}`}
               onClick={handleTheme}
            >
               {themeClass === "dark" ? <IconLight /> : <IconDark />}
            </button>
         </div>
      </header>
   )
}

export { Header as default }
