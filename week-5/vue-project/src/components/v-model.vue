<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')

let nonReactive = ''

setTimeout(() => {
  console.log('a')
  nonReactive = 'TImeout'
}, 3000)
</script>

<template>
  {{
    (() => {
      console.log('render')
    })()
  }}
  NonReactive: {{ nonReactive }}
  <br />
  hasilnya: {{ input }}
  <br />
  <input v-model="input" type="text" name="" id="" />
</template>
