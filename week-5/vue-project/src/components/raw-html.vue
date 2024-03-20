<script setup lang="ts">
const rawHtml = '<span style="color: red">RAW HTML</span>'
</script>

<template>
    {{ rawHtml }}
    <div v-html="rawHtml"></div>
</template>