const API_URL = 'https://api.example.com' // Replace with your API endpoint

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
