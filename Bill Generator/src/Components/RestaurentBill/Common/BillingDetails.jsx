const BillingDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Order Details
      </h3>

      <div className="px-6 pb-6 flex gap-6">
        {/* Table No */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Table Number
          </label>
          <input
            type="number"
            name="tableNo"
            value={formData.tableNo}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Invoice Number */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Invoice Number
          </label>
          <input
            type="number"
            name="invoiceNo"
            value={formData.invoiceNo}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="px-6 pb-6 flex gap-6">
        {/* Bill Date */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">Bill Date</label>
          <input
            type="date"
            name="billDate"
            value={formData.billDate}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Billing Time */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Billing Time
          </label>
          <input
            type="time"
            name="billTime"
            value={formData.billTime}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
