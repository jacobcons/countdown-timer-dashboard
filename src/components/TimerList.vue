<template>
  <div class="flex flex-col gap-y-2 items-center">
    <template v-for="timer in timers" :key="timer.id">
      <CountdownTimer :timer="timer" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CountdownTimer from '@/components/CountdownTimer.vue'
import type { Timer } from '@/types.js'

defineProps<{ timers: Timer[] }>()
</script>
