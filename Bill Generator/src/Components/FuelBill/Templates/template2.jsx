import { useState } from "react";
import PaymentDetail from "./Common/PaymentDetail";
import LogoDetail from "./Common/LogoDetail";
import DownloadFile from "./Common/DownloadFile";
import FuelStationDetails from "./Common/FuelStationDetails";
import CustomerDetails from "./Common/CustomerDetails";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const Template2 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleClear = () => {
    setFormData({
      fuelStation: "",
      fuelStationAddress: "",
      dealerName: "",
      density: "",
      invoiceNumber: 0,
      nozzleNo: 0,
      currencyType: "",
      fuelRate: 0,
      totalAmount: 0,
      date: "",
      time: "",
      logoUrl: "",
      fileDownloadName: "",
      vehicleNumber: "",
      vehicleType: "",
    });
  };

  const printBill = () => {
    const billContent = document.getElementById("template2").innerHTML;

    const printWindow = window.open("", "", "width=full,height=full");
    printWindow.document.write(`
      <html>
        <head>
          <title>${formData.fileDownloadName}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
            rel="stylesheet"
          />
          <style>
            body {
              font-family: 'Nunito', sans-serif;
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

  const [formData, setFormData] = useState({
    fuelStation: "",
    fuelStationAddress: "",
    dealerName: "",
    density: "",
    invoiceNumber: 0,
    nozzleNo: 0,
    currencyType: "",
    fuelRate: 0,
    totalAmount: 0,
    date: "",
    time: "",
    logoUrl: "",
    fileDownloadName: "",
    vehicleNumber: "",
    vehicleType: "",
  });

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
      {/* Form Section */}
      <div className={`${templateLeftContainer}`}>
        <form className="space-y-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-5">
            Please fill the details
          </h2>
          {/* Fuel Station Details */}
          <FuelStationDetails
            formData={formData}
            handleChange={handleChange}
            template2={true}
          />

          {/* Payment Details */}
          <PaymentDetail
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />

          {/* Customer Details */}
          <CustomerDetails
            formData={formData}
            handleChange={handleChange}
            template2={true}
          />

          {/* Logo Details */}
          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          {/* Download File Name */}
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

      {/* Bill Preview Section */}
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="template2"
          className="max-w-md rounded-3xl bg-white p-6  shadow-md text-center font-nunito"
        >
          {/* Logo */}
          <img
            src={formData.logoUrl} // Replace with your logo file path
            alt="Logo"
            className="w-12 mx-auto mb-4 object-contain"
          />

          {/* Fuel Station Details */}

          <h1 className="text-xl font-bold text-center">
            {formData.fuelStation}{" "}
          </h1>
          <p className="text-gray-700 text-center">{formData.dealerName}</p>
          <p className="text-gray-500 text-center">
            {formData.fuelStationAddress}
          </p>
          <p className="text-black font-medium mt-2 text-center">ORIGINAL</p>

          {/* Divider */}
          <hr className="border-dashed border-gray-300 my-4" />

          {/* Invoice Details */}
          <div className="text-center">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-medium text-right pr-4">DATE:</td>
                  <td>{formData.date}</td>
                  <td className="font-medium text-right pr-4">TIME:</td>
                  <td>{formData.time}</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">INVOICE NO:</td>
                  <td>{formData.invoiceNumber}</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">VEHICLE NO:</td>
                  <td>{formData.vehicleNumber}</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">NOZZLE NO:</td>
                  <td>{formData.nozzleNo}</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">PRODUCT:</td>
                  <td>{formData.vehicleType}</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">DENSITY:</td>
                  <td>{formData.density} Kg/m³</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">RATE:</td>
                  <td>
                    {formData.fuelRate} {formData.currencyType}/Ltr
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">VOLUME:</td>
                  <td>{calculateVolume()} Ltr</td>
                </tr>
                <tr>
                  <td className="font-medium text-right pr-4">AMOUNT:</td>
                  <td>
                    {formData.totalAmount} {formData.currencyType}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Divider */}
          <hr className="border-dashed border-gray-300 my-4" />

          {/* Footer */}
          <p className="text-gray-800 font-medium mt-2">
            Thank you Visit Again
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template2;
