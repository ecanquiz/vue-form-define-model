<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})

const textareaValue = defineModel()
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <textarea
    v-bind="$attrs"
    v-model="textareaValue as HTMLInputElement['value']" 
    :placeholder="label"
    class="field"
  ></textarea>
</template>