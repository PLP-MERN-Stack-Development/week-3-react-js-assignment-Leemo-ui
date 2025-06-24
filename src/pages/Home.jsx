import { useState, useEffect } from 'react'
import { fetchData } from '../api/api'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData()
      setData(result)
    }
    loadData()
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to React Assignment</h1>
      {/* Add your content here */}
    </div>
  )
}

export default Home
