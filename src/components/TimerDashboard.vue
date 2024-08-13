<template>
  <h2 class="mb-8 text-2xl font-bold">Dashboard</h2>
  <TimerForm class="mb-8" @addTimer="addTimer" />
  <TimerList class="mb-8" :timers="timers" @startTimer="startTimer" />
</template>

<script setup lang="ts">
import TimerForm from '@/components/TimerForm.vue'
import TimerList from '@/components/TimerList.vue'
import { ref } from 'vue'
import type { Timer } from '@/types.js'

const timers = ref<Timer[]>([])

let currentId = 1
function addTimer(label: string, secondsLeft: number) {
  timers.value.push({ id: currentId, label, secondsLeft, started: false })
  currentId++
}

function startTimer(id: number) {
  const timer = timers.value.find((timer) => timer.id === id) as Timer

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
