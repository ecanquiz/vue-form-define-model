import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import AppSelect from '@/components/App/Select.vue'

describe('AppSelect', () => {
  const factory = (props = {}, attrs = {} ) => {
    return mount(AppSelect, {      
      props: {
        options: [],
        ...props
      },
      attrs: { ...attrs } 
    })
  }
  
  it('should be initialized blank and no title', () => {
    const wrapper = factory()
    
    expect(wrapper.html()).not.toContain('Title')
    expect(wrapper.find('label').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      options: [],
      label: '',
      modelValue: undefined,
      modelModifiers: undefined
    })
  })
  
  it('should render label by passing property to', () => {
    const wrapper = factory({ label: 'Title' })
    const label = wrapper.find('label')

    expect(label.exists()).toBe(true)
    expect(label.html()).toContain('Title')
    expect(wrapper.props().label).toEqual('Title')    
  })
  
  it('should emit empty value by default when fire', async () => {
    const wrapper = factory()
    
    await wrapper.find('select').trigger('change')

    expect(
      wrapper.emitted()['update:modelValue']
    ).toEqual(undefined)
  })
  
  it('should emit value which is set manually and fire', async () => {
    const wrapper = factory({ options: ['bar', 'baz', 'foo'] })
    const select = wrapper.find('select')
    
    await select.setValue('baz')
    await select.trigger('change')

    expect(
      (wrapper.emitted()['update:modelValue'] as any)[0][0]
    ).toEqual('baz')
  })
  
  it('should emit value which is set by property and fire', async () => {
    const wrapper = factory({ options: ['bar', 'baz', 'foo'] })
    const select = wrapper.find('select')
    select.element.value = 'baz'
    
    await select.trigger('change')

    expect(
      (wrapper.emitted()['update:modelValue'] as any)[0][0]
    ).toEqual('baz')
  })
  
  it('should set the attributes to the select element', () => {
    const wrapper = factory({ label:'Title', options: ['bar', 'baz', 'foo'] })
    const select = wrapper.find('select')
    const label = wrapper.find('label')
    
    expect(label.attributes()).toEqual({})
    expect(select.attributes()).toEqual({
      class: 'field', id: 'v-0'
    })
  })
  
  it('this should set the attributes to the input element too', () => {
    const wrapper = factory( { label: 'Title' }, { id: '#id' } )
    const select = wrapper.find('select')
    const label = wrapper.find('label')    
    
    expect(label.attributes()).toEqual({})
    expect(select.attributes()).toEqual(
      { class: 'field', id: '#id' }
    )
  })
  
  it('setSelected demo', async () => {
    const wrapper = factory({
      modelValue: 'baz',
      options: ['bar', 'baz', 'foo']
    })
    const options = wrapper.find('select').findAll('option')

    await (options as any).at(1).setSelected()

    expect((wrapper.find('option:checked').element as HTMLInputElement).value).toBe('baz')
  })
 
})