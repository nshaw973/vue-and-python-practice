<script setup>
import { ref, watch } from "vue";
import Search from "../Search/Search.vue";
import { getView } from "./sideUtils";

const props = defineProps({
  view: {
    type: String,
    default: "Home",
  },
});

const data = ref(null);
watch(
  () => props.view,
  async (newView) => {
    data.value = null;
    data.value = await getView(newView);
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
