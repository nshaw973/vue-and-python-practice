<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <div class="min-h-svh flex flex-row overflow-hidden">
    <Navbar/>
    <div class="flex flex-grow bg-slate-700 ml-12">
      <RouterView class="bg-slate-100 w-10/12 mx-auto shadow" />\
    </div>
  </div>
</template>
