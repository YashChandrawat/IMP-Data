import React, { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";

const RoomDetails = ({
  formData,
  handleChangeInRoomDetails,
  addRow,
  removeRow,
}) => {
  return (
    <Wrapper>
      <Heading name={"Room Details"} />
      <div className="px-6 pb-6 flex flex-col gap-4">
        <table className=" w-full border-collapse text-sm text-left">
          <thead className=" border-b">
            <tr>
              <th className="px-4 py-2">Room type & Description</th>
              <th className="px-4 py-2">Rate</th>
              <th className="px-4 py-2">No of days</th>
              <th className="px-4 py-2">Sub Total</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.roomDetails.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <textarea
                    className="w-full border rounded p-2"
                    value={row.description}
                    onChange={(e) =>
                      handleChangeInRoomDetails(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="w-full border rounded p-2 text-right"
                    value={row.rate}
                    onChange={(e) =>
                      handleChangeInRoomDetails(
                        index,
                        "rate",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="w-full border rounded p-2 text-right"
                    value={row.days}
                    onChange={(e) =>
                      handleChangeInRoomDetails(
                        index,
                        "days",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </td>
                <td className="px-4 py-2 text-right">{row.subtotal}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
                    onClick={addRow}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                    onClick={() => removeRow(index)}
                    disabled={formData.roomDetails.length === 1} // Disables the button if only one row remains
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default RoomDetails;
