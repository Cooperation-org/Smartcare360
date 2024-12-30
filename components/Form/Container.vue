<script setup lang="ts">
defineProps<{ secondHeader: string }>();
</script>

<template>
  <div class="bg-stone-50 rounded-2xl shadow-xl mb-5 overflow-hidden">
    <div class="bg-blue-600 h-3 width-full"></div>
    <div class="flex gap-2.5 flex-col bg-white shadow-md p-5">
      <h1 class="text-4xl">AZ Tender Hands</h1>
      <h2 class="text-2xl">{{ secondHeader }}</h2>

      <span class="text-rose-600">* Indicates required question</span>
    </div>

    <slot></slot>
  </div>
</template>
