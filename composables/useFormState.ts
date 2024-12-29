import { z } from "zod";

const schema = z.object({
  haveLivingWill: z.boolean(),
  livingWill: z.any(),

  haveHealthCarePowerOfAttorney: z.boolean(),
  healthCarePowerOfAttorney: z.any(),

  haveDnr: z.boolean(),
  dnr: z.any(),

  bcReligiousBeliefs: z.boolean(),

  religiousPreference: z.string(),
});

const state = reactive({
  haveLivingWill: false,
  livingWill: undefined,

  haveHealthCarePowerOfAttorney: false,
  healthCarePowerOfAttorney: undefined,

  haveDnr: false,
  dnr: undefined,

  bcReligiousBeliefs: false,
  religiousPreference: undefined,
});

watch(
  state,
  (val) => {
    localStorage.setItem("form_value", JSON.stringify(val));
  },
  { deep: true },
);

export function useFormState() {
  return { schema, state };
}
