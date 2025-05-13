<!-- Script -->
<script setup>
/* Imports */
import { ref } from "vue";
import { useRouter } from "vue-router";
import { filters } from "./searchUtils";
/* Values */
const router = useRouter();
const query = ref("");
const selectedOption = ref("");

/* Functions */
const performSearch = () => {
  if (!selectedOption) return;
  router.push({
    path: "/search/results",
    query: {
      filter: selectedOption.value,
      q: query.value,
    },
  });
  query.value = "";
  selectedOption.value = null;
};

const updateSelection = (value) => {
  selectedOption.value = selectedOption.value === value ? '' : value;  // Toggle selection
};
</script>

<!-- Template -->
<template>
  <section class="flex flex-row rounded-xl">
    <form @submit.prevent="performSearch" class="w-full">
      <!-- Searchbar -->
      <section class="flex flex-row p-1">
        <input
          v-model="query"
          placeholder="Search..."
          type="text"
          name="query"
          id="query"
          class="text-black w-full rounded-l-xl p-1"
        />
        <button
          type="submit"
          class="pi pi-search p-1 rounded-r-xl bg-white"
          style="color: black"
        ></button>
      </section>
      <!-- Filter -->
      <section class="pl-2">
        <h1>Filters:</h1>
        <div v-for="filter in filters" class="text-sm">
          <input
            type="checkbox"
            :id="filter.value"
            :name="filter.name"
            :value="filter.value"
            :checked="selectedOption === filter.value"
            @change="updateSelection(filter.value)"
          />
          <label :for="filter.value">{{ filter.name }}</label>
        </div>
      </section>
    </form>
  </section>
</template>
