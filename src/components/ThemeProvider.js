import React, { useState, useContext } from 'react'

import ThemeContext from './../context/theme-context'

const ThemeProvider = ({ children }) => {
   const [darkTheme, setDarkTheme] = useState(false)

   const handleDarkTheme = () => {
      setDarkTheme(!darkTheme)
   }

   return (
      <ThemeContext.Provider value={{ darkTheme, handleDarkTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeProvider