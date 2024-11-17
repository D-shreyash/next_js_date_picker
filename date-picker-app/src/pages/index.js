import React from "react";
import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-md bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Recurring Date Picker
      </h1>
      <div className="bg-gray-50 p-4 rounded-md shadow-sm">
        <DatePicker />
      </div>
    </div>
  );
}
