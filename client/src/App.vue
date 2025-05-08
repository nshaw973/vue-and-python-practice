<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router";
import Search from "./components/Search/Search.vue";
</script>
<template>
  <div class="min-h-svh flex flex-col overflow-hidden">
    <Navbar />
    <Search />
    <div class="flex flex-grow bg-slate-200">
      <RouterView class="bg-slate-100 w-10/12 mx-auto shadow" />
    </div>
    <Footer />
  </div>
</template>
