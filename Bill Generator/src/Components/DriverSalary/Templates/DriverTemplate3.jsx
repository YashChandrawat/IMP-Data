import { useState } from "react";
import DriverDetails from "../Common/DriverDetails";
import EmployeeDetails from "../Common/EmployeeDetails";
import PaymentDetails from "../Common/PaymentDetails";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import printBill from "../../Utils/printBill";

const DriverTemplate3 = () => {
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
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
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
              printBill("driverTemplate3", "Nunito Sans", formData)
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
      <div className="lg:w-1/2w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="driverTemplate3"
          className="bg-white border-2 border-gray-300 p-6 rounded-md max-w-2xl mx-auto font-sans text-gray-800"
        >
          <h1 className="text-center font-bold text-lg mb-4">
            Driver Salary Receipt
          </h1>
          <p className="mb-4">
            This is to certify that I have paid{" "}
            <span className="font-bold">
              {formData.currencyType} {formData.salaryAmount}
            </span>{" "}
            to driver, Mr.{" "}
            <span className="font-bold">{formData.driverName}</span> for the
            month of <span className="font-bold">{formData.salaryMonth}</span>{" "}
            (Acknowledged receipt enclosed). I also declare that the driver is
            exclusively utilized for official purposes only. Please reimburse
            the above amount. I further declare that what is stated above is
            correct and true.
          </p>
          <div className="mb-4">
            <p>
              <span className="font-bold">Employee Name:</span>{" "}
              {formData.empName}
            </p>
            <p>
              <span className="font-bold">Date:</span> {formData.date}
            </p>
          </div>
          <hr className="border-gray-400 my-4" />
          <h2 className="text-center font-bold text-lg mb-4">
            Receipt Acknowledgement
          </h2>
          <div className="mb-4">
            <p>
              <span className="font-bold">Date of Receipt:</span>{" "}
              {formData.date}
            </p>
            <p>
              <span className="font-bold">For the Month of:</span>{" "}
              {formData.salaryMonth}
            </p>
            <p>
              <span className="font-bold">Name of Driver:</span>{" "}
              {formData.driverName}
            </p>
            <p>
              <span className="font-bold">Vehicle No:</span>{" "}
              {formData.vehicleNumber}
            </p>
            <p className="mt-2">
              Received a sum of{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.salaryAmount}
              </span>{" "}
              only for the{" "}
              <span className="font-bold">{formData.salaryMonth}</span> month
              from Mr/Mrs <span className="font-bold">{formData.empName}</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="font-bold">Revenue Stamp</p>
              <img
                src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Revenu.jpg"
                alt="Revenue Stamp"
                className="w-16 h-16 border mt-2"
              />
            </div>
            <div>
              <p className="font-bold">Signature</p>
              <img
                src={formData.logoUrl}
                alt="Signature"
                className="w-16 h-16 mt-2"
              />
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

export default DriverTemplate3;
