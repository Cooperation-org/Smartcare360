<script setup lang="ts">
const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();
</script>

<template>
  <div class="grid grid-cols-2 gap-5">
    <UFormGroup label="Emergency Contact #1" required>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="state.page6.emergencyContact1.name"
          placeholder="Name"
          name="emergency_contact_1_name"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.emergencyContact1.phone"
          placeholder="Phone"
          name="emergency_contact_1_phone"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.emergencyContact1.relationship"
          placeholder="Relationship"
          name="emergency_contact_1_relationship"
          class="inline-block"
          required
        />
      </div>
    </UFormGroup>

    <UFormGroup label="Emergency Contact #2" required>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="state.page6.emergencyContact1.name"
          placeholder="Name"
          name="emergency_contact_2_name"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.emergencyContact2.phone"
          placeholder="Phone"
          name="emergency_contact_2_phone"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.emergencyContact2.relationship"
          placeholder="Relationship"
          name="emergency_contact_2_relationship"
          class="inline-block"
          required
        />
      </div>
    </UFormGroup>
  </div>

  <h3 class="text-xl">Medical Contacts</h3>
  <div class="grid grid-cols-2 gap-5">
    <UFormGroup label="Doctor" required>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="state.page6.medicalContacts.doctor.name"
          placeholder="Name"
          name="doctor_name"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.medicalContacts.doctor.phone"
          placeholder="Phone"
          name="doctor_phone"
          class="inline-block"
          required
        />
      </div>
    </UFormGroup>

    <UFormGroup label="Pharmacy" required>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="state.page6.medicalContacts.pharmacy.name"
          placeholder="Name"
          name="pharmacy_name"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.medicalContacts.pharmacy.phone"
          placeholder="Phone"
          name="pharmacy_phone"
          class="inline-block"
          required
        />
      </div>
    </UFormGroup>

    <UFormGroup label="Ambulance Service" required>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="state.page6.medicalContacts.ambulanceService.name"
          placeholder="Name"
          name="ambulance_service_name"
          class="inline-block"
          required
        />
        <UInput
          v-model="state.page6.medicalContacts.ambulanceService.phone"
          placeholder="Phone"
          name="ambulance_service_phone"
          class="inline-block"
          required
        />
      </div>
    </UFormGroup>
  </div>
</template>
