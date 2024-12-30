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

  page5: z.object({
    tasks: z.object({
      bathing: z.boolean(),
      dressing: z.boolean(),
      eating: z.boolean(),
      laundry: z.boolean(),
      housekeeping: z.boolean(),
      mealPreparation: z.boolean(),
      mobility: z.boolean(),
      shopping: z.boolean(),
      socialActivities: z.boolean(),
      toileting: z.boolean(),
      transfer: z.boolean(),
    }),
    schedulePreferences: z.string(),
    culturalStandards: z.string(),
  }),

  page6: z.object({
    emergencyContact1: z.object({
      name: z.string(),
      phone: z.string(),
      relationship: z.string(),
    }),
    emergencyContact2: z.object({
      name: z.string(),
      phone: z.string(),
      relationship: z.string(),
    }),
    medicalContacts: z.object({
      doctor: z.object({
        name: z.string(),
        phone: z.string(),
      }),
      pharmacy: z.object({
        name: z.string(),
        phone: z.string(),
      }),
      ambulanceService: z.object({
        name: z.string(),
        phone: z.string(),
      }),
    }),
  }),

  page7: z.object({}),

  page8: z.object({}),

  page9: z.object({}),
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

  page5: {
    tasks: {
      bathing: false,
      dressing: false,
      eating: false,
      laundry: false,
      housekeeping: false,
      mealPreparation: false,
      mobility: false,
      shopping: false,
      socialActivities: false,
      toileting: false,
      transfer: false,
    },
    schedulePreferences: undefined,
    culturalStandards: undefined,
  },

  page6: {
    emergencyContact1: {
      name: undefined,
      phone: undefined,
      relationship: undefined,
    },
    emergencyContact2: {
      name: undefined,
      phone: undefined,
      relationship: undefined,
    },
    medicalContacts: {
      doctor: {
        name: undefined,
        phone: undefined,
      },
      pharmacy: {
        name: undefined,
        phone: undefined,
      },
      ambulanceService: {
        name: undefined,
        phone: undefined,
      },
    },
  },

  page7: {},

  page8: {},

  page9: {},
};

const state = reactive(defaultState);

watch(state, saveToLS, { deep: true });

function saveToLS(val: typeof state | typeof defaultState) {
  localStorage.setItem(FORM_VALUE_LS_KEY, JSON.stringify(val));
}

export function useFormState() {
  onMounted(() => {
    // const found = localStorage.getItem(FORM_VALUE_LS_KEY);
    // if (found) {
    //   const lsState = JSON.parse(found);
    //   for (const key in state) {
    //     if (lsState[key]) {
    //       state[key as keyof typeof state] = lsState[key];
    //     }
    //   }
    //   return
    // } else {
    //   saveToLS(defaultState);
    // }
  });

  return { schema, state };
}
