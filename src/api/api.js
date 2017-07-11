import  { baseUrl } from '@/config/env'
import axios from 'axios'

axios.defaults.baseURL = baseUrl

export default {
  test () {
    return axios.get('')
  }
}