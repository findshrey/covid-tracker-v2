import { useState, useCallback } from "react"

const useHttp = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true)
      setError(null)

      try {
         const response = await fetch(requestConfig.url, {
            method: requestConfig.method ?? "GET",
            headers: requestConfig.headers ?? {},
            body: JSON.stringify(requestConfig.body) ?? null,
         })

         if (!response.ok) {
            throw new Error("Request Failed!")
         }

         const data = await response.json()
         applyData(data)
      } catch (e) {
         setError(e.message)
      }

      setIsLoading(false)
   }, [])

   return {
      isLoading,
      error,
      sendRequest,
   }
}

export { useHttp as default }
