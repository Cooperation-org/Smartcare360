<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { schema, state } = useFormState();

const route = useRoute();
const pageQuery = route.query.page;

const page = ref(pageQuery ? +pageQuery : 1);

const secondHeader = ref(getHeader(page.value));

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}

function onPageChange(newPage: number) {
  page.value = newPage;
  useRouter().push({ query: { page: page.value } });
}

function getHeader(page: number): string {
  switch (page) {
    case 1:
      return "Advance Directive Instructions";
    case 2:
      return "Personal Information";
    case 3:
      return "Authorization to Share Information";
    case 4:
      return "Medical Records Release";
    case 5:
      return "Service Plan";
    case 6:
      return "Emergency Information";
    case 7:
      return "Backup Plan";
    case 8:
      return "Home Safety Assessment";
    case 9:
      return "Direct Care Worker Agreement";
    default:
      return "";
  }
}

watch(page, (val) => {
  secondHeader.value = getHeader(val);
});
</script>

<template>
  <UContainer class="my-10">
    <FormContainer :second-header="secondHeader">
      <FormPage1 v-if="page === 1" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage2 v-if="page === 2" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage3 v-if="page === 3" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage4 v-if="page === 4" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage5 v-if="page === 5" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage6 v-if="page === 6" :state="state" :schema="schema" :on-submit="onSubmit" />
      <!-- <FormPage7 v-if="page === 7" :state="state" :schema="schema" :on-submit="onSubmit" /> -->
      <!-- <FormPage8 v-if="page === 8" :state="state" :schema="schema" :on-submit="onSubmit" /> -->
      <!-- <FormPage9 v-if="page === 9" :state="state" :schema="schema" :on-submit="onSubmit" /> -->
    </FormContainer>

    <FormNavigation :init-page="page" :on-page-change="onPageChange" />
  </UContainer>
</template>
