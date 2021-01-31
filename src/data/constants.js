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
   DL: 'Delhi',
   DN: 'Dadra and Nagar Haveli and Daman and Diu',
   GA: 'Goa',
   GJ: 'Gujarat',
   HR: 'Haryana',
   HP: 'Himachal Pradesh',
   JH: 'Jharkhand',
   JK: 'Jammu and Kashmir',
   KA: 'Karnataka',
   KL: 'Kerala',
   LA: 'Ladakh',
   LD: 'Lakshadweep',
   MH: 'Maharashtra',
   ML: 'Meghalaya',
   MN: 'Manipur',
   MP: 'Madhya Pradesh',
   MZ: 'Mizoram',
   NL: 'Nagaland',
   OR: 'Odisha',
   PB: 'Punjab',
   PY: 'Puducherry',
   RJ: 'Rajasthan',
   SK: 'Sikkim',
   TG: 'Telangana',
   TN: 'Tamil Nadu',
   TR: 'Tripura',
   UP: 'Uttar Pradesh',
   UT: 'Uttarakhand',
   WB: 'West Bengal',
}

export { SUMMARY_STATS, TABLE_HEADINGS, STATE_NAMES }