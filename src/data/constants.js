import React from "react"

import IconActive from "../icons/IconActive"
import IconConfirmed from "../icons/IconConfirmed"
import IconDeaths from "../icons/IconDeaths"
import IconRecovered from "../icons/IconRecovered"

const SUMMARY_TITLES = [
   {
      title: "confirmed",
      icon: <IconConfirmed />,
   },
   {
      title: "active",
      icon: <IconActive />,
   },
   {
      title: "recovered",
      icon: <IconRecovered />,
   },
   {
      title: "deaths",
      icon: <IconDeaths />,
   },
]

const TABLE_HEADINGS = [
   "State/UT",
   "Confirmed",
   "Active",
   "Recovered",
   "Deaths",
]

const STATE_NAMES = {
   AN: "Andaman and Nicobar Islands",
   AP: "Andhra Pradesh",
   AR: "Arunachal Pradesh",
   AS: "Assam",
   BR: "Bihar",
   CH: "Chandigarh",
   CT: "Chhattisgarh",
   DN: "Dadra and Nagar Haveli and Daman and Diu",
   DL: "Delhi",
   GA: "Goa",
   GJ: "Gujarat",
   HR: "Haryana",
   HP: "Himachal Pradesh",
   JK: "Jammu and Kashmir",
   JH: "Jharkhand",
   KA: "Karnataka",
   KL: "Kerala",
   LA: "Ladakh",
   LD: "Lakshadweep",
   MP: "Madhya Pradesh",
   MH: "Maharashtra",
   MN: "Manipur",
   ML: "Meghalaya",
   MZ: "Mizoram",
   NL: "Nagaland",
   OR: "Odisha",
   PB: "Punjab",
   PY: "Puducherry",
   RJ: "Rajasthan",
   SK: "Sikkim",
   TN: "Tamil Nadu",
   TG: "Telangana",
   TR: "Tripura",
   UP: "Uttar Pradesh",
   UT: "Uttarakhand",
   WB: "West Bengal",
}

const TIMESERIES_RANGE = [
   {
      name: "1 month",
      value: 31,
   },
   {
      name: "3 months",
      value: 92,
   },
   {
      name: "6 months",
      value: 183,
   },
]

export { SUMMARY_TITLES, TABLE_HEADINGS, STATE_NAMES, TIMESERIES_RANGE }
