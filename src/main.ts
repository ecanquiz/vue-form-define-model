import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import AppInput from '@/components/App/Input.vue'
import AppSelect from '@/components/App/Select.vue'
import AppCheckbox from '@/components/App/Checkbox.vue'
import AppRadio from '@/components/App/Radio.vue'
import AppRadioGroup from '@/components/App/RadioGroup.vue'
import AppTextarea from '@/components/App/Textarea.vue'



createApp(App)
  .component('AppInput', AppInput)
  .component('AppSelect', AppSelect)
  .component('AppCheckbox', AppCheckbox)
  .component('AppRadio', AppRadio)
  .component('AppRadioGroup', AppRadioGroup)
  .component('AppTextarea', AppTextarea)
  .mount('#app')
  
