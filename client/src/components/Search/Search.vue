<!-- Script -->
<script setup>
/* Imports */
import { ref } from "vue";
import { useRouter } from "vue-router";
/* Values */
const router = useRouter();
const query = ref("");
const selectedOption = ref(null);
const options = [
  { id: 1, name: "spells" },
  { id: 2, name: "monsters" },
  { id: 3, name: "items" },
];
/* Functions */
const performSearch = () => {
  if(!selectedOption) return
  router.push({
    path: "/search/results",
    query: {
      q: query.value,
      filter: selectedOption.value,
    },
  });
  query.value = ''
  selectedOption.value = null
};
</script>

<!-- Template -->
<template>
  <section class="flex flex-row bg-amber-950 py-1">
    <form @submit.prevent="performSearch" class="m-auto">
      <select v-model="selectedOption" class="text-black">
        <option disabled selected>Filter by...</option>
        <option v-for="option in options" :key="option.id" :value="option.name">
          {{ option.name }}
        </option>
      </select>
      <input
        v-model="query"
        placeholder="Search..."
        type="text"
        name="query"
        id="query"
      />
      <button type="submit" class="px-2 bg-slate-500">Search</button>
    </form>
  </section>
</template>
