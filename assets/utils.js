import axios from 'axios'
import Compress from 'client-compress'

export function apiUrl() {
  const serverUrl = document.URL.slice(0, document.URL.indexOf('/', 8))
  return serverUrl + '/api'
}

export async function fetchData(endpoint) {
  return (await axios.get(apiUrl() + endpoint)).data
}

export async function toBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    if (blob) {
      reader.readAsDataURL(blob)
    } else {
      reject()
    }
    reader.onload = () => {
      resolve(reader.result)
    }
  })
}

export async function compressPhoto(file) {
  const compressor = new Compress(
    {
      targetSize: 0.2,
      quality: 0.75,
      maxWidth: 1600,
      maxHeight: 800
    }
  )
  const {photo, info} = (await compressor.compress([file]))[0]
  console.log(info)
  return photo.data
}
