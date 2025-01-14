import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import PlanDetails from "../Common/PlanDetails";

import ISPDetails from "../Common/ISPDetails";
import CustomerDetails from "../Common/CustomerDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import PaymentDetails from "../Common/PaymentDetails";

const InternetTemplate3 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    ispName: "",
    ispAddress: "",
    billAccNumber: "",
    billingDate: "",
    customerName: "",
    customerAddress: "",
    trafficPlanSpeed: "",
    trafficPlanPackage: "",
    trafficPlan: "",
    currencyType: "",
    paymentMethod: "",
    planAmount: "",
    logoUrl: "",
    invoiceNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function calculateTaxableAmount() {
    return ((formData.planAmount / 118) * 100).toFixed(2);
  }

  function calculateCGSTAmount() {
    var amount = calculateTaxableAmount();
    return ((9 / 100) * amount).toFixed(2);
  }
  //   function calculateTotal() {
  //     return formData.quantity * formData.bookPrice;
  //   }

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <ISPDetails formData={formData} handleChange={handleChange} />

          <PlanDetails formData={formData} handleChange={handleChange} />

          <PaymentDetails formData={formData} handleChange={handleChange} />

          <CustomerDetails formData={formData} handleChange={handleChange} />

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <DownloadFile
            formData={formData}
            template2={true}
            handleChange={handleChange}
          />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("internetTemplate3", "Nunito Sans", formData)
            }
          >
            Print PDF
          </button>

          <button
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            // onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Bill Preview */}
      <div className="lg:w-1/2w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="internetTemplate3">
          <div className="max-w-3xl mx-auto p-8 border border-gray-200 shadow-lg font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <img
                src={formData.logoUrl} // Replace with the actual logo URL
                alt="Logo"
                className="w-16 h-16"
              />
              <div className="text-right">
                <h1 className="text-xl font-bold">
                  Invoice No: IN{formData.invoiceNo}
                </h1>
                <p>Date: {formData.billingDate}</p>
                <p>Billing Cycle: {formData.trafficPlan}</p>
              </div>
            </div>

            <hr className="my-4 border-orange-400" />

            {/* Customer Details */}
            <div>
              <h2 className="text-lg font-medium">
                Hello,{" "}
                <span className="font-bold">{formData.customerName}</span>,
              </h2>
              <p>{formData.customerAddress}</p>
            </div>

            {/* Invoice Summary */}
            <div className="flex justify-between items-center my-6">
              <div className="flex items-center">
                <img
                  src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/card.png" // Replace with the actual icon URL
                  alt="Invoice Icon"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="font-bold">{formData.ispName}</h3>
                  <p>{formData.ispAddress}</p>
                </div>
              </div>
              <div>
                <p>
                  <span className="font-bold">Invoice Total: </span>
                  {formData.currencyType} {formData.planAmount}
                </p>
                <p>
                  <span className="font-bold">Currency: </span>
                  {formData.currencyType}
                </p>
                <p>
                  <span className="font-bold">Payment Method: </span>
                  {formData.paymentMethod}
                </p>
                <p>
                  <span className="font-bold">Bill Account Number: </span>
                  {formData.billAccNumber}
                </p>
              </div>
            </div>

            {/* Tax Table */}
            <div className="my-6">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">
                      Invoice Amount
                    </th>
                    <th className="border px-4 py-2 text-left">CGST Rate%</th>
                    <th className="border px-4 py-2 text-left">CGST Amount</th>
                    <th className="border px-4 py-2 text-left">SGST Rate%</th>
                    <th className="border px-4 py-2 text-left">SGST Amount</th>
                    <th className="border px-4 py-2 text-left">
                      Payments Received
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      {formData.currencyType} {calculateTaxableAmount()}
                    </td>
                    <td className="border px-4 py-2">9%</td>
                    <td className="border px-4 py-2">
                      {formData.currencyType} {calculateCGSTAmount()}
                    </td>
                    <td className="border px-4 py-2">9%</td>
                    <td className="border px-4 py-2">
                      {formData.currencyType} {calculateCGSTAmount()}
                    </td>
                    <td className="border px-4 py-2">
                      {formData.currencyType} {formData.planAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Service Plan Summary */}
            <div className="my-6">
              <h3 className="text-lg font-bold mb-4">Service Plan Summary</h3>
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Plan Speed</th>
                    <th className="border px-4 py-2 text-left">Plan Package</th>
                    <th className="border px-4 py-2 text-left">
                      Plan Validity
                    </th>
                    <th className="border px-4 py-2 text-left">Plan Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      {formData.trafficPlanSpeed}
                    </td>
                    <td className="border px-4 py-2">
                      {formData.trafficPlanPackage}
                    </td>
                    <td className="border px-4 py-2">{formData.trafficPlan}</td>
                    <td className="border px-4 py-2">
                      {formData.currencyType} {formData.planAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="mt-8 text-end">
              <p className="text-sm">
                Our mailing address is: supplier.portal@{formData.ispName}.com
              </p>
            </div>

            <div className="bg-orange-400 rounded-t-lg px-6 py-3 mt-4">
              <h2 className="text-white text-lg font-bold">
                Terms and Conditions
              </h2>
            </div>
            <div className="bg-white border border-orange-500 rounded-b-lg px-6 py-4 text-gray-800">
              <ol className="list-decimal list-inside space-y-2">
                <li>Cheques to be in favour of {formData.ispName}.</li>
                <li>
                  In case of cheque bounce, {formData.currencyType} 100/-
                  penalty will be applicable.
                </li>
                <li>
                  {formData.ispName} shall levy late fee charge in case the bill
                  is paid after the due date.
                </li>
                <li>
                  In case of overdue, the right to deactivate your services is
                  reserved.
                </li>
                <li>
                  This invoice is system-generated; hence signature and stamp
                  are not required.
                </li>
              </ol>
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

export default InternetTemplate3;
