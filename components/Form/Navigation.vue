<script setup lang="ts">
const { initPage, onPageChange } = defineProps<{ initPage?: number; onPageChange?: (num: number) => void }>();

const page = ref(initPage ?? 1);

const MAX_PAGE_COUNT = 9;

function next() {
  page.value += 1;
  if (onPageChange) onPageChange(page.value);
}

function prev() {
  page.value -= 1;
  if (onPageChange) onPageChange(page.value);
}
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="col-start-1">
      <UButton v-if="page !== 1" type="button" size="xl" color="gray" variant="outline" @click="prev">Previous</UButton>
    </div>
    <p class="col-start-2 text-center">{{ page }} of {{ MAX_PAGE_COUNT }}</p>
    <div class="flex flex-row-reverse col-start-3">
      <UButton v-if="page !== MAX_PAGE_COUNT" type="button" size="xl" @click="next">Next</UButton>
    </div>
  </div>
</template>
