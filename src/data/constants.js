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
   AP: 'Andhra Pradesh',
   AR: 'Arunachal Pradesh',
   AS: 'Assam',
   BR: 'Bihar',
   CT: 'Chhattisgarh',
   GA: 'Goa',
   GJ: 'Gujarat',
   HR: 'Haryana',
   HP: 'Himachal Pradesh',
   JH: 'Jharkhand',
   KA: 'Karnataka',
   KL: 'Kerala',
   MP: 'Madhya Pradesh',
   MH: 'Maharashtra',
   MN: 'Manipur',
   ML: 'Meghalaya',
   MZ: 'Mizoram',
   NL: 'Nagaland',
   OR: 'Odisha',
   PB: 'Punjab',
   RJ: 'Rajasthan',
   SK: 'Sikkim',
   TN: 'Tamil Nadu',
   TG: 'Telangana',
   TR: 'Tripura',
   UT: 'Uttarakhand',
   UP: 'Uttar Pradesh',
   WB: 'West Bengal',
   AN: 'Andaman and Nicobar Islands',
   CH: 'Chandigarh',
   DN: 'Dadra and Nagar Haveli and Daman and Diu',
   DL: 'Delhi',
   JK: 'Jammu and Kashmir',
   LA: 'Ladakh',
   LD: 'Lakshadweep',
   PY: 'Puducherry',
}

export { SUMMARY_STATS, TABLE_HEADINGS, STATE_NAMES }