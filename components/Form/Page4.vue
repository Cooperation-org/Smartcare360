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
      <UFormGroup label="I authorize release of the following records" required> </UFormGroup>
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.historyAndPhysical"
        name="release_medical_records"
        label="History and Physical"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.dischargeSummary"
        name="release_medical_records"
        label="Discharge Summary"
      />
      <UCheckbox v-model="state.page4.releaseMedicalRecords.consults" name="release_medical_records" label="Consults" />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.progressNotes"
        name="release_medical_records"
        label="Progress Notes"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.laboratoryResults"
        name="release_medical_records"
        label="Laboratory Results"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.radiologyResults"
        name="release_medical_records"
        label="Radiology Results"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.operativeReports"
        name="release_medical_records"
        label="Operative Reports"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.healthCareDirectives"
        name="release_medical_records"
        label="Health Care Directives"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.medicationList"
        name="release_medical_records"
        label="Medication List"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.physicianOrders"
        name="release_medical_records"
        label="Physician's Orders"
      />
      <UCheckbox
        v-model="state.page4.releaseMedicalRecords.flowSheets"
        name="release_medical_records"
        label="Flow Sheets"
      />
    </div>
  </UForm>
</template>
