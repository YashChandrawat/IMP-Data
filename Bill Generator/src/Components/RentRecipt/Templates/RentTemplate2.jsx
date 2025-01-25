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

const RentTemplate2 = () => {
  const [template2, setTemplate2] = useState(true);
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
    receivedBy: "",
    receivedName: "",
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

          <LandlordDetails
            formData={formData}
            handleChange={handleChange}
            template2={template2}
          />

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
            onClick={() => printBill("rentTemplate2", "Nunito Sans", formData)}
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
        <div id="rentTemplate2">
          <div className="bg-white border border-gray-300 shadow-lg rounded-md p-10 max-w-3xl mx-auto font-sans text-gray-800">
            {/* Header */}
            <div className="mb-6 text-end">
              <h1 className="font-bold text-md">Date: {formData.date}</h1>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-lg mb-6 underline">
              Rent Receipt
            </h2>

            {/* Rent Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">Rent of the Month:</span>{" "}
                {formData.month}
              </p>
              <p>
                <span className="font-bold">Rental Address:</span>{" "}
                {formData.rentHouseAddress}
              </p>
            </div>

            <p className="text-justify mb-6">
              Received From Mr./Ms.{" "}
              <span className="font-bold">{formData.empName}</span>{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.rentAmount}
              </span>{" "}
              to <span className="font-bold">{formData.landlordName}</span>{" "}
              towards rent of the month of{" "}
              <span className="font-bold">{formData.month}</span> Received By
              Landlord Mr./Ms.{" "}
              <span className="font-bold">{formData.landlordName}</span>.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">Employee Name:</span>{" "}
                {formData.empName}
              </p>
              <p>
                <span className="font-bold">Date:</span> {formData.date}
              </p>
            </div>

            {/* Receipt Acknowledgement */}
            <h2 className="text-center font-bold text-lg mb-6 underline">
              Receipt Acknowledgement
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">Rent of the Month:</span>{" "}
                {formData.month}
              </p>
              <p>
                <span className="font-bold">Amount:</span>{" "}
                {formData.currencyType} {formData.rentAmount}
              </p>
              <p>
                <span className="font-bold">Date:</span> {formData.date}
              </p>
            </div>

            <p className="text-justify mb-6">
              Received From Mr./Ms.{" "}
              <span className="font-bold">{formData.empName}</span>
            </p>
            <p className="text-justify mb-6">
              Landlord Name Mr./Ms.{" "}
              <span className="font-bold">{formData.landlordName}</span>
            </p>

            {/* Footer */}
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="text-center">
                <p className="font-bold mb-2">Revenue Stamp</p>
                <img
                  src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Revenu.jpg"
                  alt="Revenue Stamp"
                  className="w-16 h-16 mx-auto border"
                />
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">Signature</p>
                <img
                  src={formData.logoUrl}
                  alt="Signature"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">Receiver's Name</p>
                <p>{formData.receivedName}</p>
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">Received By</p>
                <p>{formData.receivedBy}</p>
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

export default RentTemplate2;
