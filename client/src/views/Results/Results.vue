<!-- Script -->
<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { apiData } from "@/utils/API";
import burnt_paper from "@/assets/img/burnt_paper.jpg";
const route = useRoute();
const data = ref(null);
const loading = ref(true);

const fetchResults = async () => {
  loading.value = true;
  data.value = null;
  try {
    const response = await apiData(route.query.q, route.query.filter);
    if (!response.results) {
      data.value = response;
    } else {
      data.value = response.results;
    }
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    loading.value = false;
  }
};
// Initial fetch
fetchResults();

// Watch for route query changes
watch(
  () => route.query,
  (newQuery) => {
    if (newQuery.q || newQuery.filter) {
      fetchResults();
    }
  },
  { immediate: false }
);
</script>

<template>
  <section class="flex flex-col w-svw">
    <h1>Search Results:</h1>
    <div v-if="data" class="flex flex-wrap justify-center w-full">
      <!-- More than one Result -->
      <div v-if="Array.isArray(data)" class="flex flex-wrap justify-center w-full">
        <div
          v-for="item in data"
          class="p-2 m-2 shadow rounded-xl w-1/3 burn_paper_bg"
        >
          <h1>{{ item.name }}, Level: {{ item.level }}</h1>
        </div>
      </div>
      <!-- Single Result -->
      <div v-else class="p-2 m-2 shadow rounded-xl w-1/3 burn_paper_bg">
        <h1>{{ data.name }}, Level: {{ data.level }}</h1>
        <h2>{{ data.casting_time }}</h2>
        <ul>
          <li>{{ data.range }}</li>
          <li>
            <p>{{ data.desc[0] }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="loading">Loading...</div>
  </section>
</template>
