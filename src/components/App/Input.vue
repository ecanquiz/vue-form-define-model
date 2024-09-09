<script setup lang="ts">
  import { useId } from 'vue'
  withDefaults(defineProps<{
    label?: string
  }>(), {
    label: '',
  })

  const inputValue = defineModel()
  const id = useId()
</script>

<template> 
  <label v-if="label">{{ label }}</label>
  <input
    :id="id"  
    v-bind="$attrs"
    :placeholder="label"
    v-model="inputValue"   
    class="field"   
  >  
</template>

<!--style scoped></style-->
