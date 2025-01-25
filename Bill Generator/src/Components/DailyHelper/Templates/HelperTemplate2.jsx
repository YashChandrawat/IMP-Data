import { useState } from "react";
import HelperDetails from "../Common/HelperDetails";
import EmpDetails from "../Common/EmpDetails";
import PaymentDetails from "../../DriverSalary/Common/PaymentDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import printBill from "../../Utils/printBill";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const HelperTemplate2 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    helperName: "",
    workingAs: "",
    empName: "",
    currencyType: "",
    salaryAmount: 0,
    date: "",
    salaryMonth: "",
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
      helperName: "",
      workingAs: "",
      empName: "",
      currencyType: "",
      salaryAmount: 0,
      date: "",
      salaryMonth: "",
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
          <HelperDetails formData={formData} handleChange={handleChange} />

          <EmpDetails formData={formData} handleChange={handleChange} />

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

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("helperTemplate2", "Nunito Sans", formData)
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
          id="helperTemplate2"
          className="bg-white rounded-md shadow-md w-[100%] p-10 font-nunito"
        >
          <div className="text-right mb-4">
            <p className="text-sm font-bold">Date: 12 Dec 2024</p>
          </div>
          <h2 className="text-lg font-bold mb-4 text-center">
            Daily Helper Receipt
          </h2>
          <div className="mb-2">
            <p className="font-bold">Working As: {formData.workingAs}</p>
          </div>
          <div className="mb-2">
            <p className="font-bold">
              Salary of the Month: {formData.salaryMonth}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-bold">
              Amount Paid: {formData.currencyType} {formData.salaryAmount}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-bold">Date: {formData.date}</p>
          </div>
          <div className="mb-4">
            <p>
              Received From Mr./Ms.{" "}
              <span className="font-bold">{formData.empName}</span>{" "}
              {formData.currencyType} {formData.salaryAmount} to his/her{" "}
              <span className="font-bold">{formData.workingAs}</span>
              Mr./Ms. <span className="font-bold">
                {formData.helperName}
              </span>{" "}
              towards salary of the month of{" "}
              <span className="font-bold">{formData.salaryMonth}</span>
            </p>
          </div>
          <div className="mb-4 text-end">
            <p className="font-bold">
              Employee Name:{" "}
              <span className="font-normal">{formData.empName}</span>
            </p>
          </div>
          <h3 className="text-lg font-bold mb-2">Receipt Acknowledgement</h3>
          <div className="mb-2">
            <p className="font-bold">
              Salary of the Month:{" "}
              <span className="font-normal">{formData.salaryMonth}</span>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-bold">
              Amount Paid:{" "}
              <span className="font-normal">
                {formData.currencyType} {formData.salaryAmount}
              </span>
            </p>
          </div>
          <div className="mb-2 text-end">
            {" "}
            <p className="font-bold">
              Helper Name:{" "}
              <span className="font-normal">{formData.helperName}</span>{" "}
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <h3 className="text-lg font-medium mb-2">Revenue Stamp</h3>
              <img
                src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Revenu.jpg"
                alt="Revenue Stamp"
                className="w-24 h-24"
              />
            </div>
            {formData.logoUrl && (
              <div className="w-1/2">
                <h3 className="text-lg font-medium mb-2">Signature</h3>
                <img
                  src={formData.logoUrl}
                  alt="Revenue Stamp"
                  className="w-24 h-24"
                />
              </div>
            )}
          </div>
        </div>
        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default HelperTemplate2;
