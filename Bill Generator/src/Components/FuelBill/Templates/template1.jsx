import { useState } from "react";
import LogoDetail from "../Templates/Common/LogoDetail";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";
import FuelStationDetails from "./Common/FuelStationDetails";
import PaymentDetail from "./Common/PaymentDetail";
import CustomerDetails from "./Common/CustomerDetails";
import DownloadFile from "./Common/DownloadFile";

const Template1 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const printBill = () => {
    const billContent = document.getElementById("bill-section").innerHTML;

    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>${formData.fileDownloadName}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <style>
            body {
              font-family: 'Outfit', sans-serif;
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

  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleNumber: "",
    vehicleType: "",
    totalAmount: 0,
    customerName: "",
    stationName: "",
    stationAddress: "",
    invoiceNumber: 0,
    paymentMethod: "",
    currencyType: "",
    fuelRate: 0,
    time: "",
    date: "",
    logoUrl: "",
    fileDownloadName: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formData.logoUrl(URL.createObjectURL(file));

    setSelectedFile(file);
  };

  const renderTemplate = () => {
    switch (logoDetail) {
      case "URL":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Please enter a valid URL"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => (formData.logoUrl = e.target.value)}
            />
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" required className="h-4 w-4" />
              <span>
                I am authorized to use the logo for generating this bill.
              </span>
            </label>
          </div>
        );
      case "Gallery":
        return (
          <div className="space-y-4">
            <label className="block text-gray-700">
              Upload your logo or image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {selectedFile && (
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Selected File:</strong> {selectedFile.name}
                </p>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected Logo"
                  className="w-32 h-32 object-cover mt-2 rounded-lg border"
                />
              </div>
            )}
            <label className="flex items-center ml-1 gap-2 text-gray-700">
              <input type="checkbox" required className="h-4 w-4" />
              <span>
                I am authorized to use the logo for generating this bill.
              </span>
            </label>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Please enter a valid URL"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => (formData.logoUrl = e.target.value)}
            />
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" required className="h-4 w-4" />
              <span>
                I am authorized to use the logo for generating this bill.
              </span>
            </label>
          </div>
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      vehicleName: "",
      vehicleNumber: "",
      vehicleType: "",
      totalAmount: 0,
      customerName: "",
      stationName: "",
      stationAddress: "",
      invoiceNumber: 0,
      paymentMethod: "",
      currencyType: "",
      fuelRate: 0,
      time: "",
      date: "",
      logoUrl: "",
      fileDownloadName: "",
    });
  };

  const calculateLitre = () => {
    return formData.totalAmount / formData.fuelRate;
  };

  return (
    <div className={`${mainTemplateContainer}`}>
      {/* Fuel Station Details */}
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          {/* Full Station Details Section */}
          <FuelStationDetails formData={formData} handleChange={handleChange} />

          {/* Payment Details */}
          <PaymentDetail
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />

          {/* Customer Details Section */}
          <CustomerDetails formData={formData} handleChange={handleChange} />

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

      {/* Bill Template */}
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div
          id="bill-section"
          className="bill-template  bg-white px-12 py-5 rounded-[2rem] shadow-lg space-y-6 flex flex-col"
        >
          <h2 className="text-3xl font-medium text-gray-800 mb-6">
            Fuel Receipt
          </h2>

          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div>
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded Logo"
                    className="w-32 h-32 object-contain rounded-lg border"
                  />
                ) : formData.logoUrl ? (
                  <img
                    src={formData.logoUrl}
                    alt="URL Logo"
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                ) : (
                  <p className="text-gray-500">No logo selected.</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-end">
                  Receipt Details
                </h3>
                <ul className="text-end">
                  <li>Receipt Number: RP-{formData.invoiceNumber}</li>
                  <li>Date: {formData.date}</li>
                  <li>Time: {formData.time}</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Billed To</h3>
                <ul>
                  <li>Customer Name: {formData.customerName}</li>
                  <li>Vehicle Number: {formData.vehicleNumber}</li>
                  <li>Vehicle Type: {formData.vehicleType}</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-end">
                  Fuel Station Details
                </h3>
                <ul className="text-end">
                  <li>Fuel Station Name: {formData.stationName}</li>
                  <li>Fuel Station Address: {formData.stationAddress}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">
              Payment Method: {formData.paymentMethod}
            </h3>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2 bg-gray-200 px-4">
              Receipt Summary
            </h3>
            <table className="w-full table-auto border-collapse border-2 text-center">
              <thead>
                <tr className="border-2">
                  <th className="px-4 border-2 py-2 font-medium text-center">
                    Fuel Rate
                  </th>
                  <th className="px-4 border-2 py-2 font-medium text-center">
                    Quantity
                  </th>
                  <th className="px-4 border-2 py-2 font-medium text-center">
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-2">
                    {formData.currencyType}
                    {formData.fuelRate}
                  </td>
                  <td className="px-4 py-2 border-2">
                    {calculateLitre()} litre.
                  </td>
                  <td className="px-4 py-2 border-2">{formData.totalAmount}</td>
                </tr>
              </tbody>
            </table>
            <p className="font-semibold text-lg px-2 text-end mt-2">
              Total: ₹{formData.totalAmount}
            </p>
          </div>

          <div className="text-center mb-4">
            <p className="font-medium text-xl mt-8">
              THANK YOU! FOR FUELLING WITH US!
            </p>
            <p className="text-md mt-2">
              FOR ANY QUERIES AND COMPLAINTS, VISIT OUR CUSTOMER CARE
            </p>
          </div>

          <div className="text-center">
            <p className="font-medium mt-4 text-xl">
              SAVE FUEL, SECURE THE FUTURE!
            </p>
            <p className="text-md mt-2">TIME: {formData.time}</p>
          </div>
        </div>
        <p className="mt-2 p-2 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default Template1;
