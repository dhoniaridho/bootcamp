<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
  watch,
  watchEffect
} from 'vue'

type User = {
  name: string
  createdAt: Date
}

const user = ref<User>({
  name: 'username',
  createdAt: new Date()
})

onBeforeMount(() => {
  console.log('before mount')
})

console.log('setup')

const formatedDate = computed(() => {
  return user.value.createdAt.getMilliseconds()
})

const updateDate = () => {
  user.value.createdAt = new Date()
}

watchEffect(() => {
  console.log(formatedDate.value, 'watch effect')
})

watch(formatedDate, () => {
  console.log('berubah')
})

onMounted(() => {
  console.log('on mounted')
})

onBeforeUpdate(() => {
  console.log('before update')
})

onUpdated(() => {
  console.log('updated')
})

onBeforeUnmount(() => {
  console.log('before unmount')
})
</script>
<template>
  {{ user.createdAt }}
  <button @click="updateDate">click</button>
  <div>FOrmated Date{{ formatedDate }}</div>
  <div>{{ user.createdAt.getMilliseconds() }}</div>
  <div>{{ user.createdAt.getMilliseconds() }}</div>
</template>
