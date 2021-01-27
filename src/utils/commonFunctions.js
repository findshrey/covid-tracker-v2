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

// Convert military time to 12h
const getDate = (str) => {
   const [date, time] = str.split(' ')

   const [day, month, year] = date.split("/")
   const [hour, min, sec] = time.split(":")

   const newDate = new Date(year, month - 1, day, hour, min, sec)

   return format(newDate, "dd MMM, KK:mm aaa")
}

export { capitalize, formatNumber, getDate }