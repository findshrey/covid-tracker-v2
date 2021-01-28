import React from 'react'

import IconConfirmed from './../components/icons/IconConfirmed'
import IconActive from './../components/icons/IconActive'
import IconRecovered from './../components/icons/IconRecovered'
import IconDeceased from '../components/icons/IconDeaths'

const SUMMARY_STATS = [
   {
      'title': 'confirmed',
      'icon': <IconConfirmed />
   },
   {
      'title': 'active',
      'icon': <IconActive />
   },
   {
      'title': 'recovered',
      'icon': <IconRecovered />
   },
   {
      'title': 'deaths',
      'icon': <IconDeceased />
   }
]

const TABLE_HEADINGS = [
   'State/UT',
   'Confirmed',
   'Active',
   'Recovered',
   'Deaths'
]

export { SUMMARY_STATS, TABLE_HEADINGS }
