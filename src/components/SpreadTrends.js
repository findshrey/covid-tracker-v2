import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SpreadHead from './SpreadHead'
import SpreadCharts from './SpreadCharts'

const SpreadTrends = () => {
   const [spreadData, setSpreadData] = useState({})

   // Fetch daily state data
   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/v4/timeseries.json')

         setSpreadData(response.data)
      }

      getData()
   }, [])

   // Change graph statewise
   const handleCharts = (stateCode) => {
      console.log(stateCode);
   }

   // console.log(spreadData);

   return (
      <section className="spread-trends">
         <SpreadHead handleCharts={handleCharts} />
         <SpreadCharts />
      </section>
   )
}

export { SpreadTrends as default }