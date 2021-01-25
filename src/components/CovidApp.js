import React from 'react'
import Header from './Header'
import Statistics from './Statistics'
import Footer from './Footer'

const CovidApp = () => {
   return (
      <div className="covid-app">
         <Header />
         <main>
            <Statistics />
         </main>
         <Footer />
      </div>
   )
}

export { CovidApp as default }