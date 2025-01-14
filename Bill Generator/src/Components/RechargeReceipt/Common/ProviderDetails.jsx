const ProviderDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Provider Details
      </h3>

      <div className="px-6 pb-6 flex flex-col gap-6">
        {/* Restaurant  Name */}
        <div className="flex flex-col gap-2 w-[100%]">
          <label className="text-md font-medium text-gray-600">
            Provider Name
          </label>
          <input
            type="text"
            name="providerName"
            value={formData.providerName}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Restaurant  Address */}
        <div className="flex flex-col gap-2 w-[100%]">
          <label className="text-md font-medium text-gray-600">
            Provider Address
          </label>
          <input
            type="text"
            name="providerAddress"
            value={formData.providerAddress}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Billing Date */}
        <div className="flex flex-col gap-2 w-[100%]">
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

export default ProviderDetails;
