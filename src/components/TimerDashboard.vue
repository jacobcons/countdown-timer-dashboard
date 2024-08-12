<template>
  <h2 class="text-2xl font-bold mb-8">Dashboard</h2>
  <TimerForm class="mb-8" @addTimer="addTimer" />
  <TimerList class="mb-8" :timers="timers" />
</template>

<script setup lang="ts">
import TimerForm from '@/components/TimerForm.vue'
import TimerList from '@/components/TimerList.vue'
import { ref } from 'vue'
import type { Timer } from '@/types.js'

const timers = ref<Timer[]>([])

let currentId = 1
function addTimer(label: string, secondsLeft: number) {
  timers.value.push({ id: currentId, label, secondsLeft })
  currentId++
}
</script>
