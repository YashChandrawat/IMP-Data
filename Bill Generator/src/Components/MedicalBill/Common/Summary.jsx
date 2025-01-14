import { useState } from "react";

const Summary = ({
  formData,
  handleAddRow,
  handleRemoveRow,
  handleSummaryChange,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Summary</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.summaryBills.map((bill, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={bill.desc}
                  onChange={(e) =>
                    handleSummaryChange(index, "desc", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={bill.details}
                  onChange={(e) =>
                    handleSummaryChange(index, "details", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  value={bill.price}
                  onChange={(e) =>
                    handleSummaryChange(index, "price", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {/* <input
                  type="number"
                  value={bill.total}
                  onChange={(e) =>
                    handleSummaryChange(index, "total", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                /> */}
                <p className="w-full p-2 border border-gray-300 rounded">
                  {bill.price}
                </p>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center flex gap-2">
                <button
                  onClick={() => handleRemoveRow(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <button
                  onClick={handleAddRow}
                  className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
