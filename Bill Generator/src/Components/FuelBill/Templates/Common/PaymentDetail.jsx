const PaymentDetail = ({ formData, setFormData, handleChange }) => {
  return (
    <>
      <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
        <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
          Payment Details
        </h3>
        <div className="px-6 pb-8 flex flex-col gap-4">
          {/* Currency Type */}
          <div>
            <label className="block text-gray-500 font-medium mb-1">
              Currency
            </label>
            <select
              name="currencyType"
              value={formData.currencyType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Currency Type</option>
              <option value="₹">Indian Rupees</option>
              <option value="$">Dollar</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-gray-500 font-medium mb-1">
                Fuel Rate:
              </label>
              <input
                type="number"
                name="fuelRate"
                value={formData.fuelRate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-600 font-medium mb-1">
                Total Amount:
              </label>
              <input
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-gray-600 font-medium mb-1">
                Fuel Bill Date:
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-600 font-medium mb-1">
                Fuel Bill Time:
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
