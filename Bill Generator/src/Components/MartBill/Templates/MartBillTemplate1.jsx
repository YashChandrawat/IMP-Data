import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import Wrapper from "../../Reuseable Components/Wrapper";
import Heading from "../../Reuseable Components/Heading";
import MartDetails from "../Common/MartDetails";
import BillingDetailsMart from "../Common/BillingDetailsMart";
import PaymentDetailsMart from "../Common/PaymentDetailsMart";
import { formatDate } from "../../Reusable Function/formatDate";

const MartBillTemplate1 = ({ template1, template2 }) => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    martName: "",
    martAddress: "",
    phoneNo: "",
    invoiceNo: "",
    fssaiNo: "",
    billDate: "",
    billTime: "",
    customerName: "",
    currencyType: "",
    paymentMethod: "",
    tax: "",
    itemDetails: [{ desc: "", price: "", quantity: "", subtotal: "" }],
    logoUrl: "",
    fileDownloadName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({});
    setLogoDetail("URL");
    setSelectedFile(null);
  };

  // Function to add a new row
  const addRow = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      itemDetails: [
        ...prevFormData.itemDetails,
        { name: "", desc: "", price: "", quantity: "", subtotal: "" },
      ],
    }));
  };

  // Function to remove a row (ensuring at least one row remains)
  const removeRow = (index) => {
    setFormData((prevFormData) => {
      const updatedItemDetails = [...prevFormData.itemDetails];
      updatedItemDetails.splice(index, 1);
      return { ...prevFormData, itemDetails: updatedItemDetails };
    });
  };

  // Function to handle input changes and update row data
  const handleChangeInRoomDetails = (index, field, value) => {
    setFormData((prevFormData) => {
      const updatedItemDetails = [...prevFormData.itemDetails];
      updatedItemDetails[index][field] = value;
      // Update subtotal if price or quantity is changed
      if (field === "price" || field === "quantity") {
        updatedItemDetails[index].subtotal =
          (updatedItemDetails[index].price || 0) *
          (updatedItemDetails[index].quantity || 0);
      }
      return { ...prevFormData, itemDetails: updatedItemDetails };
    });
  };

  function calculateTotal() {
    var total = 0;
    for (let index = 0; index < formData.itemDetails.length; index++) {
      total += formData.itemDetails[index].subtotal;
    }
    return total;
  }

  function calculateTax(tax, amount) {
    var taxPercent = tax / 100;
    var taxAmt = taxPercent * amount;

    return taxAmt.toFixed(2);
  }

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <MartDetails formData={formData} handleChange={handleChange} />

          <BillingDetailsMart formData={formData} handleChange={handleChange} />

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />
          <Wrapper>
            <Heading name={"Order Details"} />
            <div className="px-4">
              <table className="w-full border-collapse text-sm text-left">
                <thead className=" border-b text-center">
                  <tr>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Sub Total</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.itemDetails.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">
                        <textarea
                          className="w-full border rounded p-2"
                          value={row.desc}
                          onChange={(e) =>
                            handleChangeInRoomDetails(
                              index,
                              "desc",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          className="w-full border rounded p-2 text-right"
                          value={row.price}
                          onChange={(e) =>
                            handleChangeInRoomDetails(
                              index,
                              "price",
                              parseInt(e.target.value) || 0
                            )
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          className="w-full border rounded p-2 text-right"
                          value={row.quantity}
                          onChange={(e) =>
                            handleChangeInRoomDetails(
                              index,
                              "quantity",
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
                          disabled={formData.itemDetails.length === 1}
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

          <PaymentDetailsMart formData={formData} handleChange={handleChange} />

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill(
                `${template1 ? "martBillTemplate1" : "martBillTemplate2"}`,
                `${template1 ? "Space Mono" : "Nunito Sans"}`,
                formData
              )
            }
          >
            Print PDF
          </button>

          <button
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Bill Preview */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        {template1 && (
          <div id="martBillTemplate1">
            <div className="max-w-md p-4 border border-gray-300 rounded shadow font-spaceMono">
              <div className="text-center text-lg">
                <div className="flex flex-col items-center">
                  <img
                    src={formData.logoUrl}
                    alt="Logo"
                    className="w-20 h-20"
                  />
                  <p>{formData.martName}</p>
                  <p>{formData.martAddress}</p>
                  <p>Phone No: {formData.phoneNo}</p>
                  <p>FSSAI No.: {formData.fssaiNo}</p>
                  <h1 className=" text-lg mt-2">RETAIL INVOICE</h1>
                </div>
                <div className="text-left">
                  <p className="mt-2">
                    <span className="">BILL NO:</span> {formData.invoiceNo}
                  </p>
                  <p>
                    <span className="">BILL DATE:</span>{" "}
                    {formatDate(formData.billDate)}{" "}
                    <span className="">TIME:</span> {formData.billTime}
                  </p>
                </div>

                {/* Table */}
                <table className="w-full text-left border-collapse mt-4 border-b-2 border-dashed border-black">
                  <thead>
                    <tr className="border-y-2 border-dashed border-black">
                      <th className="py-2">Particulars</th>
                      <th className="py-2">Rate</th>
                      <th className="py-2">Qty</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.itemDetails.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-dotted border-gray-400"
                      >
                        <td className="py-2">{item.desc}</td>
                        <td className="py-2">₹ {item.price}</td>
                        <td className="py-2">{item.quantity}</td>
                        <td className="py-2 text-right">₹ {item.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-b border-dotted border-gray-400">
                      <td className="py-2"></td>
                      <td className="py-2 border-y-2 border-dashed border-black">
                        Total
                      </td>
                      <td className="py-2 border-y-2 border-dashed border-black"></td>
                      <td className="py-2 border-y-2 border-dashed border-black text-right">
                        ₹ {calculateTotal()}
                      </td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-400">
                      <td className="py-2"></td>
                      <td className="py-2">CGST</td>
                      <td className="py-2">{formData.tax / 2}%</td>
                      <td className="py-2 text-right">
                        {formData.currencyType}{" "}
                        {calculateTax(formData.tax, calculateTotal()) / 2}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2"></td>
                      <td className="py-2 border-b-2 border-dashed border-black">
                        SGST
                      </td>
                      <td className="py-2 border-b-2 border-dashed border-black">
                        {formData.tax / 2}%
                      </td>
                      <td className="py-2 border-b-2 border-dashed border-black text-right">
                        {formData.currencyType}{" "}
                        {calculateTax(formData.tax, calculateTotal()) / 2}
                      </td>
                    </tr>
                    <tr className="border-t border-dotted border-gray-400">
                      <td className="py-2"></td>
                      <td className="py-2">Net Amount</td>
                      <td className="py-2"></td>
                      <td className="py-2 text-right">
                        ₹{" "}
                        {Number(calculateTotal()) +
                          Number(calculateTax(formData.tax, calculateTotal()))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Footer */}
              <div className="text-center mt-4 text-lg">
                <p>
                  <span className="">
                    Payment Method: {formData.paymentMethod}
                  </span>
                </p>
                <p>
                  <span className="">Transaction ID:</span> 5PHIeZwuB70g
                </p>
                <p>
                  <span className="">
                    Customer Name: {formData.customerName}
                  </span>
                </p>
                <p className="text-center mt-2 mb-4">
                  Thank You! Please visit again
                </p>
              </div>
            </div>
          </div>
        )}
        {template2 && (
          <div id="martBillTemplate2">
            <div className="max-w-[30rem]  p-6 bg-white shadow-lg rounded-md font-nunito border border-gray-300">
              {/* Header Section */}
              <div className="text-center">
                <img
                  src={formData.logoUrl} // Replace with your logo
                  alt="Store Logo"
                  className="w-20 h-20 mx-auto"
                />
                <h1 className="text-lg font-semibold mt-3">
                  {formData.martName}
                </h1>
                <p className="mt-3 text-sm text-gray-500 font-medium">
                  {formData.martAddress}
                </p>
                <p className="text-gray-700 mt-3 text-[15px]">
                  <span className="font-semibold">FSSAI No.:</span>{" "}
                  {formData.fssaiNo}
                </p>
              </div>

              <div className="border-t border-dashed mt-6 border-gray-400 mb-6" />

              {/* Items Table */}
              <table className="w-full border-collapse text-sm ">
                <thead>
                  <tr className="border-b border-dashed border-gray-300 text-base">
                    <th className="py-4 text-left">Sn.</th>
                    <th className="py-4 text-left">Item Name</th>
                    <th className="py-4 text-right">Qty</th>
                    <th className="py-4 text-right">Net Amount</th>
                    <th className="py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.itemDetails.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t border-dashed border-gray-300"
                    >
                      <td className="py-4 text-left">{1}</td>
                      <td className="py-4">{item.desc}</td>
                      <td className="py-4 text-right">{item.quantity}</td>
                      <td className="py-4 text-right">₹ {item.price}</td>
                      <td className="py-4 text-right">₹ {item.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Subtotal */}
              <div className="flex justify-between mt-4 font-bold text-lg bg-[#fcbd024f] p-2 rounded-md">
                <span>Sub Total</span>
                <span>₹ {calculateTotal()}</span>
              </div>

              {/* Savings */}
              <div className="mt-4 border border-dashed border-green-500 p-2 text-sm">
                <p className="flex justify-between">
                  <span>Total Saving In ₹:</span>
                  <span>₹ {calculateTax(formData.tax, calculateTotal())}</span>
                </p>
                <p className="flex justify-between">
                  <span>Total Saving In %:</span>
                  <span>{formData.tax}%</span>
                </p>
              </div>

              {/* Total */}
              <div className="flex justify-between font-bold text-lg bg-[#fcbd024f] p-2 rounded-md">
                <span>Total</span>
                <span>₹ {calculateTotal()}</span>
              </div>

              {/* Footer */}
              <div className="mt-1 text-center text-sm text-gray-700">
                <p>Payment Method: {formData.paymentMethod}</p>
                <p>Transaction ID: {formData.invoiceNo}</p>
                <p>Customer Name: {formData.customerName}</p>
                <p className="mt-2">Thank You! Please visit again</p>
              </div>
            </div>
          </div>
        )}
        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default MartBillTemplate1;
