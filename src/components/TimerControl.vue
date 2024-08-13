<template>
  <button
    type="button"
    class="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    @click="func()"
  >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
defineProps<{
  func: (id: number) => void
  text: string
}>()
</script>
