import { useState } from "react";
import DriverDetails from "../Common/DriverDetails";
import EmployeeDetails from "../Common/EmployeeDetails";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import printBill from "../../Utils/printBill";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const DriverTemplate4 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    driverName: "",
    empName: "",
    vehicleNumber: "",
    currencyType: "",
    salaryAmount: 0,
    fromDate: "",
    toDate: "",
    billBy: "",
    fileDownloadName: "",
    logoUrl: "",
  });

  const handleClear = () => {
    setFormData({
      driverName: "",
      empName: "",
      vehicleNumber: "",
      currencyType: "",
      salaryAmount: 0,
      fromDate: "",
      toDate: "",
      billBy: "",
      fileDownloadName: "",
      logoUrl: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <DriverDetails formData={formData} handleChange={handleChange} />

          <EmployeeDetails formData={formData} handleChange={handleChange} />

          <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
            <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
              Payment Details
            </h3>
            <div className="px-6 pb-8 flex flex-col gap-4">
              <div className="flex gap-6">
                {/* Currency Type */}
                <div className="w-[50%]">
                  <label className="block text-gray-500 font-medium mb-1">
                    Currency
                  </label>
                  <select
                    name="currencyType"
                    value={formData.currencyType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Currency Type</option>
                    <option value="₹">Indian Rupees</option>
                    <option value="$">Dollar</option>
                  </select>
                </div>
                {/* Salary Amount */}
                <div className="w-[50%]">
                  <label className="block text-gray-500 font-medium mb-1">
                    Salary Amount:
                  </label>
                  <input
                    type="number"
                    name="salaryAmount"
                    value={formData.salaryAmount}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                {/* From Date */}
                <div className="w-[50%]">
                  <label className="block text-gray-500 font-medium mb-1">
                    From Date
                  </label>
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block text-gray-500 font-medium mb-1">
                    From Date
                  </label>
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              {/* Salary Month */}
              <div className="w-[50%]">
                <label className="block text-gray-500 font-medium mb-1">
                  Bill By
                </label>
                <select
                  name="billBy"
                  value={formData.billBy}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Month</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quaterly">Quaterly</option>
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
          </div>

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Signature Details"}
          />

          <DownloadFile formData={formData} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("driverTemplate4", "Nunito Sans", formData)
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

      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="driverTemplate4"
          className="bg-white px-20 py-10 rounded-md shadow-md"
        >
          <div className="flex justify-end">
            <p className="text-gray-600">Date: {formData.fromDate}</p>
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">
            Driver Salary Receipt
          </h2>
          <p className="text-gray-700 mb-2">
            This is to certify that Mr./Ms.{" "}
            <span className="font-bold">{formData.empName}</span> have paid{" "}
            <span className="font-bold">
              {formData.currencyType} {formData.salaryAmount}
            </span>{" "}
            to driver Mr./Ms.{" "}
            <span className="font-bold">{formData.driverName}</span> towards
            salary of the period{" "}
            <span className="font-bold">{formData.fromDate}</span> to{" "}
            <span className="font-bold">{formData.toDate}</span> (Acknowledged
            receipt enclosed). I also declare that the driver is exclusively
            utilized for official purpose only.
          </p>
          <p className="text-gray-700 mb-4">
            Please reimburse the above amount. I further declare that what is
            stated above is correct and true.
          </p>
          <div className="flex justify-between">
            <p className="text-gray-700 font-bold">
              Vehicle Number: {formData.vehicleNumber}
            </p>
            <p className="text-gray-700 font-bold">
              Period: {formData.fromDate} - {formData.toDate}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-gray-700 font-bold">
              Driver Name:{" "}
              <span className="font-medium">{formData.driverName}</span>
            </p>
            <p className="text-gray-700 font-bold">
              Employee Name:{" "}
              <span className="font-medium">{formData.empName}</span>
            </p>
          </div>
          <div className="flex justify-between">
            {formData.logoUrl && (
              <div>
                <p>
                  <span className="font-bold">Signature:</span>
                </p>
                <img
                  src={formData.logoUrl}
                  alt="Signature logo"
                  className="w-16 h-16"
                />
              </div>
            )}
            <div>
              <p className="font-bold">Revenue Stamp</p>
              <div className="mt-2">
                <img
                  src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Revenu.jpg"
                  alt="Revenue Stamp"
                  className="w-16 h-16 border"
                />
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

export default DriverTemplate4;
