import { format } from 'date-fns'

// Capitalize first letter
const capitalize = (str) => {
   const newString = str.charAt(0).toUpperCase() + str.slice(1)

   return newString
}

// Format number
const formatNumber = (str) => {
   const num = parseInt(str)

   return num.toLocaleString('en-IN')
}

// Format date (31/12/2020)
const formatDate = (str) => {
   const [day, month, year] = str.split('/')
   const newDate = new Date(year, month - 1, day)

   return format(newDate, "dd MMMM")
}

// Format date (2020-12-31)
const formatChartDate = (str) => {
   const [year, month, day] = str.split('-')
   const newDate = new Date(year, month - 1, day)

   return format(newDate, "MMM dd")
}

// Format date and military time (31/12/2020 09:00:00)
const getDateTime = (str) => {
   const [date, time] = str.split(' ')

   const [day, month, year] = date.split("/")
   const [hour, min, sec] = time.split(":")

   const newDate = new Date(year, month - 1, day, hour, min, sec)
   return format(newDate, "dd MMM, hh:mm aaa")
}

const checkNum = (num) => {
   // if (isNaN(num)) {
   //    return 0
   // }
}

export {
   capitalize,
   formatNumber,
   formatDate,
   formatChartDate,
   getDateTime,
   checkNum
}