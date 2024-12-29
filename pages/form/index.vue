<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { schema, state } = useFormState();

const page = ref(1);

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}

function onPageChange(newPage: number) {
  page.value = newPage;
}
</script>

<template>
  <UContainer class="my-10">
    <FormContainer>
      <FormPage1 v-if="page === 1" :state="state" :schema="schema" :on-submit="onSubmit" />
      <FormPage2 v-if="page === 2" :state="state" :schema="schema" :on-submit="onSubmit" />
    </FormContainer>

    <FormNavigation :page="page" :on-page-change="onPageChange" />
  </UContainer>
</template>
