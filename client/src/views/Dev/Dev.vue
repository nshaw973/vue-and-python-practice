<!-- Delete this before Deployment  -->
<script setup>
</script>

<template>
    <div class="flex flex-col">
      <h1>Test Area</h1>
      <div v-if="loading">loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <div v-else-if="data" class="flex flex-wrap justify-center">

      </div>
    </div>
  </template>