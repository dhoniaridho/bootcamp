<script setup lang="ts">
import { ref } from 'vue'

type Status = 'ACTIVE' | 'BAN' | 'INACTIVE'
const status = ref<Status>('ACTIVE')
</script>

<template>
  <button @click="status = 'BAN'">ban</button>
  <button @click="status = 'ACTIVE'">active</button>
  <div v-if="status === 'ACTIVE'">
    <input />
  </div>
  <div v-else-if="status === 'BAN'">BANNED</div>
  <div v-else>INACTIVE</div>
</template>
