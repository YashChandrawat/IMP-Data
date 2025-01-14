import { useState } from "react";
import LogoDetail from "../Templates/Common/LogoDetail";

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
    <div className="flex justify-between min-h-screen">
      {/* Fuel Station Details */}
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <div className="bg-white rounded-[2rem]  space-y-4 border-2 border-gray-200">
            <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
              Full Station Details
            </h3>

            <div className="px-6 pb-8 flex flex-col gap-4">
              {/* Fuel Station Name */}
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Fuel Station Name:
                </label>
                <input
                  type="text"
                  name="stationName"
                  value={formData.stationName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Fuel Station Address */}
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Fuel Station Address:
                </label>
                <input
                  type="text"
                  name="stationAddress"
                  value={formData.stationAddress}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex gap-4">
                {/* Invoice Number */}
                <div className="w-full">
                  <label className="block text-gray-500 font-medium mb-1">
                    Invoice Number:
                  </label>
                  <input
                    type="number"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                {/* Payment Method */}
                <div className="w-full">
                  <label className="block text-gray-500 font-medium mb-1">
                    Payment Method:
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Online">Online</option>
                    <option value="Card">Card</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
            <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
              Payment Details
            </h3>
            <div className="px-6 pb-8 flex flex-col gap-4">
              {/* Currency Type */}
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Currency
                </label>
                <select
                  name="currencyType"
                  value={formData.currencyType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Currency Type</option>
                  <option value="₹">Indian Rupees</option>
                  <option value="$">Dollar</option>
                </select>
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-gray-500 font-medium mb-1">
                    Fuel Rate:
                  </label>
                  <input
                    type="number"
                    name="fuelRate"
                    value={formData.fuelRate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-gray-600 font-medium mb-1">
                    Total Amount:
                  </label>
                  <input
                    type="number"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-gray-600 font-medium mb-1">
                    Fuel Bill Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-gray-600 font-medium mb-1">
                    Fuel Bill Time:
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
            <h3 className="text-lg px-6 font-semibold border-b-2 py-4 text-gray-800  border-gray-200">
              Customer Details
            </h3>
            <div className="px-6 pb-8 flex flex-col gap-4">
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Customer Name:
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Vehicle Number */}
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Vehicle Number:
                </label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-gray-500 font-medium mb-1">
                  Vehicle Type:
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                </select>
              </div>
            </div>
          </div>

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg ">
            {/* Header */}
            <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
              File Details
            </h3>

            <div className="px-6 pb-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-md font-medium text-gray-600">
                  Download file name
                </label>
                <input
                  type="text"
                  placeholder="Example: abc,xyz..."
                  className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
                  onChange={(e) => (formData.fileDownloadName = e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  This will be used as the name of the generated PDF file.
                </p>
              </div>
            </div>
          </div>
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
      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
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
