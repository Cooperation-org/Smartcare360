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

const haveAndDontOptions = [
  { value: true, label: "Have" },
  { value: false, label: "Do Not Have" },
];
</script>

<template>
  <UForm :schema="schema" :state="state" @submit.prevent="onSubmit" class="grid gap-5 px-5 py-10">
    <URadioGroup
      v-model="state.haveLivingWill"
      name="have_living_will"
      legend="Living Will"
      :options="haveAndDontOptions"
    />
    <UFormGroup label="Upload Living Will Document">
      <UInput
        v-model="state.livingWill"
        type="file"
        name="living_will"
        size="sm"
        class="inline-block"
        icon="i-heroicons-folder"
      />
    </UFormGroup>
  </UForm>
</template>
