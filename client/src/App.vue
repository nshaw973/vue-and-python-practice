<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="min-h-svh flex flex-row overflow-hidden">
    <Navbar />
    <div class="flex flex-grow bg-slate-200">
      <RouterView class="bg-slate-100 w-10/12 mx-auto shadow" />
    </div>
  </div>
</template>
