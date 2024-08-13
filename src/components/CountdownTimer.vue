<template>
  <div
    href="#"
    class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ timer.label }}
    </h5>
    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ timer.secondsLeft }}</p>
    <button
      type="button"
      class="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      @click="startTimer(timer.id)"
    >
      Start
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Timer } from '@/types.js'
import { useTimersStore } from '@/store.js'
import { storeToRefs } from 'pinia'

defineProps<{ timer: Timer }>()

const { timers } = storeToRefs(useTimersStore())
function findTimer(id: number) {
  return timers.value.find((timer) => timer.id === id) as Timer
}

function startTimer(id: number) {
  const timer = findTimer(id)

  if (timer.started) {
    return
  }

  timer.started = true
  const intervalId = setInterval(() => {
    timer.secondsLeft -= 1
    if (timer.secondsLeft === 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}
</script>
