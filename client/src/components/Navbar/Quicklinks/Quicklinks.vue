<script setup>
import { upperCase } from "@/utils";
const links = [
  { id: "classes" },
  { id: "spells" },
  { id: "monsters" },
  { id: "features" },
];
</script>

<template>
  <section class="flex flex-row justify-evenly mx-auto">
    <div v-for="link in links" class="flex justify-center px-2 w-1/4 m-1">
      <RouterLink :to="`/view/${link.id}`" class="underline">{{
        upperCase(link.id)
      }}</RouterLink>
    </div>
  </section>
</template>
