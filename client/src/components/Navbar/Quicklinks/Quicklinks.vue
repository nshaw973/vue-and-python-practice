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
  <section class="flex flex-col justify-evenly mx-auto">
    <div v-for="link in links">
      <RouterLink :to="`/view/${link.id}`" class="underline">{{
        upperCase(link.id)
      }}</RouterLink>
    </div>
  </section>
</template>
