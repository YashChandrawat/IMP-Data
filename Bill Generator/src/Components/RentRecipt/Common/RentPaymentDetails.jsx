const RentPaymentDetails = ({ formData, handleChange, template3 }) => {
  return (
    <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
        Payment Details
      </h3>
      <div className="px-6 pb-8 flex flex-col gap-4">
        <div className="flex gap-6">
          {/* From Date */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {template3 && (
            <div className="w-[50%]">
              <label className="block text-gray-500 font-medium mb-1">
                To Date
              </label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
          {/* Currency Type */}
          <div className="w-[50%]">
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
        </div>

        <div className="flex gap-6">
          {/* Salary Amount */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              Rent Amount:
            </label>
            <input
              type="number"
              name="rentAmount"
              value={formData.rentAmount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Salary Month */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              Salary Month
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Card">Card</option>
            </select>
          </div>
        </div>

        <div className="w-[50%]">
          <label className="block text-gray-500 font-medium mb-1">Month</label>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RentPaymentDetails;
