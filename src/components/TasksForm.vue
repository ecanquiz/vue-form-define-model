<script setup lang="ts">
import { reactive } from "vue"
import type Task from "@/types/Tasks"

const props = defineProps<{
  task: Task,
  frequencies: string[]
}>()

const form = reactive(props.task)

const situationOptions = [
  { label: 'Unstarted', value: 0 },
  { label: 'Started', value: 1 },
  { label: 'Completed', value: 2 }
]
</script>

<template>
  <form>
    <label>Select a frequency</label>
    <AppSelect
      :options="frequencies"
      v-model="form.frequency"
      label="Select a frequency"
    />

    <h3>Name & describe your task</h3>
    <AppInput
      v-model="form.name"
      label="Name"
      type="text"
    />

    <AppTextarea
      v-model="form.description"
      label="Description"      
    />

    <h3>Task situation</h3>
    <div>
      <AppRadioGroup
        v-model="form.situation"
        name="situation"
        :options="situationOptions"
      />
    </div>

    <h3>Supervision</h3>
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

    <button
      class="btn btn-primary"
      type="submit"
    >
      Submit
    </button>
  </form>    
</template>