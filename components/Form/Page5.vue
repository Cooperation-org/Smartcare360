<script setup lang="ts">
const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();
</script>

<template>
  <div class="grid gap-2">
    <UFormGroup label="Approved Tasks" required> </UFormGroup>
    <UCheckbox v-model="state.page5.tasks.bathing" name="approved_tasks" label="Bathing, Hygiene and Grooming" />
    <UCheckbox v-model="state.page5.tasks.dressing" name="approved_tasks" label="Dressing" />
    <UCheckbox v-model="state.page5.tasks.eating" name="approved_tasks" label="Eating" />
    <UCheckbox v-model="state.page5.tasks.laundry" name="approved_tasks" label="Laundry" />
    <UCheckbox v-model="state.page5.tasks.housekeeping" name="approved_tasks" label="Light Housekeeping" />
    <UCheckbox v-model="state.page5.tasks.mealPreparation" name="approved_tasks" label="Meal Preparation" />
    <UCheckbox v-model="state.page5.tasks.mobility" name="approved_tasks" label="Mobility and Walking" />
    <UCheckbox v-model="state.page5.tasks.shopping" name="approved_tasks" label="Shopping and Errands" />
    <UCheckbox v-model="state.page5.tasks.socialActivities" name="approved_tasks" label="Social Activities" />
    <UCheckbox v-model="state.page5.tasks.toileting" name="approved_tasks" label="Toileting and Incontinence Care" />
    <UCheckbox v-model="state.page5.tasks.transfer" name="approved_tasks" label="Transfer and Positioning" />
  </div>

  <UFormGroup label="Schedule Preferences" required>
    <UInput v-model="state.page5.schedulePreferences" name="schedual_preferences" class="inline-block" />
  </UFormGroup>

  <UFormGroup label="Cultural Standards and Related Needs" required>
    <UInput v-model="state.page5.culturalStandards" name="cultural_standards" class="inline-block" />
  </UFormGroup>
</template>
