import React, { useState } from "react";
import MiniCalendar from "./MiniCalendar";
import { useDatePickerStore } from "./store";

const DatePicker = () => {
  const { recurrenceType, setRecurrenceType, setStartDate, startDate, endDate, setEndDate } = useDatePickerStore();

  const handleStartDateChange = (e) => {
    // const date = new Date(e.target.value);
    // setStartDate(date);
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    const date = new Date(e.target.value);
    setEndDate(date);
  };

  return (
    <div className="date-picker p-4">
      <h2 className="text-xl font-semibold mb-4">Date Picker</h2>

      <div className="mb-4">
        <label htmlFor="start-date" className="block text-sm font-medium">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor=" end-date" className="block text-sm font-medium">End Date (Optional)</label>
        <input
          type="date"
          id="end-date"
          onChange={handleEndDateChange}
          className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="recurrence-type" className="block text-sm font-medium">Recurrence Type</label>
        <select
          id="recurrence-type"
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value)}
          className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <MiniCalendar
        startDate={startDate}
        endDate={endDate}
        recurrenceType={recurrenceType}
      />
    </div>
  );
};

export default DatePicker;














// import React, { useState } from "react";
// import MiniCalendar from "./MiniCalendar";
// import { useDatePickerStore } from "./store";

// const DatePicker = () => {
//   const { recurrenceType, setRecurrenceType, setStartDate, startDate, endDate, setEndDate } = useDatePickerStore();
//   const [startInputDate, setStartInputDate] = useState("");

//   const handleStartDateChange = (e) => {
//     const date = new Date(e.target.value);
//     setStartDate(date);
//     setStartInputDate(e.target.value);
//   };

//   const handleEndDateChange = (e) => {
//     const date = new Date(e.target.value);
//     setEndDate(date);
//   };

//   return (
//     <div className="date-picker p-4">
//       <h2 className="text-xl font-semibold mb-4">Date Picker</h2>

//       <div className="mb-4">
//         <label htmlFor="start-date" className="block text-sm font-medium">Start Date</label>
//         <input
//           type="date"
//           id="start-date"
//           value={startInputDate}
//           onChange={handleStartDateChange}
//           className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor=" end-date" className="block text-sm font-medium">End Date (Optional)</label>
//         <input
//           type="date"
//           id="end-date"
//           onChange={handleEndDateChange}
//           className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="recurrence-type" className="block text-sm font-medium">Recurrence Type</label>
//         <select
//           id="recurrence-type"
//           value={recurrenceType}
//           onChange={(e) => setRecurrenceType(e.target.value)}
//           className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//         >
//           <option value="daily">Daily</option>
//           <option value="weekly">Weekly</option>
//           <option value="monthly">Monthly</option>
//           <option value="yearly">Yearly</option>
//         </select>
//       </div>

//       <MiniCalendar
//         startDate={startDate}
//         endDate={endDate}
//         recurrenceType={recurrenceType}
//       />
//     </div>
//   );
// };

// export default DatePicker;
