<template>
  <div
    href="#"
    class="relative w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ timer.label }}
    </h5>
    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ formattedTimeLeft }}</p>
    <TimerControl :func="startTimer" text="Start" />
    <TimerControl :func="stopTimer" text="Stop" />
    <TimerControl :func="resetTimer" text="Reset" />
    <svg
      class="absolute right-4 top-4 h-6 w-6 cursor-pointer text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      @click="deleteTimer"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import type { Timer } from '@/types.js'
import { useTimersStore } from '@/store.js'
import { storeToRefs } from 'pinia'
import TimerControl from '@/components/TimerControl.vue'
import { computed } from 'vue'

const props = defineProps<{ id: number }>()
let { timers } = storeToRefs(useTimersStore())
const timer = timers.value.find((timer) => timer.id === props.id) as Timer
const formattedTimeLeft = computed(() => {
  // split seconds left into as many hours, minutes and then seconds as possible
  const { secondsLeft } = timer
  const SECONDS_IN_HOUR = 3600
  const hours = String(Math.floor(secondsLeft / SECONDS_IN_HOUR)).padStart(2, '0')
  const minutes = String(Math.floor((secondsLeft % SECONDS_IN_HOUR) / 60)).padStart(2, '0')
  const seconds = String(secondsLeft % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
})

function startTimer() {
  if (timer.started) {
    return
  }

  timer.started = true
  timer.intervalId = setInterval(() => {
    timer.secondsLeft -= 1
    if (timer.secondsLeft === 0) {
      clearInterval(timer.intervalId as number)
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(timer.intervalId as number)
  timer.started = false
}

function resetTimer() {
  clearInterval(timer.intervalId as number)
  timer.started = false
  timer.secondsLeft = timer.startingSeconds
}

function deleteTimer() {
  timers.value = timers.value.filter((timer) => timer.id !== props.id)
}
</script>
