const OrderDetails = ({
  formData,
  handleOrderChange,
  handleAddRow,
  handleRemoveRow,
  tax,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h3>
      {formData.orderName.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm mb-4"
        >
          {/* Description Field */}
          <div className="flex-1">
            <input
              type="text"
              name="desc"
              value={item.desc}
              onChange={(e) => handleOrderChange(e, index, "desc")}
              placeholder="Item Description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Item Price Field */}
          <div className="flex-1">
            <input
              type="number"
              name="itemPrice"
              value={item.itemPrice}
              onChange={(e) => handleOrderChange(e, index, "itemPrice")}
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Quantity Field */}
          <div className="flex-1">
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleOrderChange(e, index, "quantity")}
              placeholder="Quantity"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {tax && (
            <div className="flex-1">
              <input
                type="number"
                name="tax"
                value={item.tax}
                onChange={(e) => handleOrderChange(e, index, "tax")}
                placeholder="Tax"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          )}

          {/* Total Field */}
          <div className="flex-1 text-center">
            <p className="p-2 bg-gray-100 rounded-md border border-gray-300 text-gray-600 font-medium">
              ₹{item.total || "0.00"}
            </p>
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => handleRemoveRow(index)}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            title="Remove Item"
          >
            ✖
          </button>
        </div>
      ))}

      {/* Add Item Button */}
      <button
        type="button"
        onClick={handleAddRow}
        className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        + Add Item
      </button>
    </div>
  );
};

export default OrderDetails;
