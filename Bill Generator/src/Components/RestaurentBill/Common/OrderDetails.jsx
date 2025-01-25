import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";

const OrderDetails = ({
  formData,
  handleOrderChange,
  handleAddRow,
  handleRemoveRow,
  tax,
}) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <Heading
        name={"Order Items"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        {formData.orderName.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 p-6 bg-white border border-gray-300 rounded-lg shadow-md mb-6"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Item {index + 1}
              </h3>
              <button
                type="button"
                onClick={() => handleRemoveRow(index)}
                className="text-red-500 hover:text-red-600 focus:outline-none"
                title="Remove Item"
              >
                ✖
              </button>
            </div>

            {/* Inputs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Description Field */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="desc"
                  value={item.desc}
                  onChange={(e) => handleOrderChange(e, index, "desc")}
                  placeholder="Item Description"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              {/* Item Price Field */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="itemPrice"
                  value={item.itemPrice}
                  onChange={(e) => handleOrderChange(e, index, "itemPrice")}
                  placeholder="Price"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              {/* Quantity Field */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleOrderChange(e, index, "quantity")}
                  placeholder="Quantity"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              {/* Tax Field */}
              {tax && (
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Tax
                  </label>
                  <input
                    type="number"
                    name="tax"
                    value={item.tax}
                    onChange={(e) => handleOrderChange(e, index, "tax")}
                    placeholder="Tax"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              )}

              {/* Total Field */}
              <div className="lg:col-span-1 flex items-center justify-between bg-gray-100 p-2 rounded-md border border-gray-300">
                <span className="text-gray-600 font-medium">Total</span>
                <p className="text-lg text-gray-800 font-semibold">
                  ₹{item.total || "0.00"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Add Item Button */}
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleAddRow}
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            + Add Item
          </button>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default OrderDetails;
