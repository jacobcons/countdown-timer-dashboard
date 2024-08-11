<template>
  <div>
    <h2 class="text-lg mb-4">Form</h2>
    <form class="grid grid-cols-3">
      <TimeComponentInput />
      <TimeComponentInput />
      <TimeComponentInput />
    </form>
  </div>
</template>

<script setup lang="ts">
import TimeComponentInput from '@/components/TimeComponentInput.vue'
</script>
