import { useState } from "react";
import printBill from "../../Utils/printBill";
import CustomerDetailsGeneralBill from "../Common/CustomerDetailsGeneralBill";
import ShopDetailsGeneralBill from "../Common/ShopDetailsGeneralBill";
import PaymentDetailsGeneralBill from "../Common/PaymentDetailsGeneralBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import OrderDetails from "../../RestaurentBill/Common/OrderDetails";
import { calculateTaxAmount } from "../../Reusable Function/calculateTaxAmount";
import { calculateCgstAndSgst } from "../../Reusable Function/calculateCgstAndSgst";
import { formatDate } from "../../Reusable Function/formatDate";
import { calculateTotal } from "../../Reusable Function/calculateTotal";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const GeneralBillTemplate1 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    customerName: "",
    customerLocation: "",
    customerShippingAddress: "",
    shopName: "",
    soldByDetails: "",
    currencyType: "",
    paymentMethod: "",
    invoiceNo: "",
    date: "",
    orderNo: "",
    orderName: [{ desc: "", itemPrice: "", quantity: "", tax: "", total: 0 }],
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

  const calculateSubtotal = () => {
    var total = 0;
    for (let index = 0; index < formData.summaryBills.length; index++) {
      total = total + Number(formData.summaryBills[index].price);
    }
    return total;
  };

  function calculateCGST(tax) {
    var cgst = tax / 2;
    var total = calculateSubtotal();
    var final = (cgst / 100) * total;
    return final.toFixed(2);
  }
  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <CustomerDetailsGeneralBill
            formData={formData}
            handleChange={handleChange}
          />

          <ShopDetailsGeneralBill
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

          <PaymentDetailsGeneralBill
            formData={formData}
            handleChange={handleChange}
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
              printBill("generalBillTemplate1", "Nunito Sans", formData)
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
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="generalBillTemplate1">
          <div className="font-nunito max-w-4xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-md">
            {/* Header */}
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-[40%] flex justify-center sm:justify-start">
                <img src={formData.logoUrl} alt="Logo" className="w-20 h-20" />
              </div>
              <div className="w-full sm:w-auto">
                <p className="text-xl sm:text-3xl font-medium text-yellow-400">
                  {formData.shopName}
                </p>
                <p className="text-sm sm:text-lg">{formData.soldByDetails}</p>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mt-6 flex flex-col gap-2 sm:gap-1 sm:items-end">
              <p className="text-sm sm:text-base">{formData.customerName}</p>
              <p className="text-sm sm:text-base">
                {formData.customerShippingAddress}
              </p>
              <p className="text-sm sm:text-base">
                {formData.customerLocation}
              </p>
            </div>

            {/* Invoice Details */}
            <div className="mt-6 flex flex-col gap-2 text-sm sm:text-base">
              <p>
                Invoice Date:{" "}
                <span className="font-semibold">
                  {formatDate(formData.date)}
                </span>
              </p>
              <p>
                Invoice No:{" "}
                <span className="font-semibold">{formData.invoiceNo}</span>
              </p>
            </div>

            {/* Order Details Table */}
            <div className="w-full mt-10 overflow-x-auto">
              <table className="table-auto w-full text-xs sm:text-sm text-justify">
                <thead>
                  <tr className="text-gray-400">
                    <th className="border-b border-gray-300 px-2 py-4 w-[7rem]">
                      DESCRIPTION
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4 text-center">
                      QTY
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      PRICE
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      CGST %
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      CGST AMOUNT
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      SGST %
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      SGST AMOUNT
                    </th>
                    <th className="border-b border-gray-300 px-2 py-4">
                      SUBTOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formData.orderName.map((order, index) => (
                    <tr className="text-[11px] sm:text-[14px]" key={index}>
                      <td className="px-4 py-2">{order.desc}</td>
                      <td className="px-4 py-2">{order.quantity}</td>
                      <td className="px-4 py-2 text-end">
                        {formData.currencyType}{" "}
                        {calculateTaxAmount(
                          order.tax,
                          order.itemPrice * order.quantity
                        )}
                      </td>
                      <td className="px-4 py-2">{order.tax / 2}%</td>
                      <td className="px-4 py-2">
                        {calculateCgstAndSgst(
                          order.tax,
                          order.itemPrice * order.quantity
                        )}
                      </td>
                      <td className="px-4 py-2">{order.tax / 2}%</td>
                      <td className="px-4 py-2">
                        {calculateCgstAndSgst(
                          order.tax,
                          order.itemPrice * order.quantity
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {formData.currencyType} {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payment Info Table */}
            <div className="w-full mt-10 overflow-x-auto">
              <table className="table-auto w-full text-sm sm:text-base text-justify">
                <thead>
                  <tr className="text-gray-400 text-xs sm:text-sm border-b border-gray-300">
                    <th className="py-4 text-start">PAYMENT INFO</th>
                    <th className="py-4 text-center">DUE BY</th>
                    <th className="py-4 text-right">TOTAL AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-4 text-start">
                      <p>
                        <span className="font-semibold">Order No:</span>{" "}
                        {formData.orderNo}
                      </p>
                      <p>
                        <span className="font-semibold">Payment method:</span>{" "}
                        {formData.paymentMethod}
                      </p>
                    </td>
                    <td className="py-4 text-center">
                      {formatDate(formData.date)}
                    </td>
                    <td className="py-4 text-red-500 text-xl sm:text-2xl font-extrabold text-right">
                      {formData.currencyType}{" "}
                      {calculateTotal(formData.orderName)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="w-full mt-10">
              <p className="text-center text-sm sm:text-base">
                Thank You! Visit Again
              </p>
            </div>
          </div>
        </div>

        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default GeneralBillTemplate1;
