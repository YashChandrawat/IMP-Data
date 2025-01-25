import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import RentEmpDetails from "../Common/RentEmpDetails";
import LandlordDetails from "../Common/LandlordDetails";
import RentPaymentDetails from "../Common/RentPaymentDetails";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const RentTemplate1 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    empName: "",
    rentHouseAddress: "",
    landlordName: "",
    date: "",
    billBy: "",
    paymentMethod: "",
    month: "",
    currencyType: "",
    rentAmount: "",
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

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <RentEmpDetails formData={formData} handleChange={handleChange} />

          <LandlordDetails formData={formData} handleChange={handleChange} />

          <RentPaymentDetails formData={formData} handleChange={handleChange} />

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
            onClick={() => printBill("rentTemplate1", "Nunito Sans", formData)}
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
        <div id="rentTemplate1">
          <div className="bg-white border border-gray-300 shadow-md p-8 font-nunito rounded-md max-w-lg  text-gray-800">
            <div className="mb-6">
              <h1 className="font-bold text-end">Date: {formData.date}</h1>
            </div>

            <h2 className="text-center font-bold text-xl mb-6">Rent Receipt</h2>

            <p className="text-justify mb-4">
              This is to certify that Mr./Ms.{" "}
              <span className="font-bold">{formData.empName}</span> have paid{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.rentAmount}
              </span>{" "}
              to landlord, Mr./Ms.{" "}
              <span className="font-bold">{formData.landlordName}</span> towards
              Rent of the month of{" "}
              <span className="font-bold">{formData.month}</span> (Acknowledged
              receipt enclosed).
            </p>

            <p className="text-justify mb-4">
              Please reimburse the above amount. I further declare that what is
              stated above is correct and true.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">Address:</span>{" "}
                {formData.rentHouseAddress}
              </p>
              <p>
                <span className="font-bold">Payment Method:</span>{" "}
                {formData.paymentMethod}
              </p>
            </div>

            <hr className="border-gray-400 my-6" />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">Landlord Name:</span>{" "}
                {formData.landlordName}
              </p>
              <p>
                <span className="font-bold">Employee Name:</span>{" "}
                {formData.empName}
              </p>
              <p>
                <span className="font-bold">Date:</span> {formData.date}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
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
        </div>
        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default RentTemplate1;
