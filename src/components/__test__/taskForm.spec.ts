import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppButton from '@/components/App/Button.vue'
import AppErrorMessage from '@/components/App/ErrorMessage.vue'
import AppInput from '@/components/App/Input.vue'
import AppSelect from '@/components/App/Select.vue'
import AppCheckbox from '@/components/App/Checkbox.vue'
import AppRadio from '@/components/App/Radio.vue'
import AppRadioGroup from '@/components/App/RadioGroup.vue'
import AppTextarea from '@/components/App/Textarea.vue'
import TasksForm from '@/components/TasksForm.vue'

describe('TasksForm', () => {
  it('should be initialized blank all and no title', async () => {
    const wrapper = mount(TasksForm, {
      global: {
        components: {
          AppButton,
          AppErrorMessage,
          AppInput,
          AppSelect,
          AppCheckbox,
          AppRadio,
          AppRadioGroup,
          AppTextarea
        }
      },
      props:{
        task: {
          frequency: '',
          name: '',
          description: '',
          situation: 0,
          supervision: {
            reviewed: false,
            approved: false
          }
        },
        frequencies: [
          'annual',
          'biannual',
          'biweekly',
          'daily',
          'eventual',
          'monthly',
          'quarterly',
          'weekly'
        ]
      }
    }) 
 
    await wrapper.find('select').setValue('daily')
    await wrapper.find('input[type=text]').setValue('My task')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet...')
    await wrapper.find('input[type=radio][value="1"]').setValue()
    await wrapper.findAll('input[type=checkbox]')[0].setValue()
    await wrapper.find('button').trigger('submit')

    expect((wrapper.emitted('sendForm') as any)[0][0]).toEqual({
      frequency: 'daily',
      name: 'My task',
      description: 'Lorem ipsum dolor sit amet...',
      situation: 1,
      supervision: { reviewed: true, approved: false }
    })
  })
})
