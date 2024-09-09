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
    'annual',
    'biannual',
    'biweekly',
    'daily',
    'eventual',
    'monthly',
    'quarterly',
    'weekly'
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
