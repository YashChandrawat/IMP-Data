import { useState } from "react";
import PaymentDetail from "./Common/PaymentDetail";
import CustomerDetails from "./Common/CustomerDetails";
import LogoDetail from "./Common/LogoDetail";
import DownloadFile from "./Common/DownloadFile";
import FuelStationDetails from "./Common/FuelStationDetails";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const Template3 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    stationName: "",
    stationAddress: "",
    invoiceNumber: "",
    paymentMethod: "",
    currencyType: "",
    fuelRate: 0,
    date: "",
    time: "",
    vehicleNumber: "",
    vehicleType: "",
    customerName: "",
    logoUrl: "",
    fileDownloadName: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateVolume = () => {
    const volume = formData.totalAmount / formData.fuelRate;
    return parseFloat(volume.toFixed(2)); // Ensures the result is a number, not a string
  };
  const handleClear = () => {
    setFormData({
      stationName: "",
      stationAddress: "",
      invoiceNumber: "",
      paymentMethod: "",
      currencyType: "",
      fuelRate: 0,
      date: "",
      time: "",
      vehicleNumber: "",
      vehicleType: "",
      customerName: "",
      logoUrl: "",
      fileDownloadName: "",
      totalAmount: "",
    });
  };

  const printBill = () => {
    const billContent = document.getElementById("template3").innerHTML;

    const printWindow = window.open("", "", "width=full,height=full");
    printWindow.document.write(`
      <html>
        <head>
          <title>${formData.fileDownloadName}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <style>
            body {
              font-family: 'Press Start 2P', sans-serif;
            }
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
            }
          </style>
        </head>
        <body class="bg-white p-6">
          ${billContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <div className={`${mainTemplateContainer}`}>
      {/* Left Side */}
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>
        <form className="space-y-6">
          {/* Fuel Station Details */}
          <FuelStationDetails formData={formData} handleChange={handleChange} />

          {/* Payment Details */}
          <PaymentDetail
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />

          {/* Customer Details */}
          <CustomerDetails formData={formData} handleChange={handleChange} />

          {/* Logo details */}
          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          {/* File details */}
          <DownloadFile formData={formData} />
        </form>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={printBill}
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
        ;
      </div>

      {/* Right Side */}
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="template3"
          className="pressStart bg-white border border-gray-300 max-w-[100%] p-4 text-xs leading-relaxed rounded-3xl"
        >
          <div className="flex justify-center mb-4">
            <img
              src={formData.logoUrl}
              alt="Bank Logo"
              className="h-12 w-auto"
            />
          </div>
          {/* Welcome Section */}
          <div className="text-center space-y-1">
            <p className="font-bold text-md">WELCOME!!!</p>
            <p className="font-semibold text-sm">
              {formData.stationName},{formData.stationAddress}
            </p>
          </div>

          {/* Receipt Number */}
          <div className="mt-4">
            <p>
              <span className="font-bold">Receipt No.:</span> 7777
            </p>
          </div>

          {/* Product Details */}
          <div className="mt-4 space-y-1">
            <p>
              <span className="font-bold">PRODUCT:</span> {formData.vehicleType}
            </p>
            <p>
              <span className="font-bold">RATE/LTR:</span>{" "}
              {formData.currencyType} {formData.fuelRate}
            </p>
            <p>
              <span className="font-bold">AMOUNT:</span> {formData.currencyType}{" "}
              {formData.totalAmount}
            </p>
            <p>
              <span className="font-bold">VOLUME(LTR.):</span>{" "}
              {calculateVolume()} lt
            </p>
          </div>

          {/* Vehicle Details */}
          <div className="mt-4 space-y-1">
            <p>
              <span className="font-bold">VEH TYPE:</span>{" "}
              {formData.vehicleType}
            </p>
            <p>
              <span className="font-bold">VEH NO:</span>{" "}
              {formData.vehicleNumber}
            </p>
            <p>
              <span className="font-bold">
                CUSTOMER NAME: {formData.customerName}
              </span>
            </p>
          </div>

          {/* Date and Time */}
          <div className="mt-4 flex justify-between">
            <p>
              <span className="font-bold">Date:</span> {formData.date}
            </p>
            <p>
              <span className="font-bold">Time:</span> {formData.time}
            </p>
          </div>

          {/* Payment Mode */}
          <div className="mt-4">
            <p>
              <span className="font-bold">MODE: {formData.paymentMethod}</span>
            </p>
          </div>

          {/* Footer Message */}
          <div className="mt-4 border-t border-gray-300 pt-4 text-center">
            <p className="font-semibold">SAVE FUEL YAANI SAVE MONEY !!</p>
            <p>
              THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON 804613
              (TOLL-FREE) FOR QUERIES/COMPLAINTS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
