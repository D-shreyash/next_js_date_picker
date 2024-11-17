const RecurrenceOptions = ({ onChange, recurrenceType }) => {
  return (
    <div className="mt-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Recurrence Type:
      </label>
      <select
        value={recurrenceType}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
