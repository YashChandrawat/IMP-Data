import { useState } from "react";
import DriverDetails from "../Common/DriverDetails";
import EmployeeDetails from "../Common/EmployeeDetails";
import PaymentDetails from "../Common/PaymentDetails";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import printBill from "../../Utils/printBill";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const DriverTemplate2 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    driverName: "",
    empName: "",
    vehicleNumber: "",
    currencyType: "",
    salaryAmount: 0,
    date: "",
    salaryMonth: "",
    fileDownloadName: "",
    logoUrl: "",
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
      driverName: "",
      empName: "",
      vehicleNumber: "",
      currencyType: "",
      salaryAmount: 0,
      date: "",
      salaryMonth: "",
      fileDownloadName: "",
      logoUrl: "",
    });
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

          <PaymentDetails formData={formData} handleChange={handleChange} />

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
              printBill("driverTemplate2", "Nunito Sans", formData)
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

      {/* Bill Review */}
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="driverTemplate2"
          className="bg-white border-2 border-gray-300 p-6 rounded-md max-w-2xl mx-auto font-sans text-gray-800"
        >
          <div className="text-right mb-4">
            <p>
              Date: <span className="font-bold">{formData.date}</span>{" "}
            </p>
          </div>
          <h1 className="text-center font-bold text-lg mb-4">
            Driver Salary Receipt
          </h1>
          <div className="mb-4">
            <p>
              <span className="font-bold">
                Vehicle Number: <span>{formData.vehicleNumber}</span>{" "}
              </span>
            </p>
            <p>
              <span className="font-bold">Salary of the Month:</span>{" "}
              <span className="font-bold">{formData.salaryMonth}</span>
            </p>
            <p>
              <span className="font-bold">Amount Paid:</span>{" "}
              <span className="font-medium">
                {formData.currencyType} {formData.salaryAmount}
              </span>
            </p>
            <p>
              <span className="font-bold">Date:</span> {formData.date}
            </p>
            <p className="mt-2">
              Received From Mr./Ms.{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.salaryAmount}
              </span>{" "}
              to driver <span className="font-bold">{formData.driverName}</span>{" "}
              towards salary of the month of December
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-bold">
                Employee Name:{formData.empName}
              </span>
            </p>
          </div>
          <h2 className="text-center font-bold text-lg mb-4">
            Receipt Acknowledgement
          </h2>
          <div className="mb-4">
            <p>
              <span className="font-bold">Salary of the Month:</span>{" "}
              {formData.salaryMonth}
            </p>
            <p>
              <span className="font-bold">Amount Paid:</span>{" "}
              {formData.currencyType} {formData.salaryAmount}
            </p>
            <p>
              <span className="font-bold">Date:</span> {formData.date}
            </p>
            <p className="mt-2">
              Received From Mr./Ms.{" "}
              <span className="font-bold">
                {" "}
                {formData.currencyType} {formData.salaryAmount}
              </span>{" "}
              to driver <span className="font-bold">{formData.driverName}</span>{" "}
              towards salary of the month of December
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-end">
              <p>
                <span className="font-bold">Driver Name:</span> Yash Chandrawat
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
        </div>
        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default DriverTemplate2;
