import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import ProviderDetails from "../Common/ProviderDetails";
import OtherDetails from "../Common/OtherDetails";
import RechargeCustomerDetails from "../Common/RechargeCustomerDetails";
import RechargePaymentDetails from "../Common/RechargePaymentDetails";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const RechargeThemes = ({ theme1, theme2, theme3, theme4 }) => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    providerName: "",
    providerAddress: "",
    billingDate: "",
    fromDate: "",
    toDate: "",
    time: "",
    service: "",
    paymentIn: "",
    billingCycle: "",
    mobileNumber: "",
    customerName: "",
    customerAddress: "",
    landmark: "",
    customerId: "",
    invoiceNo: "",
    currencyType: "",
    paymentMethod: "",
    tax: "",
    previousBalance: "",
    amount: 0,
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
    setFormData({
      providerName: "",
      providerAddress: "",
      billingDate: "",
      fromDate: "",
      toDate: "",
      time: "",
      service: "",
      paymentIn: "",
      billingCycle: "",
      mobileNumber: "",
      customerName: "",
      customerAddress: "",
      landmark: "",
      customerId: "",
      invoiceNo: "",
      currencyType: "",
      paymentMethod: "",
      tax: "",
      previousBalance: "",
      amount: "",
      logoUrl: "",
      fileDownloadName: "",
    });
    setLogoDetail("URL");
    setSelectedFile(null);
  };

  function amountAfterDueDate() {
    var amt = Number(formData.amount) + 50;
    return amt;
  }

  function amtExceptTax() {
    var deno = Number(formData.tax) + 100;
    return ((formData.amount / deno) * 100).toFixed(2);
  }

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <ProviderDetails formData={formData} handleChange={handleChange} />

          <OtherDetails formData={formData} handleChange={handleChange} />

          <RechargeCustomerDetails
            formData={formData}
            handleChange={handleChange}
          />

          <RechargePaymentDetails
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
              printBill("rechargeTemplate1", "Nunito Sans", formData)
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
        <div id="rechargeTemplate1">
          <div className="font-nunito max-w-4xl mx-auto border border-gray-300 rounded-md shadow-lg p-6 mt-8">
            <div className="border border-black">
              {/* Header */}
              <div className="flex justify-between pb-2 px-2 flex-wrap">
                <img
                  src={formData.logoUrl} // Replace with the actual logo
                  alt="Logo"
                  className="w-16 h-16"
                />
                <div className="text-right w-full sm:w-auto mt-2 sm:mt-0">
                  <p
                    className={`font-semibold ${
                      theme1
                        ? "text-red-600"
                        : theme2
                        ? "text-blue-500"
                        : theme3
                        ? "text-yellow-400"
                        : "text-green-500"
                    } text-xs sm:mr-10`}
                  >
                    Original Copy for Recipient - Tax Invoice
                  </p>
                </div>
              </div>

              {/* Invoice Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 w-full text-xs">
                <div className="flex flex-col sm:flex-row">
                  <div className="mr-14">
                    <p>
                      Invoice No:{" "}
                      <span className="font-medium">{formData.invoiceNo}</span>
                    </p>
                    <p>{formData.customerName}</p>
                    <p>{formData.customerAddress}</p>
                    <p>{formData.landmark}</p>
                  </div>
                  <div>
                    <p>{formData.providerName}</p>
                    <p>{formData.providerAddress}</p>
                    <p>{formData.service}</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <p>User Id:</p>
                    <span className="font-medium">{formData.customerId}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Mobile No:</p>
                    <span className="font-medium">{formData.mobileNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Bill No:</p>
                    <span className="font-medium">{formData.invoiceNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Bill Date: </p>
                    <span className="font-medium">{formData.billingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Bill Cycle:</p>
                    <span className="font-medium">{formData.billingCycle}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Bill Period: </p>
                    <span className="font-medium">
                      {formData.fromDate} To {formData.toDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p>Pay By:</p>
                    <span className="font-medium">{formData.paymentIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Alternative No: </p>
                    <span className="font-medium">{formData.mobileNumber}</span>
                  </div>
                </div>
              </div>

              {/* Email Notice */}
              <div
                className={`mt-6 300 ${
                  theme1
                    ? "bg-red-500"
                    : theme2
                    ? "bg-blue-500"
                    : theme3
                    ? "bg-yellow-400"
                    : "bg-green-500"
                } text-white text-center text-xs`}
              >
                To get your monthly bill on email id sms STARTBILLFL
                {`{email_id}`} (std_code) on 198
              </div>

              {/* Account Summary */}
              <div className="mt-1 px-2">
                <h3
                  className={`text-xs font-medium pb-2 ${
                    theme1
                      ? "text-red-500"
                      : theme2
                      ? "text-blue-500"
                      : theme3
                      ? "text-yellow-400"
                      : "text-green-500"
                  }`}
                >
                  Your Account Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4 text-xs">
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>Previous Bill</p>
                    <p className="font-medium text-sm">
                      {formData.currencyType} {formData.previousBalance}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>Adjustment Amount</p>
                    <p className="font-medium text-sm">₹ 0</p>
                  </div>
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>This Month</p>
                    <p className="font-medium text-sm">
                      {formData.currencyType} {formData.amount}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>Service</p>
                    <p className="font-medium text-sm">{formData.service}</p>
                  </div>
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>Amount After Due Date</p>
                    <p className="font-medium text-sm">
                      {formData.currencyType} {amountAfterDueDate()}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-gray-200 border rounded-3xl flex flex-col justify-between shadow">
                    <p>Payment Method</p>
                    <p className="font-medium text-sm">
                      {formData.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>

              {/* This Month Charge */}
              <div className="mt-6">
                <h3
                  className={`text-xs font-medium pb-2 ${
                    theme1
                      ? "text-red-500"
                      : theme2
                      ? "text-blue-500"
                      : theme3
                      ? "text-yellow-400"
                      : "text-green-500"
                  } px-2`}
                >
                  This Month Charge
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs">
                  <div className="p-4 border rounded-3xl bg-gray-200 shadow-sm w-full leading-6">
                    <p>
                      Monthly Charges: {formData.currencyType} {amtExceptTax()}
                    </p>
                    <p>Tax: {formData.tax}%</p>
                    <p>
                      Taxable Amount: {formData.currencyType}
                      {Number(formData.amount) - amtExceptTax()}
                    </p>
                    <p>Bill Cycle: {formData.billingCycle}</p>
                    <p>Bill From: {formData.fromDate}</p>
                    <p className="font-semibold">
                      Total Amount:{" "}
                      <span className="font-bold">₹ {formData.amount}</span>
                    </p>
                  </div>
                  <div className="text-center justify-items-end">
                    <p
                      className={`${
                        theme1
                          ? "text-red-500"
                          : theme2
                          ? "text-blue-500"
                          : theme3
                          ? "text-yellow-400"
                          : "text-green-500"
                      } text-4xl font-light text-left leading-[3rem] w-[70%]`}
                    >
                      Get 10 GB/Month Free
                    </p>
                    <div className="w-[50%] text-center mr-10 mt-5">
                      <p className="text-gray-600 text-xs leading-5">
                        Broadband Data with Every
                      </p>
                      <p className="text-gray-600 text-xs leading-5">
                        Prepaid and DTH Connection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-sm text-gray-600">
                <p>
                  As per Government directive, effective service tax will be 18%
                  GST
                </p>
                <hr className="my-4" />
                <p>
                  ------------------ Please detach this slip and return with
                  payment ------------------
                </p>
              </div>

              {/* Payment and Provider Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 pb-6 gap-4">
                {/* Pay on the Go */}
                <div
                  className={`border-4 ${
                    theme1
                      ? "border-red-500"
                      : theme2
                      ? "border-blue-500"
                      : theme3
                      ? "border-yellow-400"
                      : "border-green-500"
                  } rounded-md p-4`}
                >
                  <h3
                    className={`${
                      theme1
                        ? "text-red-400"
                        : theme2
                        ? "text-blue-400"
                        : theme3
                        ? "text-yellow-300"
                        : "text-green-400"
                    } font-semibold text-xs mb-2`}
                  >
                    Pay on the go
                  </h3>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>Pay using {formData.providerName} app</li>
                    <li>
                      Pay using {formData.providerName} Money app downloaded
                      from Play Store / App Store
                    </li>
                    <li>Pay using {formData.providerName} official website</li>
                  </ul>
                </div>

                {/* Account Number */}
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="w-full sm:w-[40%]">
                    <h3
                      className={`${
                        theme1
                          ? "text-red-500"
                          : theme2
                          ? "text-blue-500"
                          : theme3
                          ? "text-yellow-400"
                          : "text-green-500"
                      } font-semibold text-xs mb-2`}
                    >
                      Account Number:
                    </h3>
                    <p className="font-semibold text-xs">
                      {formData.accountNumber}
                    </p>
                  </div>

                  <div className="w-full sm:w-[40%]">
                    <h3
                      className={`${
                        theme1
                          ? "text-red-500"
                          : theme2
                          ? "text-blue-500"
                          : theme3
                          ? "text-yellow-400"
                          : "text-green-500"
                      } font-semibold text-xs mb-2`}
                    >
                      Bill Date:
                    </h3>
                    <p className="font-semibold text-xs">
                      {formData.billingDate}
                    </p>
                  </div>
                </div>
              </div>
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

export default RechargeThemes;
