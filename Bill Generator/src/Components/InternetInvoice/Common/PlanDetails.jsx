const PlanDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Plan Details
      </h3>

      <div className="px-6 pb-6 flex gap-6">
        {/* Traffic Plan Speed */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Traffic Plan Speed
          </label>
          <select
            name="trafficPlanSpeed"
            value={formData.trafficPlanSpeed}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select One</option>
            <option value="10MBPS">10MBPS</option>
            <option value="20MBPS">20MBPS</option>
            <option value="40MBPS">40MBPS</option>
            <option value="50MBPS">50MBPS</option>
            <option value="100MBPS">100MBPS</option>
            <option value="150MBPS">150MBPS</option>
            <option value="200MBPS">200MBPS</option>
            <option value="500MBPS">500MBPS</option>
            <option value="1GBPS">1GBPS</option>
          </select>
        </div>

        {/* Traffic Plan Package */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Traffic Plan Speed
          </label>
          <select
            name="trafficPlanPackage"
            value={formData.trafficPlanPackage}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select One</option>
            <option value="Limited">Limited</option>
            <option value="Unlimited">Unlimited</option>
            <option value="FUP">FUP</option>
          </select>
        </div>

        {/* Traffic Plan */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Traffic Plan Speed
          </label>
          <select
            name="trafficPlan"
            value={formData.trafficPlan}
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
    </div>
  );
};

export default PlanDetails;
