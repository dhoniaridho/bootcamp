<script setup lang="ts">
const users = ['user a', 'user b', 'user c', 'user a']

const posts = [
  {
    title: 'Post',
    user: {
      name: 'user a'
    }
  },
  {
    title: 'Post',
    user: {
      name: 'user b'
    }
  },
  {
    title: 'Post',
    user: {
      name: 'user a'
    }
  },
]
</script>

<template>
  <div v-for="(user, index) in users" :key="index">{{ user }}</div>
  <div v-for="(post, i) in posts" :key="i">
    <div>
        title =  {{ post.title }}
    </div>
    <div>
        creator =  {{ post.user.name }}
    </div>
  </div>
</template>
