const ISPDetails = ({ formData, handleChange, template2 }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Internet Provider Details
      </h3>

      <div className="px-6 pb-6 flex gap-6">
        {/* ISP Name */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Internet Service Provider Name
          </label>
          <input
            type="text"
            name="ispName"
            value={formData.ispName}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* ISP Address */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Internet Service Provider Address
          </label>
          <input
            type="text"
            name="ispAddress"
            value={formData.ispAddress}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>

      {template2 && (
        <div className="px-6 pb-6 flex gap-6">
          {/* Description */}
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-md font-medium text-gray-600">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div className="px-6 pb-6 flex gap-6">
        {/* Bill Account Number */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Bill Account Number
          </label>
          <input
            type="text"
            name="billAccNumber"
            value={formData.billAccNumber}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Billing Date */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Billing Date
          </label>
          <input
            type="date"
            name="billingDate"
            value={formData.billingDate}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ISPDetails;
