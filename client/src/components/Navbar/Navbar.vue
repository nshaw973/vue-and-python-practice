<script setup>
</script>

<template>
  <nav class="w-svw h-fit flex justify-between p-1">
    <!-- Title -->
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
    <!-- Options -->
    <div>
      <RouterLink to="/about" class="px-2">About</RouterLink>
      <RouterLink to="/login" class="px-2">Login</RouterLink>
    </div>
  </nav>
</template>
