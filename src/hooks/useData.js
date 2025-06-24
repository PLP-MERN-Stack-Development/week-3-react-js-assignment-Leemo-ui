import { useState, useEffect } from 'react'
import { fetchData } from '../api/api'

export const useData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return { data, loading, error }
}
