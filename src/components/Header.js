import React, { useContext } from "react"

import IconDark from "../icons/IconDark"
import IconLight from "../icons/IconLight"
import ThemeContext from "../context/ThemeContext"

const Header = () => {
   const themeCtx = useContext(ThemeContext)

   const themeClass = themeCtx.darkTheme ? "dark" : ""

   return (
      <header className={`site-head ${themeClass}`}>
         <div className="container">
            <h1 className={`logo ${themeClass}`}>
               COVID19<span>INDIA</span>
            </h1>
            <button
               className={`theme-icon ${themeClass}`}
               onClick={themeCtx.handleTheme}
            >
               {themeCtx.darkTheme ? <IconLight /> : <IconDark />}
            </button>
         </div>
      </header>
   )
}

export { Header as default }
