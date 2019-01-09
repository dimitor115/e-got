import axios from 'axios'

export function apiUrl() {
  const serverUrl = document.URL.slice(0, document.URL.indexOf('/', 8))
  return serverUrl + '/api'
}

export async function fetchData(endpoint) {
  return (await axios.get(apiUrl() + endpoint)).data
}
