<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { LANGUAGES } from "~/constants/constants";

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
    <UFormGroup label="Full Name" required>
      <UInput v-model="state.page2.fullName" name="full_name" class="inline-block" />
    </UFormGroup>

    <UFormGroup label="Contact Information" required>
      <div class="flex flex-col gap-2.5 max-w-64">
        <UInput
          v-model="state.page2.contactInformation.phoneNumber"
          name="phone_number"
          placeholder="Phone Number"
          class="inline-block"
        />
        <UInput
          v-model="state.page2.contactInformation.alternativePhoneNumber"
          name="alt_phone_number"
          placeholder="Alternative Phone"
          class="inline-block"
        />
        <UInput
          v-model="state.page2.contactInformation.address"
          name="address"
          placeholder="Address"
          class="inline-block"
        />
      </div>
    </UFormGroup>

    <UFormGroup label="Primary Language" required>
      <USelect
        placeholder="Choose"
        v-model="state.page2.primaryLanguage"
        :options="[...LANGUAGES]"
        class="inline-block min-w-64"
      />
    </UFormGroup>

    <UCheckbox
      v-model="state.page2.receivedNoticeOfPrivacyPractices"
      name="received_privacy_practice_notice"
      label="I have received a copy of the Notice of Privacy Practices"
    />

    <UCheckbox
      v-model="state.page2.acknowledgeHIPAAPrivacyRules"
      name="acknowledge_hipaa"
      label="I acknowledge HIPAA Privacy Rules"
    />
  </UForm>
</template>
