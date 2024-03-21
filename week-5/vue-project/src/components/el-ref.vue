<script setup lang="ts">
import { onMounted, ref } from 'vue'

const div = ref<HTMLElement>()

onMounted(() => {
  console.log(div.value)
})
</script>

<template>
  <div ref="div"></div>
</template>
