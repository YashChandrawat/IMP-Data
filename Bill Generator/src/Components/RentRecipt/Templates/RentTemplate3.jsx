import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import RentEmpDetails from "../Common/RentEmpDetails";
import LandlordDetails from "../Common/LandlordDetails";
import RentPaymentDetails from "../Common/RentPaymentDetails";

const RentTemplate3 = () => {
  const [template3, setTemplate3] = useState(true);
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    empName: "",
    rentHouseAddress: "",
    landlordName: "",
    fromDate: "",
    toDate: "",
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
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <RentEmpDetails formData={formData} handleChange={handleChange} />

          <LandlordDetails formData={formData} handleChange={handleChange} />

          <RentPaymentDetails
            formData={formData}
            handleChange={handleChange}
            template3={template3}
          />

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
            onClick={() => printBill("rentTemplate3", "Nunito Sans", formData)}
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
      <div className="lg:w-1/2w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="rentTemplate3">
          <div className="bg-white border border-gray-300 shadow-md rounded-md p-8 max-w-xl mx-auto font-sans text-gray-800">
            {/* Header */}
            <div className="flex justify-end mb-6">
              <h1 className="font-bold text-md">Date: {formData.fromDate}</h1>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-xl mb-6 underline">
              Rent Receipt
            </h2>

            {/* Body Content */}
            <p className="text-justify mb-6">
              This is to certify that Mr./Ms. have paid{" "}
              <span className="font-bold">
                {formData.currencyType} {formData.rentAmount}
              </span>{" "}
              to landlord, Mr/Ms{" "}
              <span className="font-bold">{formData.landlordName}</span> towards
              Rent of the period{" "}
              <span className="font-bold">
                {formData.fromDate} to {formData.toDate}
              </span>{" "}
              (Acknowledged receipt enclosed).
            </p>
            <p className="text-justify mb-6">
              Please reimburse the above amount. I further declare that what is
              stated above is correct and true.
            </p>

            {/* Address and Payment Method */}
            <div className="grid grid-cols-2 gap-4 border-t border-b py-4 mb-6">
              <p>
                <span className="font-bold">
                  Address: {formData.rentHouseAddress}
                </span>
              </p>
              <p>
                <span className="font-bold">
                  Payment Method: {formData.paymentMethod}
                </span>
              </p>
            </div>

            {/* Details Section */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <p>
                <span className="font-bold">
                  Landlord Name: {formData.landlordName}
                </span>
              </p>
              <p>
                <span className="font-bold">
                  Employee Name: {formData.empName}
                </span>
              </p>
              <p>
                <span className="font-bold">Period:</span> {formData.fromDate} -
                {formData.toDate}
              </p>
            </div>

            {/* Revenue Stamp */}
            <div className="flex justify-evenly">
              <div>
                <p className="font-bold mr-4">Revenue Stamp</p>
                <img
                  src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Revenu.jpg"
                  alt="Revenue Stamp"
                  className="w-16 h-16 border"
                />
              </div>
              {formData.logoUrl && (
                <div>
                  <p className="font-bold mr-4">Signature</p>
                  <img
                    src={formData.logoUrl}
                    alt="Signature"
                    className="w-16 h-16 border"
                  />
                </div>
              )}
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

export default RentTemplate3;
