import axios from 'axios'

const urls = {
  getMe: () => {
    return `posts/1`
  }
}

// Axois configuration
const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { 'content-type': 'application/json' }
})

const axiosResponseTransform = function (url) {
  return function (response) {
    return response.data
  }
}
const get = async function (url) {
  return request.get(url).then(axiosResponseTransform(url))
}

export { urls, get}
