<script setup lang="ts">
  import { useId } from 'vue'
  withDefaults(defineProps<{
    label?: string,
    error?: string
  }>(), {
    label: '',
    error: ''
  })

  const inputValue = defineModel()
  const id = useId()
</script>

<template> 
  <label :for="id" v-if="label">{{ label }}</label>
  <input
    :id="id"  
    v-bind="$attrs"
    :placeholder="label"
    v-model="inputValue"   
    class="field"
    :aria-describedby="error ? `${id}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  >
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>

<!--style scoped></style-->
