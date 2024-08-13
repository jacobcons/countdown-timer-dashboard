<template>
  <div class="flex flex-col items-center gap-y-2">
    <template v-for="timer in timers" :key="timer.id">
      <CountdownTimer :timer="timer" @startTimer="$emit('startTimer', timer.id)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CountdownTimer from '@/components/CountdownTimer.vue'
import type { Timer } from '@/types.js'

defineProps<{ timers: Timer[] }>()
</script>
