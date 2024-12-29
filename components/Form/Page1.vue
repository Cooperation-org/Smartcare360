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

    <URadioGroup
      v-model="state.haveHealthCarePowerOfAttorney"
      name="have_healthcare_power_of_attorney"
      legend="Healthcare Power of Attorney"
      :options="haveAndDontOptions"
    />
    <UFormGroup label="Upload Power of Attorney Document">
      <UInput
        v-model="state.healthCarePowerOfAttorney"
        name="healthcare_power_of_attorney"
        type="file"
        size="sm"
        class="inline-block"
        icon="i-heroicons-folder"
      />
    </UFormGroup>

    <URadioGroup
      v-model="state.haveDnr"
      name="have_dnr"
      legend="DNR (Do Not Resuscitate)"
      :options="haveAndDontOptions"
    />
    <UFormGroup label="Upload DNR Document">
      <UInput v-model="state.dnr" name="dnr" type="file" size="sm" icon="i-heroicons-folder" class="inline-block" />
    </UFormGroup>

    <h3>If you have chosen not to sign a Living Will and/or Power of Attorney is it because of:</h3>
    <URadioGroup
      v-model="state.bcReligiousBeliefs"
      name="bc_religious_beliefs"
      legend="Religious beliefs"
      :options="[
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
      ]"
    />

    <UFormGroup label="Religious Preference" required>
      <UInput v-model="state.religiousPreference" name="religious_preference" class="inline-block" />
    </UFormGroup>
  </UForm>
</template>
