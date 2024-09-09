<script setup lang="ts">
import useTasks from '@/composables/useTasks'
import TasksForm from '@/components/TasksForm.vue'

const {
  frequencies,
  task,
  
  sendForm
} = useTasks()
</script>

<template>
  <div>
    <h1>Create an task</h1>
    <TasksForm
      :task='task'
      :frequencies='frequencies'
      @sendForm="sendForm"     
    />
    <pre>{{ task }}</pre>
  </div>
</template>