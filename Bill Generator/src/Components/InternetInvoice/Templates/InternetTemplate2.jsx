import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import PlanDetails from "../Common/PlanDetails";

import ISPDetails from "../Common/ISPDetails";
import CustomerDetails from "../Common/CustomerDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import PaymentDetails from "../Common/PaymentDetails";

const InternetTemplate2 = () => {
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
    description: "",
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
          <ISPDetails
            formData={formData}
            handleChange={handleChange}
            template2={true}
          />

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
              printBill("internetTemplate2", "Nunito Sans", formData)
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
        <div id="internetTemplate2">
          <div className="max-w-4xl mx-auto bg-white border-2 border-gray-200 shadow-lg rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-start">
                {/* Icon */}
                <img
                  src={formData.logoUrl}
                  alt="Internet Icon"
                  className="h-12 w-12"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {formData.ispName}
                  </h1>
                  <p className="text-sm text-gray-600">{formData.ispAddress}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600">
                (Receipt for the Recipient)
              </p>
            </div>

            {/* Customer Details */}
            <div className="text-sm text-gray-700 mb-4">
              <p>
                <strong>Name:</strong> {formData.customerName} &nbsp;&nbsp;
                <strong>Invoice No:</strong> IN{formData.invoiceNo}
              </p>
              <p>
                {formData.customerAddress} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Account No:</strong> {formData.billAccNumber}{" "}
                &nbsp;&nbsp;&nbsp;
                <strong>Bill Date:</strong> {formData.billingDate}
              </p>
            </div>

            {/* Taxable Amount Table */}
            <table className="w-full border-collapse border border-gray-300 text-sm mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Taxable Amount {formData.currencyType}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    CGST Amount {formData.currencyType}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    CGST Rate%
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    SGST Amount {formData.currencyType}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    SGST Rate%
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Payments Received {formData.currencyType}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {calculateTaxableAmount()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {calculateCGSTAmount()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    9 %
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {calculateCGSTAmount()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    9 %
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {formData.planAmount}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Service Plan Summary */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Service Plan Summary
            </h3>
            <table className="w-full border-collapse border border-gray-300 text-sm mb-6 bg-orange-100">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Plan Speed
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Plan Package
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Plan Validity
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Discount
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    Plan Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {formData.trafficPlanSpeed}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {formData.trafficPlanPackage}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {formData.trafficPlan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ₹ {formData.planAmount}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Receipt Details */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Receipt Details
            </h3>
            <table className="w-full border-collapse border border-gray-300 text-sm mb-6 bg-orange-100">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Invoice No.
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Internet Service Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    Amount Incl. Tax
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    IN{formData.invoiceNo}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {formData.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ₹ {formData.planAmount}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer */}
            <p className="text-sm text-gray-600 mb-6">
              Registered office address: {formData.ispAddress}.
            </p>

            {/* Terms and Conditions */}
            <div className="bg-orange-200 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Terms and Conditions
              </h3>
              <ul className="text-sm text-gray-700 list-disc pl-6">
                <li>Cheques to be in favour of {formData.ispName}.</li>
                <li>
                  In case of cheque bounce, ₹ 100/- penalty will be applicable.
                </li>
                <li>
                  {formData.ispName} shall levy late fee charge in case the bill
                  is paid after the due date.
                </li>
                <li>
                  In case of overdue, the right to deactivate service lies with
                  the provider.
                </li>
                <li>
                  This Invoice is system generated hence signature and stamp is
                  not required.
                </li>
              </ul>
            </div>

            {/* Acknowledgement Slip */}
            <div className="bg-orange-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Acknowledgement Slip
              </h3>
              <p className="text-sm text-gray-700">
                <strong>Account No:</strong> {formData.billAccNumber}{" "}
                &nbsp;&nbsp;
                <strong>Subscriber Name:</strong> {formData.customerName}{" "}
                &nbsp;&nbsp;
                <strong>Payment Method:</strong> {formData.paymentMethod}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Invoice No:</strong> IN{formData.invoiceNo}
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

export default InternetTemplate2;
