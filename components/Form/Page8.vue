<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { BINARY_OPTIONS, BINARY_OR_NA_OPTIONS } from "~/constants/constants";

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
      <UFormGroup label="Electrical Safety" required> </UFormGroup>
      <UCheckbox
        v-model="state.page8.electricalSafety.groundFault"
        name="electrical_safety"
        label="Ground fault interrupters on outlets near bathroom and kitchen sinks"
      />
      <UCheckbox
        v-model="state.page8.electricalSafety.electricalCords"
        name="electrical_safety"
        label="Electrical cords in safe condition"
      />
      <UCheckbox
        v-model="state.page8.electricalSafety.switchesHaveCovers"
        name="electrical_safety"
        label="Electrical switches and outlet boxes have covers"
      />
    </div>

    <div class="grid gap-2">
      <UFormGroup label="Building Services" required> </UFormGroup>
      <UCheckbox v-model="state.page8.buildingServices.heat" name="building_services" label="Heat" />
      <UCheckbox v-model="state.page8.buildingServices.sewer" name="building_services" label="Sewer" />
      <UCheckbox v-model="state.page8.buildingServices.phone" name="building_services" label="Phone" />
      <UCheckbox v-model="state.page8.buildingServices.water" name="building_services" label="Water" />
      <UCheckbox v-model="state.page8.buildingServices.electricity" name="building_services" label="Electricity" />
    </div>

    <div class="grid gap-2">
      <UFormGroup label="Safety Equipment" required> </UFormGroup>
      <UCheckbox v-model="state.page8.safetyEquipment.smokeDetector" name="safety_equipment" label="Smoke Detector" />
      <UCheckbox
        v-model="state.page8.safetyEquipment.fireExtinguisher"
        name="safety_equipment"
        label="Fire Extinguisher"
      />
      <UCheckbox v-model="state.page8.safetyEquipment.flashlight" name="safety_equipment" label="Flashlight" />
    </div>

    <h3 class="text-xl">Fire Safety</h3>

    <UFormGroup label="Has the local Fire Department been notified that this is a Special Needs Residence?" required>
      <URadioGroup
        v-model="state.page8.fireSafety.notifiedFireDepartment"
        name="notified_fire_department"
        :options="BINARY_OR_NA_OPTIONS"
      />
    </UFormGroup>

    <UFormGroup label="Fire Department Emergency Number" required>
      <UInput
        v-model="state.page8.fireSafety.emergencyNumber"
        name="fire_department_emergency_number"
        class="inline-block"
      />
    </UFormGroup>

    <h3 class="text-xl">Personal Safety</h3>

    <UFormGroup label="Does parking allow safe access to home?">
      <URadioGroup v-model="state.page8.personalSafety.safeParking" name="safe_parking" :options="BINARY_OPTIONS" />
    </UFormGroup>

    <UFormGroup label="Parking Location">
      <UInput v-model="state.page8.personalSafety.parkingLocation" name="parking_location" class="inline-block" />
    </UFormGroup>

    <UFormGroup label="Describe any apparent safety risks associated with this residence">
      <UInput
        v-model="state.page8.personalSafety.risksWithinResidence"
        name="risks_within_residence"
        class="inline-block"
      />
    </UFormGroup>

    <UFormGroup label="Describe procedures to minimize risks">
      <UInput v-model="state.page8.personalSafety.howMinimizeRisks" name="how_minimize_risks" class="inline-block" />
    </UFormGroup>

    <UFormGroup label="Any pet issues?">
      <UInput v-model="state.page8.personalSafety.petIssues" name="pet_issues" class="inline-block" />
    </UFormGroup>

    <div class="grid gap-2">
      <UFormGroup label="Walkways"> </UFormGroup>
      <UCheckbox
        v-model="state.page8.walkways.clear"
        name="walkways"
        label="Clear, adequately lit, free of trip hazards Detector"
      />
      <UCheckbox
        v-model="state.page8.walkways.safe"
        name="walkways"
        label="Safe, unobstructed emergency escape route"
      />
      <UCheckbox
        v-model="state.page8.walkways.maintained"
        name="walkways"
        label="Provisions made for maintaing outdoor walkways"
      />
      <UCheckbox
        v-model="state.page8.walkways.hasHandrails"
        name="walkways"
        label="Handrails along stairways and balcony edges"
      />
    </div>
  </UForm>
</template>
