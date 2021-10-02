import axios from 'axios'
import sprint from 'sprint'

export default () => {
  let addr = sprint(
    '%s://%s:%s%s',
    process.env.VUE_APP_API_SCHEME,
    process.env.VUE_APP_API_HOST,
    process.env.VUE_APP_API_PORT,
    process.env.VUE_APP_API_PATH
  )
    debugger
  return axios.create({
    baseURL: addr
  })
}