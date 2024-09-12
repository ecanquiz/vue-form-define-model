import { reactive } from 'vue'
import { postTask } from '@/services/TaskService'

export default () => {   
  const task = reactive({
    frequency: '',
    name: '',
    description: '',    
    situation: 0,
    supervision: {
      reviewed: false,
      approved: false
    }
  })

  // this could be set from an http request service
  const frequencies = [
    {id:1, name: 'annual'},
    {id:2, name: 'biannual'},
    {id:3, name: 'biweekly'},
    {id:4, name: 'daily'},
    {id:5, name: 'eventual'},
    {id:6, name: 'monthly'},
    {id:7, name: 'quarterly'},
    {id:8, name: 'weekly'}
  ]

  const sendForm = (payload: any) => {
    // here inside will be sendForm method code
    postTask(payload).then((response) => {
      console.log('Response', response)
    }).catch((err) => {
      console.log('Error', err)
    })
  }

  return {
    frequencies,
    task,
  
    sendForm
  }
}
