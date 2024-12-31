<script setup lang="ts">
import { BINARY_OPTIONS } from "~/constants/constants";

const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();
</script>

<template>
  <UFormGroup label="Is the direct Care Worker a family member" required>
    <URadioGroup
      v-model="state.page9.careWorkerFamilyMember"
      name="care_worker_is_family_member"
      :options="BINARY_OPTIONS"
    />
  </UFormGroup>

  <h3 class="text-xl">Direct Care Worker Information</h3>

  <UFormGroup label="Full Name">
    <UInput v-model="state.page9.careWorker.fullName" name="careworker_fullname" class="inline-block" />
  </UFormGroup>

  <UFormGroup label="Contact Phone Number">
    <UInput v-model="state.page9.careWorker.phoneNumber" name="careworker_phone_number" class="inline-block" />
  </UFormGroup>

  <h3 class="text-xl">Service Information</h3>

  <UFormGroup label="Service Start Date">
    <UInput v-model="state.page9.serviceInformation.startDate" name="service_start_date" class="inline-block" />
  </UFormGroup>

  <UFormGroup label="Total Approved Hours">
    <div class="flex flex-col gap-2.5">
      <p class="text-sm">Weekdays (Monday-Friday, 8 a.m. to 5 p.m.)</p>
      <UInput
        v-model="state.page9.serviceInformation.approvedWeekdaysHours"
        name="service_approved_weekdays_hours"
        class="inline-block max-w-64"
      />
      <p class="text-sm">Evenings &amp; weekends (Monday-Friday after 5 p.m., any hours Saturday-Sunday)</p>
      <UInput
        v-model="state.page9.serviceInformation.approvedEveningsAndWeekendsHours"
        name="service_approved_evenings_and_weekends_hours"
        class="inline-block max-w-64"
      />
    </div>
  </UFormGroup>

  <div class="grid gap-2">
    <UFormGroup label="Agreement Confirmation"> </UFormGroup>
    <UCheckbox
      v-model="state.page9.agreementConfirmation.fulfillResponsibilities"
      name="agreement_confirmation"
      label="I agree to fulfill all consumer responsibilities as outlined in the manual"
      required
    />
    <UCheckbox
      v-model="state.page9.agreementConfirmation.understandResponsibilities"
      name="agreement_confirmation"
      label="I understand the Direct Care Worker responsibilities"
      required
    />
    <UCheckbox
      v-model="state.page9.agreementConfirmation.understandAZTenderHandsIsFiscalAgent"
      name="agreement_confirmation"
      label="I understand that AZ Tender Hands will be the fiscal agent"
      required
    />
  </div>
</template>
