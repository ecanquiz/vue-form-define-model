<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  value: string | number
}>(), {
  label: '',
})

const radioValue = defineModel()
</script>

<template>
  <input
    type="radio"
    :checked="radioValue === value"
    :value="value"
    v-bind="$attrs"
    @change="radioValue = value"
  />
  <label v-if="label">{{ label }}</label>
</template>