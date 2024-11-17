import { create } from "zustand";

// Zustand store to manage the recurrence logic
export const useDatePickerStore = create((set) => ({
  recurrenceType: "daily", // Default recurrence type
  startDate: "",         // Start date of recurrence
  endDate: null,           // Optional end date
  selectedDates: [],       // List of selected dates

  // Actions to update the state
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));
