import { useState } from "react";
import PaymentDetail from "./Common/PaymentDetail";
import CustomerDetails from "./Common/CustomerDetails";
import LogoDetail from "./Common/LogoDetail";
import DownloadFile from "./Common/DownloadFile";
import FuelStationDetails from "./Common/FuelStationDetails";
import { mainTemplateContainer, templateLeftContainer, templateRightContainer } from "../../Utils/constants";

const Template4 = () => {
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
    telNo: 0,
    fccId: 0,
    fipNo: 0,
    nozzleNo: 0,
  });

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
      telNo: 0,
      fccId: 0,
      fipNo: 0,
      nozzleNo: 0,
    });
  };

  const printBill = () => {
    const billContent = document.getElementById("template4").innerHTML;

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
  const calculateVolume = () => {
    const volume = formData.totalAmount / formData.fuelRate;
    return parseFloat(volume.toFixed(2)); // Ensures the result is a number, not a string
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log([name], value);
  };
  return (
    <div className={`${mainTemplateContainer}`}>
      {/* Left Part */}
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>
        <form className="space-y-6">
          {/* Fuel Station Details */}
          <FuelStationDetails
            formData={formData}
            handleChange={handleChange}
            template4={true}
          />

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
      </div>

      {/* Right Part */}
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="template4"
          className="pressStart bg-white border-2 border-gray-300 p-4 rounded-3xl max-w-sm text-center font-mono text-sm"
        >
          <img src={formData.logoUrl} alt="Logo" className="mx-auto mb-2" />
          <p className="font-bold text-center">WELCOME!!!</p>
          <div className="mt-4 text-left">
            <p className="font-bold">
              {formData.stationName} {formData.stationAddress}
            </p>
            <p className="mt-2">Tel. No.: {formData.telNo}</p>
            <p>Receipt No.: 7777</p>
            <p>FCC ID: {formData.fccId}</p>
            <p>FIP No.: {formData.fipNo}</p>
            <p>Nozzle No.: {formData.nozzleNo}</p>
          </div>

          <div className="mt-4 text-left">
            <p>PRODUCT: {formData.vehicleType}</p>
            <p>
              RATE/LTR: {formData.currencyType} {formData.fuelRate}
            </p>
            <p>
              AMOUNT: {formData.currencyType} {formData.totalAmount}
            </p>
            <p>VOLUME(LTR.): {calculateVolume()} lt</p>
          </div>

          <div className="mt-4 text-left">
            <p>VEH TYPE: {formData.vehicleType}</p>
            <p>VEH NO: {formData.vehicleNumber}</p>
            <p>CUSTOMER NAME: {formData.customerName}</p>
          </div>

          <div className="mt-4 flex justify-between">
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
          </div>

          <div className="mt-4 text-left">
            <p>MODE:{formData.paymentMethod}</p>
            <p>LST No.:</p>
            <p>VAT No.:</p>
            <p>ATTENDENT ID: Not Available</p>
          </div>

          <p className="mt-6 text-xs font-bold">
            SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN
            NOW CALL US ON 804613 (TOLL-FREE) FOR QUERIES/COMPLAINTS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
