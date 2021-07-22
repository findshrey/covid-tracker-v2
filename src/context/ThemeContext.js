import React, { useState } from 'react'

const ThemeContext = React.createContext()

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

export { ThemeContext as default, ThemeProvider }