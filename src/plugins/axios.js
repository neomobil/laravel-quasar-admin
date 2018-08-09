import axios from 'axios'

export default ({ Vue }) => {
  const instance = axios.create({
    baseURL: process.env.API,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
  Vue.prototype.$axios = instance
}
