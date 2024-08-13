<template>
  <div
    href="#"
    class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ timer.label }}
    </h5>
    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ formattedTimeLeft }}</p>
    <TimerControl :func="startTimer" :timerId="timer.id" text="Start" />
    <TimerControl :func="stopTimer" :timerId="timer.id" text="Stop" />
    <TimerControl :func="resetTimer" :timerId="timer.id" text="Reset" />
  </div>
</template>

<script setup lang="ts">
import type { Timer } from '@/types.js'
import { useTimersStore } from '@/store.js'
import { storeToRefs } from 'pinia'
import TimerControl from '@/components/TimerControl.vue'
import { computed } from 'vue'

const { timer } = defineProps<{ timer: Timer }>()
const { timers } = storeToRefs(useTimersStore())
const formattedTimeLeft = computed(() => {
  // split seconds left into as many hours, minutes and then seconds as possible
  const { secondsLeft } = timer
  const SECONDS_IN_HOUR = 3600
  const hours = Math.floor(secondsLeft / SECONDS_IN_HOUR)
  const minutes = Math.floor((secondsLeft % SECONDS_IN_HOUR) / 60)
  const seconds = secondsLeft % 60
  return `${hours}:${minutes}:${seconds}`
})

function findTimer(id: number) {
  return timers.value.find((timer) => timer.id === id) as Timer
}

function startTimer(id: number) {
  const timer = findTimer(id)

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

function stopTimer(id: number) {
  const timer = findTimer(id)

  clearInterval(timer.intervalId as number)
  timer.started = false
}

function resetTimer(id: number) {
  const timer = findTimer(id)

  clearInterval(timer.intervalId as number)
  timer.started = false
  timer.secondsLeft = timer.startingSeconds
}
</script>
