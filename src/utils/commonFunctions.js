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

export { capitalize, formatNumber }