import React from 'react'

import { ThemeProvider } from './../context/ThemeContext'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const App = () => {
   return (
      <ThemeProvider>
         <Header />
         <Home />
         <Footer />
      </ThemeProvider>
   )
}

export { App as default }