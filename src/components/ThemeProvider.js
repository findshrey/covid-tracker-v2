import React, { useState } from 'react'

import ThemeContext from './../context/theme-context'

const ThemeProvider = ({ children }) => {
   const [darkTheme, setDarkTheme] = useState(false)

   const handleDarkTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme)
   }

   return (
      <ThemeContext.Provider value={{ darkTheme, handleDarkTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export { ThemeProvider as default }