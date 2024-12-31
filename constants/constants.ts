export const LANGUAGES = ["English", "Arabic"] as const;
export const RESPONSE_TIME_FOR_BACKUP = [
  { value: "2-hours", label: "Within 2 hours" },
  { value: "today", label: "Today" },
  { value: "48-hours", label: "Within 48 hours" },
  { value: "next-visit", label: "Next scheduled visit" },
];
export const BINARY_OPTIONS = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];
export const BINARY_OR_NA_OPTIONS = [...BINARY_OPTIONS, { value: "N/A", label: "N/A" }];
