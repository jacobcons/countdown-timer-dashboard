<template>
  <form class="flex flex-col gap-y-4" @submit.prevent="addTimer">
    <h2 class="text-lg">Add Custom Timer:</h2>
    <div>
      <label
        for="default-input"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Label:</label
      >
      <input
        type="text"
        id="default-input"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required
        v-model="label"
      />
    </div>

    <div class="grid grid-cols-3 gap-4">
      <TimeComponentInput label="Hours:" v-model="hours" />
      <TimeComponentInput label="Minutes:" v-model="minutes" />
      <TimeComponentInput label="Seconds:" v-model="seconds" />
    </div>

    <button
      type="submit"
      class="inline-flex w-24 items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        class="me-2 h-3.5 w-3.5 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14m-7 7V5"
        />
      </svg>

      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import TimeComponentInput from '@/components/TimeComponentInput.vue'
import { ref } from 'vue'
import { useTimersStore } from '@/store.js'
import { storeToRefs } from 'pinia'

const label = ref('')
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const { timers } = storeToRefs(useTimersStore())

function convertTimeComponentsToSeconds() {
  return seconds.value + minutes.value * 60 + hours.value * 60 * 60
}

let currentId = 1
function addTimer() {
  const startingSeconds = convertTimeComponentsToSeconds()
  timers.value.push({
    id: currentId,
    label: label.value,
    startingSeconds,
    secondsLeft: startingSeconds,
    started: false,
    intervalId: null
  })
  currentId++
}
</script>
