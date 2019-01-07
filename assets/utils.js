import axios from 'axios'

export async function fetchData(endpoint) {
  const serverUrl = document.URL.slice(0, document.URL.indexOf('/', 8))
  const apiUrl = serverUrl + '/api'
  return (await axios.get(apiUrl + endpoint)).data
}
