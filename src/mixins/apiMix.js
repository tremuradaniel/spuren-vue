import tasks from '../services/test'

export default {
  data: function () {
    return {
      
    }
  },
  methods: {
    getTasks: async function () {
      debugger
      const response = await tasks.getTasks()
      if (response.data.result === 'OK') {

      }
    }
  }
}