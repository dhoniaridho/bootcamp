<script setup lang="ts">
type Status = 'ACTIVE' | 'BAN' | 'INACTIVE'
const status: Status = "BAN"
</script>

<template>
  <div v-if="status === 'ACTIVE'">ACTIVE</div>
  <div v-else-if="status === 'BAN'">BANNED</div>
  <div v-else>INACTIVE</div>
</template>
