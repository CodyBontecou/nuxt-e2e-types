<script setup lang="ts">
import type { User } from './types/user'

const { data: userData } = await useFetch<User>('/api/test')
</script>

<template>
  <pre>
    {{ userData }}
  </pre>
</template>
