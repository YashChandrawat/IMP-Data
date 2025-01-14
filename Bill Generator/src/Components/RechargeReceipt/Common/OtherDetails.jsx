const OtherDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Other Details
      </h3>

      <div className="px-6 pb-6 flex flex-col gap-6">
        {/* Upper Section */}
        <div className="flex gap-4">
          {/* Bill From Date */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-md font-medium text-gray-600">
              Bill From Date
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
              onChange={handleChange}
            />
          </div>
          {/* Bill To Date */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-md font-medium text-gray-600">
              Bill To Date
            </label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Middle Section */}
        <div className="flex gap-4">
          {/* Billing Time */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-md font-medium text-gray-600">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
              onChange={handleChange}
            />
          </div>
          {/* Service */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="block text-gray-500 font-medium">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select One</option>
              <option value="Postpaid">Postpaid</option>
              <option value="Prepaid">Prepaid</option>
            </select>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex gap-4">
          {/* Payment In */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-md font-medium text-gray-600">
              Payment In
            </label>
            <select
              name="paymentIn"
              value={formData.paymentIn}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select One</option>
              <option value="Advance">Advance</option>
              <option value="Immediate">Immediate</option>
            </select>
          </div>
          {/* Billing Cycle */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="block text-gray-500 font-medium ">
              Billing Cycle
            </label>
            <select
              name="billingCycle"
              value={formData.billingCycle}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select One</option>
              <option value="Monthly">Monthly</option>
              <option value="Quaterly">Quaterly</option>
              <option value="Half Yearly">Half Yearly</option>
              <option value="Annual">Annual</option>
            </select>
          </div>
        </div>
        {/* Mobile No */}
        <div className="flex flex-col gap-2 w-[100%]">
          <label className="text-md font-medium text-gray-600">Mobile No</label>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
