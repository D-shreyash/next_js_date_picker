import React, { useEffect, useState } from "react";
import {
  format,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";

const MiniCalendar = ({ startDate, endDate, recurrenceType }) => {
  const [recurringDates, setRecurringDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Function to generate recurring dates based on recurrenceType
  const calculateRecurringDates = () => {
    if (!startDate) return;

    let dates = [];
    let current = new Date(startDate);

    // Continue until either the end date is reached or a reasonable number of dates is generated
    while (endDate ? current <= new Date(endDate) : dates.length < 50) {
      dates.push(new Date(current));

      switch (recurrenceType) {
        case "daily":
          current = addDays(current, 1);
          break;
        case "weekly":
          current = addWeeks(current, 1);
          break;
        case "monthly":
          current = addMonths(current, 1);
          break;
        case "yearly":
          current = addYears(current, 1);
          break;
        default:
          return;
      }
    }

    setRecurringDates(dates);
  };

  // Recalculate recurring dates when recurrenceType, startDate, or endDate changes
  useEffect(() => {
    calculateRecurringDates();
  }, [startDate, endDate, recurrenceType]);

  // Get all days of the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Mark recurring dates for the current month
  const markedDates = new Set(
    recurringDates
      .filter((date) => date.getMonth() === currentMonth.getMonth())
      .map((date) => format(date, "dd/MM/yyyy"))
  );

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-center">Calendar</h3>
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
        >
          Previous
        </button>
        <h4 className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h4>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="text-center font-medium text-sm">
            {day}
          </div>
        ))}

        {daysInMonth.map((date, index) => {
          const formattedDate = format(date, "dd/MM/yyyy");
          const isMarked = markedDates.has(formattedDate);
          return (
            <div
              key={index}
              className={`p-2 text-center text-sm font-medium rounded-lg ${
                isMarked
                  ? "bg-green-200 text-green-700"
                  : "bg-gray-100 text-gray-700"
              } hover:bg-gray-200`}
            >
              {format(date, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCalendar;
