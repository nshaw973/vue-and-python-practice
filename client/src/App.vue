<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";
import { RouterView } from "vue-router";
const viewNavbar = ref(false);
const toggleNavbar = () => {
  viewNavbar.value = !viewNavbar.value;
};
const closeNavbar = () => {
  if (viewNavbar.value) {
    viewNavbar.value = false;
  }
};
</script>
<template>
  <div class="min-h-svh flex flex-row overflow-hidden">
    <div v-if="!viewNavbar">
      <button
        @click="toggleNavbar"
        class="pi pi-align-justify z-40 fixed bg-slate-600 bg-opacity-75 rounded-r-xl text-white w-fit p-4 mt-4"
      ></button>
    </div>
    <Navbar v-if="viewNavbar" />
    <div class="flex flex-grow bg-slate-200" @click="closeNavbar">
      <RouterView class="bg-slate-100 w-10/12 mx-auto shadow" />
    </div>
  </div>
</template>
