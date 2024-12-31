<script setup lang="ts">
import { RESPONSE_TIME_FOR_BACKUP } from "~/constants/constants";

const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();
</script>

<template>
  <UFormGroup label="Preferred Response Time for Backup Care" required>
    <URadioGroup
      v-model="state.page7.preferredResponseTimeForBackup"
      name="response_time_for_backup"
      :options="RESPONSE_TIME_FOR_BACKUP"
    />
  </UFormGroup>

  <div class="grid gap-2">
    <UFormGroup label="Backup Providers" required> </UFormGroup>
    <UCheckbox
      v-model="state.page7.backupProviders.contactProviderAgency"
      name="backup_providers"
      label="Contact provider agency"
    />
    <UCheckbox
      v-model="state.page7.backupProviders.contactCaseManager"
      name="backup_providers"
      label="Contact case manager"
    />
    <UCheckbox v-model="state.page7.backupProviders.contactAHCCCS" name="backup_providers" label="Contact AHCCCS" />
    <UCheckbox
      v-model="state.page7.backupProviders.familyOrFriendsProvideCare"
      name="backup_providers"
      label="Family or friends provide care"
    />
  </div>

  <UFormGroup
    v-for="(bc, index) of state.page7.backupContacts"
    :key="index"
    :label="`Backup Contact #${index + 1}`"
    required
  >
    <div class="flex flex-col gap-2.5 max-w-64">
      <UInput v-model="bc.name" :name="`backup_contact_${index + 1}_name`" placeholder="Name" class="inline-block" />
      <UInput v-model="bc.phone" :name="`backup_contact_${index + 1}_phone`" placeholder="Phone" class="inline-block" />
      <UInput
        v-model="bc.relationship"
        :name="`backup_contact_${index + 1}_relationship`"
        placeholder="Relationship"
        class="inline-block"
      />
      <UInput
        v-model="bc.daysTimes"
        :name="`backup_contact_${index + 1}_days_times`"
        placeholder="Available Days/Times"
        class="inline-block"
      />
    </div>
  </UFormGroup>

  <UButton
    type="button"
    color="gray"
    class="inline-block w-64"
    size="lg"
    v-if="state.page7.backupContacts.length < 8"
    @click="
      state.page7.backupContacts.push({
        name: undefined,
        phone: undefined,
        relationship: undefined,
        daysTimes: undefined,
      })
    "
    >Add Another Backup Contact</UButton
  >
</template>
