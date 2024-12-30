<script setup lang="ts">
const MAX_PAGE_COUNT = 9;

const { initPage, onPageChange } = defineProps<{ initPage?: number; onPageChange?: (num: number) => void }>();

const page = ref(initPage ? parseInt(initPage.toString(), 10) : 1);

if (page.value > MAX_PAGE_COUNT || page.value < 0) page.value = 1;

function go(delta: number) {
  page.value += delta;
  if (onPageChange) onPageChange(page.value);
}

// To trigger the onPageChange if it exists and sync the parent with the component
go(0);
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="col-start-1">
      <UButton v-if="page !== 1" type="button" size="xl" color="gray" variant="outline" @click="go(-1)"
        >Previous</UButton
      >
    </div>
    <p class="col-start-2 text-center">{{ page }} of {{ MAX_PAGE_COUNT }}</p>
    <div class="flex flex-row-reverse col-start-3">
      <UButton v-if="page !== MAX_PAGE_COUNT" type="button" size="xl" @click="go(1)">Next</UButton>
    </div>
  </div>
</template>
