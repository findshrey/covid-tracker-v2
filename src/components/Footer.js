import React, { useContext } from "react"

import ThemeContext from "../context/ThemeContext"

const Footer = () => {
   const { themeClass } = useContext(ThemeContext)

   return (
      <footer className={themeClass}>
         <h3 className={themeClass}>COVID19INDIA</h3>
         <span>We stand with everyone fighting on the frontlines</span>
      </footer>
   )
}

export { Footer as default }
