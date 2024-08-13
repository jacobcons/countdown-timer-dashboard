<template>
  <div class="flex flex-col items-center gap-y-2">
    <template v-for="timer in timers" :key="timer.id">
      <CountdownTimer :id="timer.id" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CountdownTimer from '@/components/CountdownTimer.vue'
import type { Timer } from '@/types.js'
import { storeToRefs } from 'pinia'
import { useTimersStore } from '@/store.js'

const { timers } = storeToRefs(useTimersStore())
</script>
