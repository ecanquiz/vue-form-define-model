import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
  Input,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Textarea,
  ErrorMessage,
  Btn,
  Link
} from '@ecanquiz/vue-forms'

/*import AppInput from '@/components/App/Input.vue'
import AppSelect from '@/components/App/Select.vue'
import AppCheckbox from '@/components/App/Checkbox.vue'
import AppRadio from '@/components/App/Radio.vue'
import AppRadioGroup from '@/components/App/RadioGroup.vue'
import AppTextarea from '@/components/App/Textarea.vue'
import AppErrorMessage from '@/components/App/ErrorMessage.vue'
import AppButton from '@/components/App/Button.vue'*/

createApp(App)
  .use(router)
  .component('AppInput', Input)
  .component('AppSelect', Select)
  .component('AppCheckbox', Checkbox)
  .component('AppRadio', Radio)
  .component('AppRadioGroup', RadioGroup)
  .component('AppTextarea', Textarea)
  .component('AppErrorMessage', ErrorMessage)
  .component('AppButton', Btn)
  .component('AppLink', Link)
  .mount('#app')
  
