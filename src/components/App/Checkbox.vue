<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})

const checkboxValue = defineModel()
</script>

<template>
  <input
    v-bind="$attrs"
    type="checkbox"
    v-model="checkboxValue"    
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>
