import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import OrderDetails from "../../RestaurentBill/Common/OrderDetails";
import { calculateTaxAmount } from "../../Reusable Function/calculateTaxAmount";
import { calculateCgstAndSgst } from "../../Reusable Function/calculateCgstAndSgst";
import { formatDate } from "../../Reusable Function/formatDate";
import { calculateTotal } from "../../Reusable Function/calculateTotal";
import StationaryDetails from "../Common/StationaryDetails";
import CustomerDetailsStationary from "../Common/CustomerDetailsStationary";
import PaymentDetailsStationary from "../Common/PaymentDetailsStationary";
import {
  calculateExculsiveCSGT,
  calculateSubTotal,
  returnTotal,
} from "../../Reusable Function/exclusiveGst";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const StationaryBillTemplate = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    stationaryName: "",
    stationaryAddress: "",
    remark: "",
    invoiceNo: "",
    billDate: "",
    customerName: "",
    customerAddress: "",
    currencyType: "",
    paymentMethod: "",
    tax: "",
    orderName: [{ desc: "", itemPrice: "", quantity: "", total: 0 }],
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

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <StationaryDetails formData={formData} handleChange={handleChange} />

          <CustomerDetailsStationary
            formData={formData}
            handleChange={handleChange}
          />

          <PaymentDetailsStationary
            formData={formData}
            handleChange={handleChange}
          />

          <OrderDetails
            formData={formData}
            handleAddRow={handleAddRow}
            handleOrderChange={handleOrderChange}
            handleRemoveRow={handleRemoveRow}
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
              printBill("stationaryBillTemplate", "Nunito Sans", formData)
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
        <div id="stationaryBillTemplate">
          <div className="font-nunito max-w-full sm:max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
            {/* Header Section */}
            <h1 className="text-lg font-semibold text-center">
              {formData.stationaryName}
            </h1>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <div className="text-left mb-4 sm:mb-0">
                <img
                  src={formData.logoUrl}
                  alt="Logo"
                  className="w-20 h-20 mx-auto sm:mx-0"
                />
                <p className="text-md font-semibold text-center sm:text-left">
                  {formData.stationaryName}
                </p>
                <p className="text-md text-center sm:text-left">
                  {formData.stationaryAddress}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-10">
                <div className="text-right">
                  <h1 className="text-md font-medium">
                    Receipt no: {formData.invoiceNo}
                  </h1>
                  <p className="text-md">Date: {formData.billDate}</p>
                </div>
                <div className="text-right">
                  <h1 className="text-md font-medium">
                    {formData.customerName}
                  </h1>
                  <p className="text-md ">{formData.customerAddress}</p>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <table className="table-auto w-full border-collapse border-[1px] border-black text-sm mb-4">
              <thead>
                <tr className="">
                  <th className="border-[1px] font-medium border-black text-left px-2 w-[68%]">
                    Item
                  </th>
                  <th className="border-[1px] font-medium border-black py-1">
                    Rate
                  </th>
                  <th className="border-[1px] font-medium border-black py-1">
                    Quantity
                  </th>
                  <th className="border-[1px] font-medium border-black py-1">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.orderName.map((item, index) => (
                  <tr key={index}>
                    <td className="border-[1px] border-black px-2 py-2">
                      {item.desc}
                    </td>
                    <td className="border-[1px] border-black px-2 py-2 text-right">
                      {formData.currencyType} {item.itemPrice}
                    </td>
                    <td className="border-[1px] border-black px-2 py-2 text-right">
                      {item.quantity}
                    </td>
                    <td className="border-[1px] border-black px-2 py-2 text-right">
                      {formData.currencyType} {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Subtotal Section */}
            <div className="flex flex-col sm:flex-row justify-between mb-4 mt-10">
              <p className="text-sm mt-1">
                <span className="font-bold">
                  <i>Remarks/Instruction:</i>
                </span>{" "}
                <br /> <i>{formData.remark}</i>
              </p>
              <table className="table-auto text-sm border-collapse ">
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Subtotal</td>
                    <td className="px-4 py-2 text-right">
                      {formData.currencyType}{" "}
                      {calculateSubTotal(formData.orderName)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">CGST: {formData.tax / 2}%</td>
                    <td className="px-4 py-2 text-right">
                      {formData.currencyType}{" "}
                      {calculateExculsiveCSGT(formData.orderName, formData.tax)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">SGST: {formData.tax / 2}%</td>
                    <td className="px-4 py-2 text-right">
                      {formData.currencyType}{" "}
                      {calculateExculsiveCSGT(formData.orderName, formData.tax)}
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2 font-bold">Total Amount</td>
                    <td className="px-4 py-2 font-bold text-right">
                      {formData.currencyType}{" "}
                      {returnTotal(formData.orderName, formData.tax)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Section */}
            <div className="text-center text-xs border-t border-gray-300 pt-2 mt-10">
              SAVE PAPER SAVE NATURE !! THANKS FOR SHOPPING WITH US.
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

export default StationaryBillTemplate;
