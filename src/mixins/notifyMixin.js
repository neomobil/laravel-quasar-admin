import { Notify } from 'quasar'
export const notifyMixin = {
  data () {
    return {
      id: ''
    }
  },
  methods: {
    catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        Notify.create(error.response.data)
      } else if (error.request) {
        Notify.create(`Invalid Request`)
        console.log(error.request)
      } else {
        Notify.create(error.message)
        console.log('Error', error.message)
      }
      // console.log(error.config)
    }
  }
}
