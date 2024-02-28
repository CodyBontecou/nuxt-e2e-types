<script setup lang="ts">
const { getUser } = useServerFunctions()
const userResponse = await getUser()
</script>

<template>
  <pre>
    {{ userResponse }}
  </pre>
</template>
