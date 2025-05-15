<script setup>
import logo from "./../../assets/img/logo.png";
import logo_sm from "./../../assets/img/logo-sm.png";
import { ref } from "vue";
import Sidebar from "./Sidebar/Sidebar.vue";

const viewSidebar = ref(false);
const currentView = ref(null);
const options = [
  { name: "Search", route: "/search", i: "pi pi-search" },
  { name: "Home", route: "/", i: "pi-home" },
  { name: "Login", route: "/login", i: "pi-user" },
  { name: "Settings", route: "/settings", i: "pi-cog" },
];

/* Extra Sidebar */
const closeSidebar = () => {
  viewSidebar.value = false;
  currentView.value = "";
};

const toggleSidebar = (name) => {
  if (currentView.value === name) {
    closeSidebar();
  } else {
    viewSidebar.value = true;
  }
};

const toggleExtras = (extra) => {
  currentView.value = extra
}
</script>

<template>
  <nav
    @mouseover="toggleSidebar"
    @mouseleave="closeSidebar"
    class="z-40 fixed flex flex-row"
  >
    <!-- Navbar -->
    <div class="flex flex-col p-2 text-white bg-slate-950 h-screen">
      <!-- Home Icon -->
      <div class="flex justify-center h-10 my-4">
        <RouterLink to="/">
          <img
            :src="!viewSidebar ? logo_sm : logo"
            class="invert h-full"
            :class="{ 'h-8': !viewSidebar }"
          />
        </RouterLink>
      </div>
      <!-- Options -->
      <section class="flex flex-col border-t-2 w-fit">
        <div
          v-for="option in options"
          @mouseover="toggleExtras(option.name)"
          class="flex flex-row hover:bg-slate-600 rounded-xl px-2 hover:cursor-pointer"
        >
          <i :class="`m-2 pi flex justify-start ${option.i}`"></i>
          <h1 v-if="viewSidebar" class="m-auto">
            {{ option.name }}
          </h1>
        </div>
      </section>
    </div>
    <section
      v-if="viewSidebar && currentView"
      class="flex flex-col h-screen bg-slate-800 text-white w-48 p-2 shadow-xl"
    >
      <div class="flex flex-row justify-between w-full">
        <h1 class="text-xl">{{ currentView }}</h1>
        <button @click="closeSidebar" class="pi pi-times"></button>
      </div>
      <Sidebar :view="currentView" />
    </section>
  </nav>
</template>
