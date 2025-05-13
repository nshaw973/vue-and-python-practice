<script setup>
import { ref, watch } from "vue";
import Search from "../Search/Search.vue";

const props = defineProps({
  view: {
    type: String,
    default: "Home",
  },
});

const data = ref(null);

const getView = (view) => {
  switch (view) {
    case "Home":
      data.value = [{ name: "Home", link: "/" }];
      break;
    case "Login":
      data.value = [
        { name: "Login", link: "/login" },
        { name: "Signup", link: "/signup" }, // Fixed typo (was "Signup" as link)
      ];
      break;
    case "Settings":
      data.value = Array.from({ length: 4 }, (_, i) => ({
        name: `Option ${i + 1}`,
        link: "/",
      }));
      break;
    default:
      data.value = [];
  }
};

watch(
  () => props.view,
  (newView) => {
    data.value = null;
    getView(newView);
  },
  { immediate: true }
);
</script>

<template>
  <section v-if="data">
    <div v-for="link in data" :key="index">
      <RouterLink :to="link.link">{{ link.name }}</RouterLink>
    </div>
  </section>
  <section v-if="props.view === `Search`">
    <Search />
  </section>
</template>
