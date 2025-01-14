import { useState } from "react";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import CustomerDetailsEcom from "../Common/CustomerDetailsEcom";
import printBill from "../../Utils/printBill";
import OrderDetails from "../../RestaurentBill/Common/OrderDetails";
import PaymentDetailsEcom from "../Common/PaymentDetailsEcom";

const ECommerceTemplate = ({ template1, template2, template3 }) => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    shippingAddress: "",
    soldByDetails: "",
    orderName: [{ desc: "", itemPrice: "", quantity: "", tax: "", total: 0 }],
    paymentMethod: "",
    currencyType: "",
    date: "",
    gstIn: "",
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

  const calculateItemTotal = (item) => {
    var temp = item.quantity * item.itemPrice;
    return temp;
  };

  const calculateSubtotal = () => {
    return formData.orderName.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  function calculateCGST(item) {
    var total = calculateItemTotal(item);
    var tax = Number(item.tax) + 100;
    var temp = (total / tax) * 100;
    console.log("Total : ", total);
    console.log("Tax : ", tax);
    console.log("Temp : ", temp.toFixed(2));
    return ((total - temp) / 2).toFixed(2);
  }
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <CustomerDetailsEcom
            formData={formData}
            handleChange={handleChange}
          />

          <OrderDetails
            formData={formData}
            handleAddRow={handleAddRow}
            handleOrderChange={handleOrderChange}
            handleRemoveRow={handleRemoveRow}
            tax={true}
          />

          <PaymentDetailsEcom formData={formData} handleChange={handleChange} />

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
                `${
                  template1
                    ? "eComTemp1"
                    : template2
                    ? "eComTemp2"
                    : "eComTemp3"
                }`,
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
        {template3 && (
          <div id="eComTemp3">
            <div className="font-nunito max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <img src={formData.logoUrl} alt="Logo" className="w-16 h-16" />
                <div className="text-right">
                  <p className="text-gray-600 text-lg">INVOICE</p>
                </div>
              </div>
              <div className="flex gap-4 justify-end bg-gray-200 px-2 rounded-sm">
                <p className="text-gray-600 text-sm">
                  Invoice No.:
                  <span className="font-semibold">#2728</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Date: <span className="font-semibold">{formData.date}</span>
                </p>
              </div>

              <div className="flex justify-between mt-2 ">
                {/* Invoice To */}
                <div className="mb-6">
                  <p className="text-gray-700 text-md font-semibold">
                    Invoice To: {formData.invoiceNo}
                  </p>
                  <p className="font-semibold">{formData.customerName}</p>
                  <p>{formData.shippingAddress}</p>
                </div>

                {/* Pay To */}
                <div className="mb-6 text-end">
                  <p className="text-gray-700 text-sm">Pay To:</p>
                  <p className="font-semibold">{formData.soldByDetails}</p>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full text-left border-collapse border border-gray-300 mb-6 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Qty</th>
                    <th className="border p-2">CGST</th>
                    <th className="border p-2">SGST</th>
                    <th className="border p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.orderName.map((item, index) => (
                    <tr key={index}>
                      <td className=" p-2">{item.desc}</td>
                      <td className=" p-2">{item.itemPrice}</td>
                      <td className=" p-2">{item.quantity}</td>
                      <td className=" p-2">
                        <p>{item.tax / 2}</p>
                        <p>₹{calculateCGST(item)}</p>
                      </td>
                      <td className=" p-2">
                        <p>{item.tax / 2}</p>
                        <p>₹{calculateCGST(item)}</p>
                      </td>
                      <td className=" p-2">
                        ₹ {calculateItemTotal(item).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <div className="bg-gray-300 flex gap-10">
                  <p className="text-sm">Subtotal</p>
                  <p className="font-semibold text-sm">
                    ₹ {calculateSubtotal().toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-md">Payment Info:</p>
                  <p>{formData.paymentMethod}</p>
                  <p>Amount: {calculateSubtotal().toFixed(2)}</p>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="text-lg flex flex-col text-center mt-2">
                <p className="font-semibold mb-2">Terms & Conditions:</p>
                <p>
                  This is an invoice for confirmation of the receipt of the
                  amount paid against for the service as described above. * Keep
                  this invoice and manufacturer box for warranty purpose .
                </p>
              </div>
            </div>
          </div>
        )}

        {template2 && (
          <div id="eComTemp2">
            <div className="font-nunito max-w-4xl mx-auto p-10 bg-white shadow-md border border-gray-200 rounded-lg">
              {/* Header */}
              <div className="flex flex-col mb-4 space-y-2">
                <img
                  src={formData.logoUrl}
                  alt="Logo"
                  className="w-16 h-16 mr-4"
                />
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold">
                    {"Your order is confirmed!"}
                  </h1>
                  <p className="text-lg">Hello {formData.customerName},</p>
                </div>
              </div>

              <hr className="mb-4" />

              {/* Order Details */}
              <div className="mb-6 text-sm">
                <div className="flex gap-4 flex-col">
                  <div className="flex gap-4 justify-between">
                    <div>
                      <p>
                        <span className="font-semibold">Order date </span>
                        <p className="text-lg">{formData.date}</p>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">GST No </span>
                        <p className="text-lg">{formData.gstIn}</p>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">Payment method </span>
                        <p className="text-lg">{formData.paymentMethod}</p>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between w-[66%]">
                    <div>
                      <p>
                        <span className="font-semibold">Order number </span>
                        <p className="text-lg">ORD1552145241</p>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">Shipping Address </span>
                        <p className="text-lg">{formData.shippingAddress}</p>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between w-[66%]">
                    <div>
                      <p>
                        <span className="font-semibold">Mobile number </span>
                        <p className="text-lg">{formData.mobileNo}</p>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">Sold By </span>
                        <p className="text-lg">{formData.soldByDetails}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mb-4" />

              {/* Receipt Summary */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4">Receipt Summary</h2>
                {formData.orderName.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-4 border-b pb-2 px-4"
                  >
                    <div className="w-1/3 text-sm">
                      <p className="font-semibold">{item.desc}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Rate: ₹{item.itemPrice}</p>
                    </div>
                    <div className="text-sm w-1/2 flex justify-between">
                      <div className="flex flex-col justify-between">
                        <span>CGST: {item.tax / 2}%</span>
                        <span>CGST Amt: </span>
                        <span>₹{calculateCGST(item)}</span>
                      </div>
                      <div className="flex flex-col justify-between">
                        <span>SGST: {item.tax / 2}%</span>
                        <span>SGST Amt:</span>
                        <span>₹{calculateCGST(item)}</span>
                      </div>
                    </div>
                    <div className="w-1/4 h-[4rem] flex justify-end">
                      <div className="font-bold text-xl flex justify-end text-end h-[100%] w-full">
                        <p>₹ {calculateItemTotal(item)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="flex justify-end mb-4 text-sm">
                <div>
                  <p className="flex justify-between gap-12 border-b-2 py-2 text-lg">
                    <span className="font-semibold">Subtotal</span>
                    <span>₹ {calculateSubtotal()}</span>
                  </p>
                  <p className="flex justify-between font-bold text-lg py-2">
                    <span>Total:</span>
                    <span className="text-green-700">
                      ₹ {calculateSubtotal()}
                    </span>
                  </p>
                </div>
              </div>

              {/* Note */}
              <p className="text-lg text-gray-500 text-left mt-4">
                We will be sending a shipping confirmation email when the item
                is shipped!
              </p>

              <div className="mt-4 border-t py-4">
                <div className="flex justify-between font-semibold text-md">
                  <p>Thanks for shopping with us</p>
                  <p>Need Help?</p>
                </div>
                <p className="text-md text-center w-[90%] justify-self-center mt-2">
                  (This is computer generated receipt and does not require
                  physical signature.)
                </p>
              </div>
            </div>
          </div>
        )}
        {template1 && (
          <div id="eComTemp1">
            <div className="font-nunito max-w-4xl mx-auto p-10 bg-white shadow-md border border-gray-300 rounded-md">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="border-b-4 py-3 w-[100%]">
                  <img
                    src={formData.logoUrl}
                    alt="Logo"
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="text-left text-sm">
                <p className="text-gray-700">
                  <span className="font-semibold">Payment Receipt</span>
                </p>
                <p>
                  Receipt Number:{" "}
                  <span className="font-semibold">Inv-1212</span>
                </p>
                <p className="text-right">
                  Receipt Date:{" "}
                  <span className="font-semibold">{formData.date}</span>
                </p>
              </div>

              {/* Sold By & Bill To */}
              <div className="flex justify-between text-sm">
                <div className="mb-6 mt-2 flex flex-col gap-6">
                  <div>
                    <p className="font-bold text-lg">Sold By,</p>
                    <p className="">{formData.soldByDetails}</p>
                  </div>
                  {/* Order Details */}
                  <div className="text-sm mb-6">
                    <p>Order No: {"1212"}</p>
                    <p>Order Date: {formData.date}</p>
                    <p>Invoice Date: {formData.date}</p>
                    <p>GSTIN: {formData.gstIn}</p>
                  </div>
                </div>
                <div className="mb-6 text-right">
                  <p className="font-semibold">Bill To,</p>
                  <p>{formData.customerName}</p>
                  <p>{formData.billTo}</p>
                  <p>{formData.shippingAddress}</p>
                  <p>{formData.mobileNo}</p>
                </div>
              </div>

              {/* Items Table */}
              <table className="text-xs mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-500 p-2">Description</th>
                    <th className="border border-gray-500 p-2">Net Amount</th>
                    <th className="border border-gray-500 p-2">Quantity</th>
                    <th className="border border-gray-500 p-2">CGST</th>
                    <th className="border border-gray-500 p-2">CGST Amount</th>
                    <th className="border border-gray-500 p-2">SGST</th>
                    <th className="border border-gray-500 p-2">SGST Amount</th>
                    <th className="border border-gray-500 p-2">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.orderName.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-300 text-center"
                      >
                        <td className=" p-2">{item.desc}</td>
                        <td className=" p-2">₹ {item.itemPrice}</td>
                        <td className=" p-2">{item.quantity}</td>
                        <td className=" p-2">{item.tax / 2} %</td>
                        <td className=" p-2">₹ {calculateCGST(item)}</td>
                        <td className=" p-2">{item.tax / 2} %</td>
                        <td className=" p-2">₹ {calculateCGST(item)}</td>
                        <td className=" p-2">₹ {calculateItemTotal(item)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Total Amount */}
              <div className="flex justify-end mb-6">
                <div className=" border-y border-gray-400 py-2 flex gap-10 ">
                  <p className="text-gray-700 text-sm font-semibold">
                    Total Amount:
                  </p>
                  <p className="text-sm font-bold">₹ {calculateSubtotal()}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6 flex gap-2">
                <p className="text-gray-700 text-sm font-semibold">
                  Payment Method:
                </p>
                <p className="text-sm">{formData.paymentMethod}</p>
              </div>

              {/* Declaration */}
              <div className="text-md">
                <p className="font-bold mb-2">DECLARATION:</p>
                <p className="text-justify">
                  This is an invoice for confirmation of the receipt of the
                  amount paid against for the service as described above. * Keep
                  this invoice and manufacturer box for warranty purpose.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-center">
                  (This is computer generated receipt and does not require
                  physical signature.)
                </p>
                <p className="text-center">{formData.soldByDetails}</p>
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

export default ECommerceTemplate;
