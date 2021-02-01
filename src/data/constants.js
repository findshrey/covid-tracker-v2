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

const STATE_NAMES = {
   AN: 'Andaman and Nicobar Islands',
   AP: 'Andhra Pradesh',
   AR: 'Arunachal Pradesh',
   AS: 'Assam',
   BR: 'Bihar',
   CH: 'Chandigarh',
   CT: 'Chhattisgarh',
   DN: 'Dadra and Nagar Haveli and Daman and Diu',
   DL: 'Delhi',
   GA: 'Goa',
   GJ: 'Gujarat',
   HR: 'Haryana',
   HP: 'Himachal Pradesh',
   JK: 'Jammu and Kashmir',
   JH: 'Jharkhand',
   KA: 'Karnataka',
   KL: 'Kerala',
   LA: 'Ladakh',
   LD: 'Lakshadweep',
   MP: 'Madhya Pradesh',
   MH: 'Maharashtra',
   MN: 'Manipur',
   ML: 'Meghalaya',
   MZ: 'Mizoram',
   NL: 'Nagaland',
   OR: 'Odisha',
   PB: 'Punjab',
   PY: 'Puducherry',
   RJ: 'Rajasthan',
   SK: 'Sikkim',
   TN: 'Tamil Nadu',
   TG: 'Telangana',
   TR: 'Tripura',
   UP: 'Uttar Pradesh',
   UT: 'Uttarakhand',
   WB: 'West Bengal',
}

const SPREAD_RANGES = {
   31: '1 Month',
   91: '3 Months',
   181: '6 Months'
}

export { SUMMARY_STATS, TABLE_HEADINGS, STATE_NAMES, SPREAD_RANGES }