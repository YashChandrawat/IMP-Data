const BookPaymentDetails = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
        Payment Details
      </h3>
      <div className="px-6 pb-8 flex flex-col gap-4">
        <div className="flex gap-6">
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

          {/* Payment Method */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select One</option>
              <option value="Cash">Cash</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Quantity */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Book Price */}
          <div className="w-[50%]">
            <label className="block text-gray-500 font-medium mb-1">
              Book Price
            </label>
            <input
              type="number"
              name="bookPrice"
              value={formData.bookPrice}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPaymentDetails;
