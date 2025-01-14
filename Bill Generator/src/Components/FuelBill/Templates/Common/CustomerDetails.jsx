const CustomerDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="bg-white rounded-[2rem]  space-y-4 border-2 border-gray-200">
        <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
          Customer Details
        </h3>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <div>
            <label className="block text-gray-500 font-medium mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[40%]">
              <label className="block text-gray-500 font-medium mb-1">
                Vehicle Number
              </label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-[50%]">
              <label className="block text-gray-500 font-medium mb-1">
                Vehicle Type:
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Vehicle Type</option>
                <option value="Diesal">Diesal</option>
                <option value="Petrol">Petrol</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
