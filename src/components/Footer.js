import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
   const { darkTheme } = useContext(ThemeContext)

   const classUpdate = darkTheme && 'dark'

   return (
      <footer className={`${classUpdate}`}>
         <h3 className={`${classUpdate}`}>COVID19INDIA</h3>
         <span>We stand with everyone fighting on the frontlines</span>
      </footer>
   )
}

export { Footer as default }