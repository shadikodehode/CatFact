import { useState } from "react";


export const useCatFact = () => {
  const [fact, setFact] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchFact = async () => {
    setLoading(true)
    setError(null)
    setFact(null)

    try {
      const response = await fetch('https://catfact.ninja/fact')

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }

      const data = await response.json()
      setFact(data.fact)
    } catch (er) {
      setError(er.message || 'Something went wrong. Try again.')
    } finally  {
      setLoading(false)
    }
  }

  return {
    fact,
    loading,
    error,
    fetchFact
  }
}