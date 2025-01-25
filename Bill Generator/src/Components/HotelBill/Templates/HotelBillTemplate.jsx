import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import HotelDetails from "../Common/HotelDetails";
import PaymentDetailsHotel from "../Common/PaymentDetailsHotel";
import RoomDetails from "../Common/RoomDetails";
import GuestDetails from "../Common/GuestDetails";
import UploadImage from "../../Reuseable Components/UploadImage";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import { formatDate } from "../../Reusable Function/formatDate";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const HotelBillTemplate = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [receptionSignature, setReceptionSignature] = useState("URL");
  const [selectedReceptionSignature, setSelectedReceptionSignature] =
    useState(null);

  const [guestSignature, setGuestSignature] = useState("URL");
  const [selectedGuestSignature, setSelectedGuestSignature] = useState(null);

  const [formData, setFormData] = useState({
    hotelName: "",
    hotelAddress: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    billNo: "",
    nationality: "",
    roomNo: "",
    roomType: "",
    currencyType: "",
    paymentMethod: "",
    tax: "",
    advanceAmount: "",
    guestName: "",
    gender: "",
    age: "",
    guestAddress: "",
    roomDetails: [{ description: "", rate: "", days: "", subtotal: "" }],
    logoUrl: "",
    receptionSignature: "",
    guestSignature: "",
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

  // Function to add a new row
  const addRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      roomDetails: [
        ...prevData.roomDetails,
        { description: "", rate: 0, days: 0, subtotal: 0 },
      ],
    }));
  };

  // Function to remove a row (ensuring at least one row remains)
  const removeRow = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      roomDetails: prevData.roomDetails.filter((_, i) => i !== index),
    }));
  };

  // Function to handle input changes and update row data
  const handleChangeInRoomDetails = (index, field, value) => {
    const updatedRoomDetails = formData.roomDetails.map((row, i) => {
      if (i === index) {
        const updatedRow = { ...row, [field]: value };
        // Update subtotal if rate or days change
        if (field === "rate" || field === "days") {
          updatedRow.subtotal = updatedRow.rate * updatedRow.days;
        }
        return updatedRow;
      }
      return row;
    });

    setFormData((prevData) => ({
      ...prevData,
      roomDetails: updatedRoomDetails,
    }));
  };

  const calculateSubTotal = () => {
    var total = 0;
    for (let index = 0; index < formData.roomDetails.length; index++) {
      total += formData.roomDetails[index].subtotal;
    }

    return total;
  };

  const calculateCGST = () => {
    var taxAmt = formData.tax / 2;
    return ((taxAmt / 100) * calculateSubTotal()).toFixed(2);
  };
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <HotelDetails formData={formData} handleChange={handleChange} />

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <PaymentDetailsHotel
            formData={formData}
            handleChange={handleChange}
          />

          {/* Room Details */}
          <Wrapper>
            <Heading
              name={"Room Details"}
              toggleContent={toggleContent}
              isCollapsed={!isVisible}
              isVisible={isVisible}
            />
            <CollapseWrapper isVisible={isVisible}>
              <div className="px-4">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="min-w-full border-collapse text-sm text-left">
                    <thead className="border-b text-center">
                      <tr>
                        <th className="px-4 py-2">Room type & Description</th>
                        <th className="px-4 py-2">Rate</th>
                        <th className="px-4 py-2">No of days</th>
                        <th className="px-4 py-2">Sub Total</th>
                        <th className="px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.roomDetails.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2">
                            <textarea
                              className="w-full border rounded p-2"
                              value={row.description}
                              onChange={(e) =>
                                handleChangeInRoomDetails(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="number"
                              className="w-full border rounded p-2 text-right"
                              value={row.rate}
                              onChange={(e) =>
                                handleChangeInRoomDetails(
                                  index,
                                  "rate",
                                  parseInt(e.target.value) || 0
                                )
                              }
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="number"
                              className="w-full border rounded p-2 text-right"
                              value={row.days}
                              onChange={(e) =>
                                handleChangeInRoomDetails(
                                  index,
                                  "days",
                                  parseInt(e.target.value) || 0
                                )
                              }
                            />
                          </td>
                          <td className="px-4 py-2 text-right">
                            {row.subtotal}
                          </td>
                          <td className="px-4 py-2 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <button
                              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 w-full sm:w-auto"
                              onClick={addRow}
                            >
                              +
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 w-full sm:w-auto"
                              onClick={() => removeRow(index)}
                              disabled={formData.roomDetails.length === 1}
                            >
                              -
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CollapseWrapper>
          </Wrapper>

          <GuestDetails formData={formData} handleChange={handleChange} />

          <UploadImage
            formData={formData}
            setFormData={setFormData}
            imageDetail={receptionSignature}
            setImageDetail={setReceptionSignature}
            selectedFile={selectedReceptionSignature}
            setSelectedFile={setSelectedReceptionSignature}
            sectionName={"Receptionist Signature"}
            nameOfVar={"receptionSignature"}
          />

          <UploadImage
            formData={formData}
            setFormData={setFormData}
            imageDetail={guestSignature}
            setImageDetail={setGuestSignature}
            selectedFile={selectedGuestSignature}
            setSelectedFile={setSelectedGuestSignature}
            sectionName={"Guest Signature"}
            nameOfVar={"guestSignature"}
          />

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("hotelBillTemplate", "Nunito Sans", formData)
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
      <div className={`${templateRightContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="hotelBillTemplate">
          <div className="max-w-4xl font-nunito mx-auto my-8 p-6 bg-white shadow-md rounded-md border border-gray-300">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center mt-16">
              <div className="p-5 border border-gray-300 w-full rounded-lg flex flex-wrap justify-between">
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                  <img
                    src={formData.logoUrl}
                    alt="Logo"
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <div className="text-right flex flex-col gap-4 w-full sm:w-auto">
                  <h1 className="text-lg">{formData.hotelName}</h1>
                  <p className="text-sm">{formData.hotelAddress}</p>
                </div>
              </div>
            </div>

            <div className="px-5 border border-gray-300 rounded-lg">
              {/* Title Section */}
              <div className="text-center my-4 border-b border-gray-300">
                <h2 className="text-2xl font-medium pb-2">Tax Invoice</h2>
              </div>

              {/* Details Section */}
              <div className="flex flex-wrap gap-4 px-2">
                {/* Left Side Details */}
                <div className="flex flex-col justify-between py-2 w-full sm:w-[50%] border-b-2 border-black">
                  <div>
                    <p>
                      <span className="">Bill No:</span> {formData.billNo}
                    </p>
                    <p>
                      <span className="">Guest Name:</span> {formData.guestName}{" "}
                      ({formData.age}) ({formData.gender})
                    </p>
                  </div>
                  <p>
                    <span className="">Address:</span> {formData.guestAddress}
                  </p>
                </div>

                {/* Right Side Details */}
                <div className="space-y-2 text-xs w-full sm:w-[40%] pb-4">
                  <p>
                    <span className="font-bold">Res. No:</span>{" "}
                    {formData.billNo}
                  </p>
                  <p>
                    <span className="font-bold">Room No:</span>{" "}
                    {formData.roomNo}
                  </p>
                  <p>
                    <span className="font-bold">Room Type:</span>{" "}
                    {formData.roomType}
                  </p>
                  <p>
                    <span className="font-bold">Check In Date:</span>{" "}
                    {formatDate(formData.checkInDate)} {formData.checkInTime}
                  </p>
                  <p>
                    <span className="font-bold">Check Out Date:</span>{" "}
                    {formatDate(formData.checkOutDate)} {formData.checkOutTime}
                  </p>
                  <p>
                    <span className="font-bold">Pay Type:</span>{" "}
                    {formData.paymentMethod}
                  </p>
                  <p>
                    <span className="font-bold">Nationality:</span>{" "}
                    {formData.nationality}
                  </p>
                </div>
              </div>

              {/* Table Section */}
              <div className="mt-6">
                <table className="w-full border border-gray-200 text-center text-[10px]">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="border border-gray-300 px-1 py-2">
                        ROOM TYPE
                      </th>
                      <th className="border border-gray-300 px-1 py-2">
                        ROOM DESCRIPTION
                      </th>
                      <th className="border border-gray-300 px-1 py-2">RATE</th>
                      <th className="border border-gray-300 px-1 py-2">
                        NO. OF DAYS/NIGHT
                      </th>
                      <th className="border border-gray-300 px-1 py-2">
                        SUBTOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.roomDetails.map((room, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">
                          {formData.roomType}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {room.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ₹ {room.rate}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {room.days}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ₹ {room.subtotal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10 border-t border-gray-500 text-[10px] px-4">
                <div className="flex justify-between mt-3">
                  <p>Subtotal:</p>
                  <p>
                    {formData.currencyType} {calculateSubTotal()}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-wrap gap-6 text-xs">
                  <div className="w-full lg:w-[70%]">
                    <table className="w-full border-collapse border-spacing-0 text-[10px] text-left">
                      <thead className="border-b">
                        <tr>
                          <th className="px-5 py-2 font-extrabold">
                            Receipt No
                          </th>
                          <th className="px-5 py-2 font-extrabold">
                            Check In Date
                          </th>
                          <th className="px-5 py-2 font-extrabold">
                            Total Amount
                          </th>
                          <th className="px-5 py-2 font-extrabold">
                            Payment Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6 py-2">{formData.billNo}</td>
                          <td className="px-6 py-2">
                            {formatDate(formData.checkInDate)}
                          </td>
                          <td className="px-6 py-2">{calculateSubTotal()}</td>
                          <td className="px-6 py-2">
                            {formData.paymentMethod}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="mt-6 border p-4 rounded-md shadow-sm">
                      <p className="font-extrabold text-center text-lg border-b pb-2">
                        Amount Breakup
                      </p>
                      <div className="mt-2 flex flex-col gap-4 text-[10px] font-extrabold">
                        <div className="flex justify-between">
                          <div>SGST @{formData.tax / 2}%:</div>
                          <div>
                            {formData.currencyType} {calculateCGST()}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>CGST @{formData.tax / 2}%:</div>
                          <div>
                            {formData.currencyType} {calculateCGST()}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>Taxable Amount:</div>
                          <div className="text-right">
                            {formData.currencyType}{" "}
                            {calculateSubTotal() - 2 * calculateCGST()}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>Net Amount:</div>
                          <div>
                            {formData.currencyType} {calculateSubTotal()}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="font-bold">Total Amount:</div>
                          <div className="font-bold">
                            {formData.currencyType} {calculateSubTotal()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 w-full lg:w-[30%] text-[10px] text-gray-600">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between">
                        <div className="font-semibold">Less Advance:</div>
                        <div className="text-right">
                          {formData.currencyType} {formData.advanceAmount}
                        </div>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <div className="font-semibold">Receive:</div>
                        <div className="text-right">
                          {formData.currencyType}{" "}
                          {calculateSubTotal() - formData.advanceAmount}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="font-semibold">Payment Received:</div>
                        <div className="text-right">
                          {formData.currencyType} {calculateSubTotal()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-between">
                  <div className="w-full sm:w-auto">
                    <img
                      src={formData.receptionSignature}
                      alt="Signature"
                      className="h-12 mx-auto sm:mx-0"
                    />
                    <p className="text-xs text-gray-600 text-center sm:text-left">
                      Receptionist
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={formData.guestSignature}
                      alt="Profix"
                      className="h-12"
                    />
                    <p className="text-xs text-gray-600">Guest Signature</p>
                  </div>
                </div>

                <div className="mt-10 text-left mb-10">
                  <p className="text-xs text-gray-600">
                    Thank You, Visit Again!
                  </p>
                </div>
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

export default HotelBillTemplate;
