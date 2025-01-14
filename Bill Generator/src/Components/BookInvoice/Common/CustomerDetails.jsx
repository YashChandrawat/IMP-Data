const CustomerDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Customer Details
      </h3>

      <div className="px-6 pb-6 flex gap-6">
        {/* Name of Book */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Customer Name
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Publisher */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Purchased Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
