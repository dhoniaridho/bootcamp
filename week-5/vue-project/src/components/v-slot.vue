<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  switch: ['DARK' | 'LIGHT']
}>()

onMounted(() => {
  console.log(props.title)
})

const onSwitchDark = () => {
  emit('switch', 'LIGHT')
}
</script>

<template>
  <header>
    {{ title }}
    <slot name="header"></slot>
    <button @click="onSwitchDark">Switch to dark</button>
  </header>
  <div class="bg-red">
    <slot></slot>
  </div>
  <footer>copyright {{ new Date().getFullYear() }}</footer>
</template>

<style>
.bg-red {
  background-color: red;
}
</style>
