<!-- Script -->
<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { apiData } from "@/utils/API";
const route = useRoute();
const data = ref(null);
const subData = ref(null)
const loading = ref(true);

const fetchResults = async () => {
  loading.value = true;
  data.value = null;
  try {
    const response = await apiData(route.query.q, route.query.filter, null);
    if (!response.results) {
      data.value = response;
    } else {
      data.value = response.results;
    }
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    loading.value = false;
    console.log(data.value)
  }
};

const viewItem = async (url) => {
  try {
    const response = await apiData(null, null, url)
    subData.value = response;
  } catch (err) {
    throw new Error(`An Error has occurred: ${err}`)
  } finally {
    console.log(subData.value)
  }
}

// Watch for route query changes
watch(
  () => route.query,
  (newQuery) => {
    if (newQuery.q || newQuery.filter) {
      fetchResults();
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col">
  <h1>Search Results:</h1>
  <div v-if="subData">
    <h1>{{ subData.name }} Spell Level: {{ subData.level }}</h1>
    <h1>School: {{ subData.school.name }}</h1>
    <ul class="flex flex-row">
      <li v-for="cClass in subData.classes" class="mx-2">{{ cClass.name }}</li>
    </ul>
  </div>
  <section class="flex flex-wrap justify-center">
    <div v-if="loading">Loading...</div>
    <div v-else-if="data" v-for="item in data" class=" w-1/3 md:w-1/6 p-2 m-2 bg-slate-400">
      <h1 class="underline font-bold">{{ item.name }}</h1>
      <button @click="viewItem(item.url)">View More...</button>
    </div>
  </section>
  </div>
</template>
