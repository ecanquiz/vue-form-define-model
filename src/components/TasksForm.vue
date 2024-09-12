<script setup lang="ts">
import { reactive, toRaw } from "vue"
import type Task from "@/types/Tasks"

const props = defineProps<{
  task: Task,
  frequencies: {id: string | number, name: string}[]
}>()

const form = reactive(props.task)

const situationOptions = [
  { label: 'Unstarted', value: 0 },
  { label: 'Started', value: 1 },
  { label: 'Completed', value: 2 }
]

const emit = defineEmits<{
  (e: 'sendForm', task: Task): void
}>()

const sendForm = () => {
  // here inside will be the code of this method
  emit('sendForm', toRaw(form))
}
</script>

<template>
  <form @submit.prevent="sendForm">    
    <AppSelect
      :options="frequencies"
      v-model="form.frequency"
      label="Select a frequency"
    />

    <fieldset>        
      <legend>Name & describe your task</legend>
      <AppInput
        v-model="form.name"
        label="Name"
        type="text"
        error="This input has an error!"
      />
      
      <AppTextarea
        v-model="form.description"
        label="Description"      
      />
    </fieldset>

    <fieldset>
      <legend>Task situation</legend>
      <div>
        <AppRadioGroup
          v-model="form.situation"
          name="situation"
          :options="situationOptions"
        />
      </div>
    </fieldset>

    <fieldset>
      <legend>Supervision</legend>
   
      <div>
        <AppCheckbox
          v-model="form.supervision.reviewed"
          label="Reviewed"
        />
      </div>

      <div>
        <AppCheckbox
          v-model="form.supervision.approved"
          label="Approved"
        />
      </div>
    </fieldset>

    <AppButton
      class="btn btn-primary"
        type="submit"
    >
      Submit
    </AppButton>    
  </form>    
</template>

<style scoped>
fieldset { 
  @apply border-0 m-0 p-0;
}

legend {
  @apply text-2xl font-semibold my-4;
}
</style>