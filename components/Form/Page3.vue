<script setup lang="ts">
const { state } = defineProps<{ state: ReturnType<typeof useFormState>["state"] }>();
</script>

<template>
  <div class="grid gap-2">
    <UFormGroup label="Share Information With" required> </UFormGroup>
    <UCheckbox v-model="state.page3.shareWith.parents" name="share_with" label="Parents" />
    <UCheckbox v-model="state.page3.shareWith.spouse" name="share_with" label="Spouse" />
    <UCheckbox v-model="state.page3.shareWith.siblings" name="share_with" label="Siblings" />
    <UCheckbox v-model="state.page3.shareWith.children" name="share_with" label="Children" />
    <UCheckbox v-model="state.page3.shareWith.stepchildren" name="share_with" label="Stepchildren" />
    <UCheckbox v-model="state.page3.shareWith.grandparents" name="share_with" label="Grandparents" />
    <UCheckbox v-model="state.page3.shareWith.auntsAndUncles" name="share_with" label="Aunts/Uncles" />
  </div>

  <UFormGroup label="Other Family Members to Share With" required>
    <UInput v-model="state.page3.otherShareWith" name="other_share_with" class="inline-block" />
  </UFormGroup>

  <UFormGroup label="DO NOT Share Information With" required>
    <UInput v-model="state.page3.dontShareWith" name="dont_share_with" class="inline-block" />
  </UFormGroup>
</template>
