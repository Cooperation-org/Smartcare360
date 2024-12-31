<script setup lang="ts">
const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();

const haveAndDontOptions = [
  { value: true, label: "Have" },
  { value: false, label: "Do Not Have" },
];
</script>

<template>
  <URadioGroup
    v-model="state.page1.haveLivingWill"
    name="have_living_will"
    legend="Living Will"
    :options="haveAndDontOptions"
  />
  <UFormGroup label="Upload Living Will Document">
    <UInput
      v-model="state.page1.livingWill"
      type="file"
      name="living_will"
      size="sm"
      class="inline-block"
      icon="i-heroicons-folder"
    />
  </UFormGroup>

  <URadioGroup
    v-model="state.page1.haveHealthCarePowerOfAttorney"
    name="have_healthcare_power_of_attorney"
    legend="Healthcare Power of Attorney"
    :options="haveAndDontOptions"
  />
  <UFormGroup label="Upload Power of Attorney Document">
    <UInput
      v-model="state.page1.healthCarePowerOfAttorney"
      name="healthcare_power_of_attorney"
      type="file"
      size="sm"
      class="inline-block"
      icon="i-heroicons-folder"
    />
  </UFormGroup>

  <URadioGroup
    v-model="state.page1.haveDnr"
    name="have_dnr"
    legend="DNR (Do Not Resuscitate)"
    :options="haveAndDontOptions"
  />
  <UFormGroup label="Upload DNR Document">
    <UInput v-model="state.page1.dnr" name="dnr" type="file" size="sm" icon="i-heroicons-folder" class="inline-block" />
  </UFormGroup>

  <h3>If you have chosen not to sign a Living Will and/or Power of Attorney is it because of:</h3>
  <URadioGroup
    v-model="state.page1.bcReligiousBeliefs"
    name="bc_religious_beliefs"
    legend="Religious beliefs"
    :options="[
      { value: true, label: 'Yes' },
      { value: false, label: 'No' },
    ]"
  />

  <UFormGroup label="Religious Preference" required>
    <UInput v-model="state.page1.religiousPreference" name="religious_preference" class="inline-block" />
  </UFormGroup>
</template>
