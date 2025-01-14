import { useState } from "react";
import HelperDetails from "../Common/HelperDetails";
import EmpDetails from "../Common/EmpDetails";
import PaymentDetails from "../../DriverSalary/Common/PaymentDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import printBill from "../../Utils/printBill";

const HelperTemplate1 = () => {
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
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
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
              printBill("helperTemplate1", "Nunito Sans", formData)
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

      <div className="lg:w-1/2w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="helperTemplate1"
          className="bg-white p-6 rounded-md shadow-md font-nunito"
        >
          <div className="mb-4">
            <p className="text-md text-end">Date: 12 Dec 2024</p>
          </div>
          <h2 className="text-xl font-bold text-center mb-4">
            Daily Helper Receipt
          </h2>
          <div className="mb-4 ">
            <p>
              This is to certify that Mr./Ms.{" "}
              <span className="font-bold">{formData.empName}</span> have paid{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.salaryAmount}
              </span>{" "}
              to his/her {formData.workingAs} Mr/Ms{" "}
              <span className="font-bold">{formData.helperName}</span> who is
              Working as {formData.workingAs}. As {formData.helperName} got
              salary of the month of{" "}
              <span className="font-bold">{formData.salaryMonth}</span>{" "}
              (Acknowledged receipt enclosed). I also declare that the Mr/Ms{" "}
              {formData.helperName} is exclusively utilized for official purpose
              only.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Please reimburse the above amount. I further declare that what is
              stated above is correct and true.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm">Date: {formData.date}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-md font-semibold">
              Helper Name:{" "}
              <span className="font-medium">{formData.helperName}</span>
            </p>
            <p className="text-md font-semibold">
              Employee Name:{" "}
              <span className="font-medium">{formData.empName}</span>
            </p>
          </div>
          <div className="flex justify-between">
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
                  alt="Signature Stamp"
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

export default HelperTemplate1;
