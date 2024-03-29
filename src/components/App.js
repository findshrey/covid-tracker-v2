import React from "react"

import { ThemeProvider } from "../context/ThemeContext"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"

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
