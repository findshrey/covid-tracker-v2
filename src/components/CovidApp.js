import React from 'react'

import Header from './Header'
import Statistics from './Statistics'
import Footer from './Footer'

const CovidApp = () => {
   return (
      <>
         <Header />
         <main>
            <Statistics />
         </main>
         <Footer />
      </>
   )
}

export { CovidApp as default }