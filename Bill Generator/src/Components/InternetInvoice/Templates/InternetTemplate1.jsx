import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import PlanDetails from "../Common/PlanDetails";

import ISPDetails from "../Common/ISPDetails";
import CustomerDetails from "../Common/CustomerDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import PaymentDetails from "../Common/PaymentDetails";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const InternetTemplate1 = () => {
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   function calculateTotal() {
  //     return formData.quantity * formData.bookPrice;
  //   }

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
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

          <DownloadFile formData={formData} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("internetTemplate1", "Nunito Sans", formData)
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
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="internetTemplate1">
          <div className="max-w-3xl mx-auto font-nunito bg-white border-2 border-gray-200 shadow-lg rounded-lg p-10">
            {/* Header */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Internet Invoice
            </h1>

            {/* Receipt Details Section */}
            <div className="flex flex-col justify-between mb-6">
              {/* Left Section: Invoice Icon and Recipt */}
              <div className="flex justify-between">
                {/* Icon */}
                <img
                  src={formData.logoUrl}
                  alt="Internet"
                  className="h-10 w-10 mr-4"
                />
                {/* Billed To */}
                <div className="text-end">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Receipt Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong>Receipt Number:</strong> IN4769
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> {formData.billingDate}
                  </p>
                </div>
              </div>

              {/* Right Section: Receipt and Internet Provider Details */}
              <div className="flex justify-between">
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Billed To,
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong>Customer Name:</strong> {formData.customerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Customer Address:</strong>{" "}
                    {formData.customerAddress}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Bill Account Number:</strong>{" "}
                    {formData.billAccNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Payment Method:</strong> {formData.paymentMethod}
                  </p>
                </div>
                <div className="text-end">
                  <h3 className="text-lg font-semibold text-gray-700 mt-4">
                    Internet Provider Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong>Provider Name:</strong> {formData.ispName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Provider Address:</strong> {formData.ispAddress}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Billing Cycle:</strong> {formData.trafficPlan}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Plan Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Service Plan Summary
              </h3>
              <table className="w-full border-collapse border border-gray-300 text-sm text-gray-600">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Plan Speed
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Plan Package
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Plan Validity
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
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {formData.currencyType} {formData.planAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Total Amount */}
            <div className="flex justify-end mt-4">
              <p className="text-lg font-semibold text-gray-700">
                <strong>Total:</strong> {formData.currencyType}{" "}
                {formData.planAmount}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 font-semibold">
                ALL PAYMENTS TO BE MADE IN FAVOUR OF IDEA
              </p>
              <p className="text-gray-500 text-sm">
                THIS IS A COMPUTER-GENERATED INVOICE AND DOES NOT REQUIRE ANY
                SIGNATURE
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

export default InternetTemplate1;
