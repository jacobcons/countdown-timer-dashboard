<template>
  <h2 class="mb-8 text-2xl font-bold">Dashboard</h2>
  <TimerForm class="mb-8" />
  <TimerList class="mb-8" />
</template>

<script setup lang="ts">
import TimerForm from '@/components/TimerForm.vue'
import TimerList from '@/components/TimerList.vue'
import { ref } from 'vue'
import type { Timer } from '@/types.js'
</script>
