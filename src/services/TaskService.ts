import axios from "axios";
import type { Paiload } from "@/types/Payload"

const request = axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  baseURL: 'https://my-json-server.typicode.com/CaribesTIC/vue-forms'
});

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const postTask = (payload: Paiload) => {
  return request.post('/posts', payload)  
}

// export const getTasks = () => {
//  return request.get('/get-all-tasks')
// }

