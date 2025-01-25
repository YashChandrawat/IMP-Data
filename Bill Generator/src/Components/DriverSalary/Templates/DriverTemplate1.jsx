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

const DriverTemplate1 = () => {
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
              printBill("driverTemplate1", "Nunito Sans", formData)
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
        <div
          id="driverTemplate1"
          className="bg-white border-2 border-gray-300 p-6 rounded-xl max-w-xl mx-auto font-sans text-gray-800"
        >
          <div className="text-right mb-4">
            <p>
              Date: <span className="font-medium">{formData.date}</span>
            </p>
          </div>
          <h1 className="text-center font-bold text-lg mb-4">
            Driver Salary Receipt
          </h1>
          <p className="mb-4">
            This is to certify that Mr./Ms. have paid {formData.currencyType}{" "}
            <span className="font-bold">{formData.salaryAmount} </span> to
            driver Mr./Ms.{" "}
            <span className="font-bold">{formData.driverName}</span> towards
            salary of the month of{" "}
            <span className="font-bold">{formData.salaryMonth}</span>{" "}
            (Acknowledged receipt enclosed). I also declare that the driver is
            exclusively utilized for official purpose only.
          </p>
          <p className="mb-4">
            Please reimburse the above amount. I further declare that what is
            stated above is correct and true.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <span className="font-bold">
                  Vehicle Number:{" "}
                  <span className="font-medium">{formData.vehicleNumber}</span>{" "}
                </span>
              </p>
            </div>
            <div className="text-right">
              <p>
                <span className="font-bold">Date:</span>{" "}
                <span className="font-medium">{formData.date}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">
                  Driver Name:{" "}
                  <span className="font-medium">{formData.driverName}</span>
                </span>
              </p>
            </div>
            <div className="text-right">
              <p>
                <span className="font-bold">
                  Employee Name:{" "}
                  <span className="font-medium">{formData.empName}</span>
                </span>
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-between mx-10">
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
            {formData.logoUrl && (
              <div>
                <p className="font-bold">Signature</p>
                <div className="mt-2">
                  <img
                    src={formData.logoUrl}
                    alt="Revenue Stamp"
                    className="w-16 h-16 border"
                  />
                </div>
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

export default DriverTemplate1;
