<!-- Script -->
<script setup>
/* Imports */
import { upperCase } from "@/utils";
import { apiData } from "@/utils/API";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
/* Values */
const data = ref(null);
const loading = ref(true);
const route = useRoute();
const currentPage = computed(() => route.params.type);
/* Get Data */
const fetchResults = async () => {
  if (!currentPage.value) return;
  loading.value = true;
  data.value = null;
  try {
    const response = await apiData("", route.params.type);
    data.value = response.results || response;
    console.log(data.value);
  } catch (err) {
    console.error("An error has occured: ", err);
  } finally {
    loading.value = false;
  }
};
/* Watch for view changes */
watch(
  currentPage,
  (newPageType, oldPageType) => {
    if (newPageType && newPageType !== oldPageType) {
      fetchResults();
    }
  },
  /* On view change */
  { immediate: true }
);
</script>

<template>
  <section>
    <h1>{{ upperCase(currentPage) }}:</h1>
    <!-- Loading -->
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>
    <!-- Data Loaded -->
    <div v-else-if="data" class="flex flex-wrap w-full justify-center">
      <section v-for="item in data" class="p-2 shadow m-2 w-1/3">
        <h1>{{ item.name }}</h1>
        <h1 v-if="item.level > 0">Spell Slot lvl: {{ item.level }}</h1>
        <h1 v-else-if="item.level === 0">Cantrip</h1>
        <RouterLink :to="`${item.url}`">view more...</RouterLink>
      </section>
    </div>
  </section>
</template>
