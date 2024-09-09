<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  label?: string
  options: string[]
}>(), {
  label: '',
})

const selectValue = defineModel()
const id = useId()
</script>

<template>  
  <label v-if="label">{{ label }}</label>
  <select
    :id="id"
    class="field"
    v-model="selectValue"  
    v-bind="$attrs"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === selectValue"
    >{{ option }}</option>
  </select>
</template>