import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import RestaurentDetails from "../Common/RestaurentDetails";
import OrderDetails from "../Common/OrderDetails";
import BillingDetails from "../Common/BillingDetails";
import CustomerDetails from "../../InternetInvoice/Common/CustomerDetails";
import PaymentDetails from "../../InternetInvoice/Common/PaymentDetails";

const RestaurentTemplate1 = ({ template1, template2 }) => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    restaurentName: "",
    restaurentAddress: "",
    tableNo: "",
    invoiceNo: "",
    billDate: "",
    billTime: "",
    customerName: "",
    logoUrl: "",
    subTotal: 0,
    orderName: [{ desc: "", itemPrice: "", quantity: "", total: 0 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      restaurentName: "",
      restaurentAddress: "",
      tableNo: "",
      invoiceNo: "",
      billDate: "",
      billTime: "",
      customerName: "",
      logoUrl: "",
      subTotal: 0,
      orderName: [{ desc: "", itemPrice: "", quantity: "", total: 0 }],
    });
    setLogoDetail("URL");
    setSelectedFile(null);
  };

  const handleAddRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      orderName: [
        ...prevData.orderName,
        { desc: "", itemPrice: "", quantity: "", total: 0 },
      ],
    }));
  };

  const handleRemoveRow = (index) => {
    setFormData((prevData) => {
      const updatedOrderName = prevData.orderName.filter((_, i) => i !== index);
      const updatedSubTotal = updatedOrderName.reduce(
        (sum, item) => sum + item.total,
        0
      );
      return {
        ...prevData,
        orderName: updatedOrderName,
        subTotal: updatedSubTotal,
      };
    });
  };

  const handleOrderChange = (e, index, field) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedOrderName = prevData.orderName.map((item, i) => {
        if (i === index) {
          const updatedItem = { ...item, [field]: value };

          // Calculate total for this item if quantity and itemPrice are provided
          if (field === "quantity" || field === "itemPrice") {
            const quantity =
              field === "quantity" ? +value : +updatedItem.quantity;
            const itemPrice =
              field === "itemPrice" ? +value : +updatedItem.itemPrice;
            updatedItem.total = quantity * itemPrice || 0;
          }

          return updatedItem;
        }
        return item;
      });

      const updatedSubTotal = updatedOrderName.reduce(
        (sum, item) => sum + item.total,
        0
      );

      return {
        ...prevData,
        orderName: updatedOrderName,
        subTotal: updatedSubTotal,
      };
    });
  };

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <RestaurentDetails formData={formData} handleChange={handleChange} />

          <OrderDetails
            formData={formData}
            handleAddRow={handleAddRow}
            handleOrderChange={handleOrderChange}
            handleRemoveRow={handleRemoveRow}
          />

          <BillingDetails formData={formData} handleChange={handleChange} />

          <CustomerDetails
            formData={formData}
            handleChange={handleChange}
            temp={true}
          />

          <PaymentDetails
            formData={formData}
            handleChange={handleChange}
            temp={true}
          />
          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill(
                template1
                  ? "restaurentTemplate1"
                  : template2
                  ? "restaurentTemplate2"
                  : "",
                "Nunito Sans",
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
          <div id="restaurentTemplate1">
            <div className=" max-w-sm mx-auto p-6 bg-white text-black font-pressStart2P border border-gray-300 rounded shadow-md">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-4">
                <div className="bg-gray-300 p-4 rounded-full mb-2">
                  <img
                    src={formData.logoUrl}
                    alt="Logo"
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-center text-lg font-bold">WELCOME!!!</p>
                <p className="text-center font-bold text-xl">
                  {formData.restaurentName}
                </p>
                <p className="text-center">{formData.restaurentAddress}</p>
                <p className="text-center italic">Original Receipt</p>
              </div>

              {/* Date and Time */}
              <div className="flex justify-between text-sm mb-2">
                <p>
                  Date:{" "}
                  <span className="font-semibold">{formData.billDate}</span>
                </p>
                <p>
                  Time:{" "}
                  <span className="font-semibold">{formData.billTime}</span>
                </p>
              </div>

              {/* Customer Details */}
              <div className="text-sm mb-4">
                <p>{formData.customerName}</p>
                <p>
                  Table:{" "}
                  <span className="font-semibold">#{formData.tableNo}</span>
                </p>
                <p>
                  Receipt No.:{" "}
                  <span className="font-semibold">{formData.invoiceNo}</span>
                </p>
              </div>

              {/* Order Details */}
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left">Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Price</th>
                    <th className="text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.orderName.map((item, index) => (
                    <tr key={index}>
                      <td>{item.desc}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center">₹{item.itemPrice}</td>
                      <td className="text-right">₹{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="text-sm mb-4">
                <div className="flex justify-between">
                  <p>Sub Total:</p>
                  <p className="font-semibold">₹{formData.subTotal}</p>
                </div>
                <div className="flex justify-between">
                  <p>CGST: 9%</p>
                  <p className="font-semibold">
                    ₹{(formData.subTotal * 0.09).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>SGST: 9%</p>
                  <p className="font-semibold">
                    ₹{(formData.subTotal * 0.09).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total:</p>
                  <p>₹{(formData.subTotal * 1.18).toFixed(2)}</p>
                </div>
              </div>

              {/* Payment Mode */}
              <div className="text-sm mb-4">
                <p>
                  MODE: <span className="font-bold">Cash</span>
                </p>
              </div>

              {/* Footer Message */}
              <div className="text-center text-xs mt-4">
                <p>SAVE PAPER SAVE NATURE !!</p>
                <p>THANK YOU FOR A DELICIOUS MEAL.</p>
              </div>
            </div>
          </div>
        )}
        {template2 && (
          <div id="restaurentTemplate2">
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div className="w-[400px] bg-white border border-gray-300 rounded-lg p-5 shadow-md">
                {/* Logo */}
                <div className="flex justify-center mb-5">
                  <img
                    src={formData.logoUrl}
                    alt="Logo"
                    className="w-12 h-12"
                  />
                </div>
                {/* Store Info */}
                <div className="text-center font-bold text-lg">
                  {formData.restaurentName}
                  <p className="text-sm font-medium text-gray-500">
                    {formData.restaurentAddress}
                  </p>
                </div>
                <hr className="my-4 border-gray-300" />
                {/* Receipt Details */}
                <div className="text-sm mb-5">
                  <div className="flex justify-between">
                    <span>
                      Name: <strong>{formData.customerName}</strong>
                    </span>
                    <span>
                      Invoice No: <strong>{formData.invoiceNo}</strong>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      Table: <strong>#{formData.tableNo}</strong>
                    </span>
                    <span>
                      Date: <strong>{formData.billDate}</strong>
                    </span>
                  </div>
                </div>
                {/* Table */}
                <table className="w-full text-sm border-collapse border border-gray-300 mb-5">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-2 py-1">Item</th>
                      <th className="border border-gray-300 px-2 py-1">
                        Price
                      </th>
                      <th className="border border-gray-300 px-2 py-1">Qty</th>
                      <th className="border border-gray-300 px-2 py-1">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.orderName.map((item, index) => (
                      <tr key={index}>
                        <td>{item.desc}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-center">₹{item.itemPrice}</td>
                        <td className="text-right">₹{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Summary */}
                <div className="text-sm mb-5">
                  <div className="flex justify-between">
                    <span>Sub-Total:</span>
                    <span>₹{formData.subTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST: 9%</span>
                    <span>₹{(formData.subTotal * 0.09).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST: 9%</span>
                    <span>₹{(formData.subTotal * 0.09).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{(formData.subTotal * 1.18).toFixed(2)}</span>
                  </div>
                </div>
                {/* Footer */}
                <div className="text-center text-gray-500 text-xs">
                  <p>**SAVE PAPER SAVE NATURE !!**</p>
                  <p>Time: {formData.billTime}</p>
                </div>
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

export default RestaurentTemplate1;
