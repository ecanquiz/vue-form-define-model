<script setup lang="ts">
  defineProps<{
    id: string
  }>()
</script>

<template>    
  <p    
    class="errorMessage"
    :id="id"
    aria-live="assertive"
  >
    <slot />
  </p>
</template>
