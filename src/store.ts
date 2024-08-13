import { reactive, ref } from 'vue'
import type { Timer } from '@/types.js'
import { defineStore } from 'pinia'

export const useTimersStore = defineStore('timers', () => {
  const timers = ref<Timer[]>([])
  return { timers }
})
