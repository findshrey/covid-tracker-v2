import React, { useState } from 'react'

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
   const [darkTheme, setDarkTheme] = useState(false)

   const handleDarkTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme)
   }

   // Context data to be shared
   const contextData = {
      darkTheme,
      handleTheme: handleDarkTheme
   }

   return (
      <ThemeContext.Provider value={contextData}>
         {children}
      </ThemeContext.Provider>
   )
}

export { ThemeContext as default, ThemeProvider }