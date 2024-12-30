import { z } from "zod";
import { LANGUAGES } from "~/constants/languages";

const schema = z.object({
  page1: z.object({
    haveLivingWill: z.boolean(),
    livingWill: z.any(),

    haveHealthCarePowerOfAttorney: z.boolean(),
    healthCarePowerOfAttorney: z.any(),

    haveDnr: z.boolean(),
    dnr: z.any(),

    bcReligiousBeliefs: z.boolean(),

    religiousPreference: z.string(),
  }),

  page2: z.object({
    fullName: z.string(),
    contactInformation: z.object({
      phoneNumber: z.string(),
      alternativePhoneNumber: z.string(),
      address: z.string(),
    }),
    primaryLanguage: z.enum(LANGUAGES),

    receivedNoticeOfPrivacyPractices: z.boolean(),
    acknowledgeHIPAAPrivacyRules: z.boolean(),
  }),
});

const state = reactive({
  page1: {
    haveLivingWill: false,
    livingWill: undefined,

    haveHealthCarePowerOfAttorney: false,
    healthCarePowerOfAttorney: undefined,

    haveDnr: false,
    dnr: undefined,

    bcReligiousBeliefs: false,
    religiousPreference: undefined,
  },

  page2: {
    fullName: undefined,
    contactInformation: {
      phoneNumber: undefined,
      alternativePhoneNumber: undefined,
      address: undefined,
    },
    primaryLanguage: undefined,

    receivedNoticeOfPrivacyPractices: false,
    acknowledgeHIPAAPrivacyRules: false,
  },
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
