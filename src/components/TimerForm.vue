<template>
  <div>
    <h2 class="text-lg mb-4">Form</h2>
    <form class="grid grid-cols-3 gap-4">
      <TimeComponentInput label="Hours:" v-model="hours" />
      <TimeComponentInput label="Minutes:" v-model="minutes" />
      <TimeComponentInput label="Seconds:" v-model="seconds" />
    </form>
  </div>
</template>

<script setup lang="ts">
import TimeComponentInput from '@/components/TimeComponentInput.vue'
import { ref } from 'vue'

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
</script>
