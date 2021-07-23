import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
   const themeCtx = useContext(ThemeContext)

   const classUpdate = themeCtx.darkTheme && 'dark'

   return (
      <footer className={`${classUpdate}`}>
         <h3 className={`${classUpdate}`}>COVID19INDIA</h3>
         <span>We stand with everyone fighting on the frontlines</span>
      </footer>
   )
}

export { Footer as default }