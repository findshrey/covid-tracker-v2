import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SpreadTrends = () => {
   const [spreadTrends, setSpreadTrends] = useState({})

   useEffect(() => {
      const getData = async () => {
         const response = await axios.get('https://api.covid19india.org/v4/timeseries.json')

         setSpreadTrends(response.data)
      }

      getData()
   }, [])

   console.log(spreadTrends);

   return (
      <section className="spread-trends">
         hello
      </section>
   )
}

export { SpreadTrends as default }