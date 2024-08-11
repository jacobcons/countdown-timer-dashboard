<template>
  <form class="flex flex-col gap-y-4" @subit.prevent="addTimer">
    <h2 class="text-lg">Add Custom Timer:</h2>
    <div>
      <label
        for="default-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Label:</label
      >
      <input
        type="text"
        id="default-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div class="grid grid-cols-3 gap-4">
      <TimeComponentInput label="Hours:" v-model="hours" />
      <TimeComponentInput label="Minutes:" v-model="minutes" />
      <TimeComponentInput label="Seconds:" v-model="seconds" />
    </div>

    <button
      type="submit"
      class="w-24 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        class="w-3.5 h-3.5 text-white me-2"
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

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function addTimer() {}
</script>
