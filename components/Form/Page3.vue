<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

type ReturnUseFormState = ReturnType<typeof useFormState>;
type Schema = z.output<ReturnUseFormState["schema"]>;

const { onSubmit, state, schema } = defineProps<{
  onSubmit: (event: FormSubmitEvent<Schema>) => void;
  state: ReturnUseFormState["state"];
  schema: ReturnUseFormState["schema"];
}>();
</script>

<template>
  <UForm :schema="schema" :state="state" @submit.prevent="onSubmit" class="grid gap-5 px-5 py-10">
    <div class="grid gap-2">
      <UFormGroup label="Share Information With" required> </UFormGroup>
      <UCheckbox v-model="state.page3.shareWith.parents" name="share_with_parents" label="Parents" />
      <UCheckbox v-model="state.page3.shareWith.spouse" name="share_with_spouse" label="Spouse" />
      <UCheckbox v-model="state.page3.shareWith.siblings" name="share_with_siblings" label="Siblings" />
      <UCheckbox v-model="state.page3.shareWith.children" name="share_with_children" label="Children" />
      <UCheckbox v-model="state.page3.shareWith.stepchildren" name="share_with_stepchildren" label="Stepchildren" />
      <UCheckbox v-model="state.page3.shareWith.grandparents" name="share_with_grandparents" label="Grandparents" />
      <UCheckbox v-model="state.page3.shareWith.auntsAndUncles" name="share_with_aunts_uncles" label="Aunts/Uncles" />
    </div>
  </UForm>
</template>
