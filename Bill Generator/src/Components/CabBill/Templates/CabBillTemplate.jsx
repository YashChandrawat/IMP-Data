import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import TripDetails from "../Common/TripDetails";
import PaymentDetailsCab from "../Common/PaymentDetailsCab";
import VehicleDetails from "../Common/VehicleDetails";
import LocationDetails from "../Common/LocationDetails";
import UploadImage from "../../Reuseable Components/UploadImage";
import { formatDate } from "../../Reusable Function/formatDate";

const CabBillTemplate = ({ template1, template2 }) => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [mapDetails, setMapDetails] = useState("URL");
  const [selectedMapDetails, setSelectedMapDetails] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    driverName: "",
    currencyType: "",
    paymentMethod: "",
    tripAmount: "",
    tax: "",
    convenienceFee: "",
    airportPickupCharge: "",
    date: "",
    cabServiceAddress: "",
    vehicleNo: "",
    vehicleModal: "",
    totalDistance: "",
    unit: "",
    invoiceNo: "",
    mobileNo: "",
    pickupPoint: "",
    dropPoint: "",
    pickupTime: "",
    dropPointTime: "",
    mapDetails:
      "https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Cab+Bill/ola-6.png",
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

  const handleClear = () => {
    setFormData({});
    setLogoDetail("URL");
    setSelectedFile(null);
  };

  function calculateTax(tax, amount) {
    var inclusiveTax = Number(tax) + 100;
    var temp = amount / inclusiveTax;
    var res = temp * 100;
    return ((amount - res) / 2).toFixed(2) * 2;
  }

  function calculateTripCharge() {
    return (
      Number(formData.tripAmount) -
      calculateTax(formData.tax, formData.tripAmount) -
      Number(formData.convenienceFee) -
      Number(formData.airportPickupCharge)
    );
  }

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <TripDetails formData={formData} handleChange={handleChange} />
          <PaymentDetailsCab
            formData={formData}
            handleChange={handleChange}
            template2={template2}
          />
          <VehicleDetails
            formData={formData}
            handleChange={handleChange}
            template2={template2}
          />
          <LocationDetails formData={formData} handleChange={handleChange} />
          {template2 && (
            <UploadImage
              formData={formData}
              setFormData={setFormData}
              imageDetail={mapDetails}
              setImageDetail={setMapDetails}
              selectedFile={selectedMapDetails}
              setSelectedFile={setSelectedMapDetails}
              sectionName={"Map Details"}
              nameOfVar={"mapDetails"}
            />
          )}
          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill(
                `${template1 ? "cabBillTemplate1" : "cabBillTemplate2"}`,
                "Roboto",
                formData
              )
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

      {/* Bill Preview */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        {template1 && (
          <div id="cabBillTemplate1">
            <div className="bg-gray-50 flex items-center font-roboto">
              <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                {/* Logo and Date */}
                <div className="flex justify-between items-center mb-6 border-b-4 pb-4">
                  <div className="flex items-center">
                    <img
                      src={formData.logoUrl}
                      alt="Logo"
                      className="w-18 h-16"
                    />
                  </div>
                  <div className="text-base font-semibold text-gray-600">
                    {formatDate(formData.date)}
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-4">
                  <h1 className="text-[2.5rem] font-normal text-left w-[85%]">
                    Here's your receipt for your ride, {formData.customerName}
                  </h1>
                  <p className="text-base text-gray-500 font-semibold mt-2 text-left">
                    We hope you enjoyed your ride.
                  </p>
                </div>

                {/* Fare Details */}
                <div className="border-b-4 border-gray-300 py-4 ">
                  <div className="flex justify-between mb-2">
                    <h2 className=" text-[2rem] ">Trip Total Fare</h2>
                    <span className=" text-[2rem] ">
                      ₹ {formData.tripAmount}
                    </span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="border-b-4 border-gray-200 py-5 text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Trip Charge</span>
                    <span className="font-medium">
                      ₹ {calculateTripCharge()}
                    </span>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>₹ {calculateTripCharge()}</span>
                  </div>
                </div>

                {/* Additional Fees */}
                <div className="mt-4 text-xs flex flex-col gap-2 font-semibold border-b-4 pb-5">
                  <div className="flex justify-between text-gray-500">
                    <span>Toll Convenience fee</span>
                    <span>₹ {formData.convenienceFee}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 mt-2">
                    <span>Airport Pick Up Charge</span>
                    <span>₹ {formData.airportPickupCharge}</span>
                  </div>
                </div>

                {/* Payments Section */}
                <div className="border-y-4 border-gray-200 py-6 mt-8">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-[2rem] font-normal">Payments</h1>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <h2 className="text-[1.7rem] font-semibold text-gray-700">
                      {formData.paymentMethod}
                    </h2>
                    <span className="text-[1.7rem]  font-semibold">
                      ₹ {formData.tripAmount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xl">
                    The total of ₹ {formData.tripAmount} has a GST of ₹{" "}
                    {calculateTax(formData.tax, formData.tripAmount)} included.
                  </p>
                </div>

                {/* Ride Details Section */}
                <div className="mt-6">
                  <h2 className=" text-2xl mb-2">
                    You rode with {formData.driverName}
                  </h2>
                  <p className="text-gray-500 text-xs mb-4 font-semibold">
                    License Plate: {formData.vehicleNo}
                  </p>

                  {/* Ride Info */}
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-xs">
                      <span className="font-semibold">
                        {formData.vehicleModal}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {formData.totalDistance} {formData.unit}
                      </span>
                    </div>
                  </div>

                  {/* Route Details */}
                  <div className="flex gap-3 py-4">
                    <img
                      src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/trip.png"
                      alt="Line with dot"
                    />
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <p className="text-xs">
                          <span className="font-medium text-gray-700">
                            {formData.pickupTime}
                          </span>{" "}
                          | {formData.pickupPoint}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span className="font-medium text-gray-700">
                            {formData.dropPointTime}
                          </span>{" "}
                          | {formData.dropPoint}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <p className="text-xs text-gray-500 font-semibold mt-4 mb-4">
                    Fares are inclusive of GST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {template2 && (
          <div id="cabBillTemplate2">
            <div className=" gap-4 bg-white flex justify-center flex-col items-center font-roboto">
              <div className="bg-white  rounded-lg px-4 py-1 w-full max-w-md border border-gray-200">
                {/* Header */}
                <div className="flex justify-center flex-col mb-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 font-semibold">
                      {formatDate(formData.date)}
                    </p>
                    <img
                      src={formData.logoUrl}
                      alt="Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="text-4xl font-normal">
                      ₹ {formData.tripAmount}
                    </h1>
                    <p className="text-xl text-gray-700">
                      Thanks for travelling with us, {formData.customerName}
                    </p>
                  </div>
                </div>

                {/* Ride Details */}
                <div className="flex gap-6 mb-6 ">
                  {/* Ride Details */}
                  <div className="flex flex-col w-[100%]">
                    <div className="w-[100%]">
                      <h2 className="font-bold text-lg text-center">
                        Ride Details
                      </h2>
                      <img
                        src={formData.mapDetails}
                        alt="Map"
                        className="w-[15.652rem] h-[21.875rem]"
                      />
                    </div>
                  </div>

                  {/* Bill Details */}
                  <div className="font-semibold w-[100%]">
                    <h2 className="font-bold text-lg mb-2 text-center">
                      Bill Details
                    </h2>
                    <div className="flex justify-between mb-2 bg-[#dddddd] p-4">
                      <p className="text-base ">Your Trip</p>
                      <p className="text-xl text-right">
                        ₹ {calculateTripCharge()}
                      </p>
                    </div>
                    <div className="flex justify-between mb-2 p-4">
                      <p className="text-base text-gray-700">
                        Toll Convenience fee
                      </p>
                      <p className="text-base ">₹ {formData.convenienceFee}</p>
                    </div>
                    <div className="flex justify-between mb-4 p-4 bg-[#dddddd]">
                      <p className="text-base text-gray-700 ">
                        Airport Charges
                      </p>
                      <p className="text-base ">
                        ₹ {formData.airportPickupCharge}
                      </p>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-4 p-4">
                      <p className="text-base ">
                        Total Bill * (rounded){" "}
                        <span className="mt-2 text-xs text-gray-500">
                          Includes ₹{" "}
                          {calculateTax(formData.tax, formData.tripAmount)}{" "}
                          Taxes
                        </span>
                      </p>
                      <p className="text-lg">₹ {formData.tripAmount}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className=" w-[50%]">
                    <p className="text-gray-700 text-lg">
                      You rode with{" "}
                      <span className="">{formData.driverName}</span>
                    </p>
                    <div className="flex items-center justify-center gap-6">
                      <img
                        src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Cab%20Bill/ola-4.png"
                        alt="Distance"
                        className="w-[4.75rem] h-[2.75rem] mr-2"
                      />
                      <p className="text-base font-black ">
                        {formData.totalDistance} {formData.unit}
                      </p>
                    </div>
                    <div className="flex items-center mt-2 justify-center gap-6">
                      <img
                        src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Cab%20Bill/ola-5.png"
                        alt="Car"
                        className="w-24 h-24 mr-2"
                      />
                      <p className="text-base font-black ">
                        {formData.vehicleModal}
                      </p>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    {/* Footer */}
                    <p className="text-xs text-gray-600 px-3">
                      We've fulfilled our promise to take you to destination for
                      pre-agreed Total Fare. Modifying the drop/route can change
                      this fare.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 mt-5">
                  <div className="flex flex-col justify-between font-black text-[1rem]">
                    <p>{formData.pickupTime}</p>
                    <p>{formData.dropPointTime}</p>
                  </div>
                  <div>
                    <img
                      src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Cab%20Bill/ola-7.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between font-black">
                    <p>{formData.pickupPoint}</p>
                    <p>{formData.dropPoint}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-lg font-black border-b-2 border-gray-100 text-center">
                    Payment
                  </p>
                  <p className="text-[2rem] text-center">
                    Paid by {formData.paymentMethod} ₹ {formData.tripAmount}
                  </p>
                </div>
                <div className="mx-2 bg-[#dddddd] px-12 py-6 text-center mt-4">
                  <p>
                    In case of any complaint/grievance against this invoice,
                    write to us at
                  </p>
                  <p className="font-black">{formData.dropPoint}</p>
                </div>
              </div>

              <div className="bg-[#dddddd] px-4 py-1 w-full max-w-md border border-gray-200">
                <div className="bg-white px-6 py-4 w-full max-w-lg">
                  {/* Header Section */}
                  <div className="text-center mb-4">
                    <p className="text-base font-black">Original Tax Invoice</p>
                    <h1 className="text-4xl font-medium text-gray-800">
                      Driver Trip Invoice
                    </h1>
                  </div>

                  {/* Driver and Service Details */}
                  <div className="flex justify-between items-center gap-4 border-b-4 border-gray-300 pb-4 mb-4">
                    <div className="flex justify-center items-center gap-1">
                      <img
                        src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Cab%20Bill/ola-5.png"
                        alt=""
                        className="w-12"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-black">
                          {formData.driverName}
                        </p>
                        <p className="text-xs font-black">
                          {formData.vehicleModal}
                        </p>
                        <p className="text-xs font-black">
                          {formData.vehicleNo}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-right w-[70%]">
                      Service Tax Category:{" "}
                      <span className="font-medium text-black">
                        Renting of Cab
                      </span>
                    </p>
                  </div>

                  {/* Invoice Details */}
                  <div className="flex flex-col gap-4 text-xs text-gray-700 pb-4 mb-4">
                    <div className="flex justify-between border-b-4 py-2 border-gray-300">
                      <p>
                        Invoice ID:{" "}
                        <span className="text-right font-black text-black">
                          {formData.invoiceNo}
                        </span>
                      </p>

                      <p>
                        Invoice Date:{" "}
                        <span className="text-right font-black text-black">
                          {formatDate(formData.date)}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between border-b-4 py-2 border-gray-300">
                      <p>
                        Customer Name:{" "}
                        <span className="text-right font-black text-black">
                          {formData.customerName}
                        </span>
                      </p>

                      <p>
                        Mobile Number:{" "}
                        <span className="text-right font-black text-black ">
                          {formData.mobileNo}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between border-b-4 py-2 border-gray-300">
                      <p>
                        Pickup Address:{" "}
                        <span className="text-right font-black text-black">
                          {formData.pickupPoint}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-black flex flex-col gap-3">
                    <div className="flex justify-between ">
                      <p>Description</p>
                      <p>Amount (₹)</p>
                    </div>
                    <div>
                      <hr className="w-[100%] border border-gray-200 border-dashed" />
                      <hr className="w-[100%] border-2 border-gray-200" />
                    </div>
                    <div className="flex justify-between">
                      <p>Ride Fee</p>
                      <p>₹ {calculateTripCharge()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Toll Convenience fee </p>
                      <p>₹ {formData.convenienceFee}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Airport Charges </p>
                      <p>₹ {formData.airportPickupCharge}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p>CGST </p>
                        <p className="text-gray-500">{formData.tax / 2} %</p>
                      </div>
                      <p>
                        {calculateTax(formData.tax, formData.tripAmount) / 2}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p>SGST </p>
                        <p className="text-gray-500">{formData.tax}/2 %</p>
                      </div>
                      <p>
                        {calculateTax(formData.tax, formData.tripAmount) / 2}
                      </p>
                    </div>
                    <hr className="w-[100%] border border-gray-200 border-dashed" />
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>₹ {formData.tripAmount}</p>
                    </div>
                    <hr className="w-[100%] border border-gray-200" />
                    <div className="flex justify-between items-center">
                      <div>
                        <p>Total</p>
                        <p className="text-gray-500">Customer Ride Fare</p>
                      </div>
                      <p className="text-lg">₹ {formData.tripAmount}</p>
                    </div>
                    <hr className="w-[100%] border border-gray-400" />
                  </div>

                  {/* Footer Note */}
                  <div className="text-xs text-black mt-4">
                    <p>
                      1. This invoice is issued on behalf of Transport Service
                      Provider.2. This is an electronically generated invoice
                      and does not require a digital signature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="mt-2 px-6 text-gray-500">
          Watermark will be removed from actual pdf
        </p>
      </div>
    </div>
  );
};

export default CabBillTemplate;
