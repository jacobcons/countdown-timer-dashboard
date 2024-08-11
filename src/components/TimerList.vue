<template>
  <div class="flex flex-col gap-y-2 items-center">
    <template v-for="timer in timers">
      <Timer :label="timer.label" :secondsLeft="timer.secondsLeft" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/Timer.vue'

defineProps(['timers'])
</script>
