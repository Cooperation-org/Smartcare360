import { z } from "zod";
import { LANGUAGES } from "~/constants/languages";

const FORM_VALUE_LS_KEY = "form_value";

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

  page3: z.object({
    shareWith: z.object({
      parents: z.boolean(),
      spouse: z.boolean(),
      siblings: z.boolean(),
      children: z.boolean(),
      stepchildren: z.boolean(),
      grandparents: z.boolean(),
      auntsAndUncles: z.boolean(),
    }),
    otherShareWith: z.string(),
    dontShareWith: z.string(),
  }),

  page4: z.object({
    releaseMedicalRecords: z.object({
      historyAndPhysical: z.boolean(),
      dischargeSummary: z.boolean(),
      consults: z.boolean(),
      progressNotes: z.boolean(),
      laboratoryResults: z.boolean(),
      radiologyResults: z.boolean(),
      operativeReports: z.boolean(),
      healthCareDirectives: z.boolean(),
      medicationList: z.boolean(),
      physicianOrders: z.boolean(),
      flowSheets: z.boolean(),
    }),
  }),
});

const defaultState = {
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

  page3: {
    shareWith: {
      parents: false,
      spouse: false,
      siblings: false,
      children: false,
      stepchildren: false,
      grandparents: false,
      auntsAndUncles: false,
    },
    otherShareWith: undefined,
    dontShareWith: undefined,
  },

  page4: {
    releaseMedicalRecords: {
      historyAndPhysical: false,
      dischargeSummary: false,
      consults: false,
      progressNotes: false,
      laboratoryResults: false,
      radiologyResults: false,
      operativeReports: false,
      healthCareDirectives: false,
      medicationList: false,
      physicianOrders: false,
      flowSheets: false,
    },
  },
};

const state = reactive(defaultState);

watch(
  state,
  (val) => {
    localStorage.setItem(FORM_VALUE_LS_KEY, JSON.stringify(val));
  },
  { deep: true },
);

export function useFormState() {
  onMounted(() => {
    const found = localStorage.getItem(FORM_VALUE_LS_KEY);
    if (found) {
      const lsState = JSON.parse(found);
      state.page1 = lsState.page1;
      state.page2 = lsState.page2;
    }
  });

  return { schema, state };
}
