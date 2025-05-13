<script setup>
import logo from "./../../assets/img/logo.png";
import logo_sm from "./../../assets/img/logo-sm.png";
import { ref } from "vue";
import Sidebar from "./Sidebar/Sidebar.vue";

const viewSidebar = ref(false);
const currentView = ref("");
const options = [
  { name: "Search", route: "/search", i: "pi pi-search" },
  { name: "Home", route: "/", i: "pi-home" },
  { name: "Login", route: "/login", i: "pi-user" },
  { name: "Settings", route: "/settings", i: "pi-cog" },
];

const closeSidebar = () => {
  viewSidebar.value = false;
  currentView.value = "";
};

const toggleSidebar = (name) => {
  if (currentView.value === name) {
    closeSidebar();
  } else {
    viewSidebar.value = true;
    currentView.value = name;
  }
};
</script>

<template>
  <!-- Navbar -->
  <nav class="flex flex-col p-2 text-white bg-slate-950 h-screen w-[150px]">
    <RouterLink to="/">
      <img
        :src="viewSidebar ? logo_sm : logo"
        class="invert"
        :class="{ 'w-8 p-1': viewSidebar }"
      />
    </RouterLink>
    <section v-for="option in options" class="flex flex-col">
      <button
        @click="toggleSidebar(option.name)"
        class="flex flex-row hover:bg-slate-600 rounded-xl px-2"
      >
        <i :class="`my-2 pi ${option.i}`"></i>
        <h1 v-if="!viewSidebar" class="m-auto">
          {{ option.name }}
        </h1>
      </button>
    </section>
  </nav>
  <!-- Sidebar -->
  <section
    v-if="viewSidebar"
    class="flex flex-col h-screen fixed left-[45px] z-40 bg-slate-800 text-white w-48 p-2 shadow-xl"
  >
    <div class="flex flex-row justify-between w-full">
      <h1 class="text-xl">{{ currentView }}</h1>
      <button @click="closeSidebar" class="pi pi-times"></button>
    </div>
    <Sidebar :view="currentView" />
  </section>
</template>
