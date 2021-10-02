import sprint from 'sprint'
import ApiClient from '../services/ApiClient'

export default {
  getTasks () {
    debugger
    return ApiClient().get(sprint('/tasks/1'))
  }
}