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
  if (!selectedOption) return;
  router.push({
    path: "/search/results",
    query: {
      q: query.value,
      filter: selectedOption.value,
    },
  });
  query.value = "";
  selectedOption.value = null;
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
      <section>
        
      </section>
    </form>
  </section>
</template>
