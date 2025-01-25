import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import BoardingPointDetails from "../Common/BoardingPointDetails";
import DropPointDetails from "../Common/DropPointDetails";
import PassengerDetails from "../Common/PassengerDetails";
import TravelDetails from "../Common/TravelDetails";
import PaymentDetailsLTA from "../Common/PaymentDetailsLTA";
import { formatDate } from "../../Reusable Function/formatDate";
import { calculateTaxAmount } from "../../Reusable Function/calculateTaxAmount";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";

const LTAReciptTemplate = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    landmark: "",
    reportingDate: "",
    departureTime: "",
    droppingPointDate: "",
    droppingPointTime: "",
    droppingAddress: "",
    nameAgeGender: "",
    noOfPerson: "",
    seatNo: "",
    travelType: "",
    travelName: "",
    travelAddress: "",
    ticketNo: "",
    boardingPointNo: "",
    customerCareNo: "",
    currencyType: "",
    paymentMethod: "",
    amount: "",
    tax: "",
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

  function calculateDedcutionAmount(amount) {
    return (0.0909 * amount).toFixed(2);
  }

  return (
    <div className={`${mainTemplateContainer}`}>
      <div className={`${templateLeftContainer}`}>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <BoardingPointDetails
            formData={formData}
            handleChange={handleChange}
          />

          <DropPointDetails formData={formData} handleChange={handleChange} />

          <PassengerDetails formData={formData} handleChange={handleChange} />

          <TravelDetails formData={formData} handleChange={handleChange} />

          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />

          <PaymentDetailsLTA formData={formData} handleChange={handleChange} />

          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() => printBill("ltaReciptBill", "Nunito Sans", formData)}
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
        <div id="ltaReciptBill">
          <div className="font-nunito max-w-4xl mx-auto px-4 py-4 bg-white shadow-lg rounded-md">
            <div>
              <span className="bg-yellow-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                Congratulations! You have booked a reschedulable ticket. You can
                advance or postpone this journey till{" "}
                {formatDate(formData.reportingDate)} {formData.departureTime}
              </span>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between">
              {/* Img */}
              <span className="pr-3 border-r border-gray-300 w-full sm:w-[17%] h-auto sm:h-[17%] mb-4 sm:mb-0">
                <img
                  src={formData.logoUrl}
                  alt="Logo"
                  className="w-20 h-20 mx-auto sm:mx-0"
                />
              </span>

              {/* ETicket */}
              <div className="text-center sm:text-left">
                <p className="text-2xl font-semibold">eTICKET</p>
              </div>

              {/* Right Most Part */}
              <div className="text-center sm:text-right mb-4">
                <p className="font-bold">Need help with your trip?</p>
                <p className="font-bold">Boarding Point Ph. No.:</p>
                <p>{formData.boardingPointNo}</p>
                <p className="font-bold">Travels-Customer Care:</p>
                <p>{formData.customerCareNo}</p>
                <p>Write to us here</p>
              </div>
            </div>
            <div className="w-full bg-gray-500 h-[0.2px]"></div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-1">
              <div className="text-left flex flex-col">
                <span className="text-lg flex gap-4">
                  <span className="font-semibold text-lg">
                    {formData.location}
                  </span>
                  <span>To</span>
                </span>
                <span className="text-lg flex gap-4">
                  <span className="font-semibold text-lg">
                    {formData.droppingAddress}
                  </span>
                  <span>{formData.reportingDate}</span>
                </span>
              </div>
              <div className="text-right text-xs mt-4 sm:mt-0">
                <p className="font-semibold">Ticket no: {formData.ticketNo}</p>
                <p className="font-thin">
                  PNR no: <br />
                  0VNG8D65EN234Y9VUTSS
                </p>
              </div>
            </div>

            <div className="w-full bg-orange-300 h-[0.2px] mt-1"></div>

            <div className="flex flex-wrap justify-evenly gap-4 py-5">
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.travelName}</p>
                <p>{formData.travelType}</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.reportingDate}</p>
                <p>Reporting Date</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.departureTime}</p>
                <p>Departure Time</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.noOfPerson}</p>
                <p>No of passenger</p>
              </div>
            </div>
            <div className="w-full bg-gray-500 h-[0.2px] mt-1"></div>

            <div className="flex flex-wrap justify-evenly gap-4 py-5">
              <div>
                <p className="font-semibold">Boarding point details</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.location}</p>
                <p>Location</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.landmark}</p>
                <p>Landmark</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.travelAddress}</p>
                <p>Address</p>
              </div>
            </div>
            <div className="w-full bg-gray-500 h-[0.2px] mt-1"></div>

            <div className="flex flex-wrap justify-evenly gap-4 py-5">
              <div>
                <p className="font-semibold">Dropping point details</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.droppingPointTime}</p>
                <p>Dropping point time</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">
                  {formatDate(formData.droppingPointDate)}
                </p>
                <p>Dropping point date</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="font-semibold">{formData.droppingAddress}</p>
                <p>Address</p>
              </div>
            </div>
            <div className="w-full bg-gray-500 h-[0.2px] mt-1"></div>

            <div className="flex flex-wrap justify-between gap-4 py-5 w-full sm:w-[70%]">
              <div>
                <p className="font-semibold">Passenger Details (Age, Gender)</p>
                <p>{formData.nameAgeGender}</p>
              </div>
              <div>
                <p className="font-semibold">Seat Number</p>
                <p>{formData.seatNo}</p>
              </div>
            </div>
            <div className="w-full bg-gray-500 h-[0.2px] mt-1"></div>

            <div className="flex flex-col gap-2 mb-4">
              <div>
                <p>
                  NOTE: This operator accepts mTicket, you need not carry a
                  printout
                </p>
              </div>
              <div className="justify-items-end">
                <p>
                  Total Fare:{" "}
                  <span className="text-3xl font-bold">
                    {formData.currencyType} {formData.amount}
                  </span>
                </p>
                <p className="w-[50%] text-right">
                  (18 % GST and service charge applicable, if any)
                </p>
                <p>
                  Net amount:{" "}
                  <span className="font-bold">
                    {formData.currencyType}{" "}
                    {calculateTaxAmount(formData.tax, formData.amount)}
                  </span>
                </p>
                <p>
                  Taxable amount:{" "}
                  <span className="font-bold">
                    {formData.currencyType}{" "}
                    {(
                      Number(formData.amount) -
                      calculateTaxAmount(formData.tax, formData.amount)
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-center space-x-4 gap-7">
                <div className="flex-1 h-[4px] bg-black"></div>
                <h2 className="text-xl font-extrabold">Terms & Conditions</h2>
                <div className="flex-1 h-[4px] bg-black"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="mt-6 space-y-4 text-[9px] w-full sm:w-[70%]">
                  <p>
                    Please note the following regarding the luggage policy for
                    your journey
                  </p>
                  <p>
                    Each passenger is allowed to carry one bag of up to{" "}
                    <span className="font-bold">10 kgs</span> and one personal
                    item such as a laptop bag, handbag, or briefcase of up to{" "}
                    <span className="font-bold">5 kgs</span>.
                  </p>
                  <p>
                    Passengers should not carry any goods like weapons,
                    inflammable, firearms, ammunition, drugs, liquor, smuggled
                    goods, etc.
                  </p>
                  <p>
                    Travel Operator reserves the right to deny boarding or
                    charge additional amounts in case the passenger is traveling
                    with extra luggage than what is mentioned above.
                  </p>
                  <p>
                    <span className="font-bold">Partial Cancellation</span> is{" "}
                    <span className="font-bold">NOT</span> allowed for this
                    ticket. Charges for complete ticket cancellation are
                    mentioned below.
                  </p>
                </div>

                <div className="mt-8 w-full sm:w-auto">
                  <table className="w-full border-t border-gray-300 text-left text-[9px]">
                    <thead>
                      <tr>
                        <th className="border-t border-gray-300 px-4 py-2">
                          Cancellation time
                        </th>
                        <th className="border-t border-gray-300 px-4 py-2">
                          Cancellation charges
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t border-gray-300 px-4 py-2">
                          After {formData.departureTime} on{" "}
                          {formatDate(formData.droppingPointDate)}
                        </td>
                        <td className="border-t border-gray-300 px-4 py-2">
                          {formData.currencyType} {formData.amount}
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-gray-300 px-4 py-2">
                          Before {formData.departureTime} on{" "}
                          {formatDate(formData.droppingPointDate)}
                        </td>
                        <td className="border-y border-gray-300 px-4 py-2">
                          {formData.currencyType}{" "}
                          {calculateDedcutionAmount(formData.amount)} will be
                          cut as cancellation charges
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default LTAReciptTemplate;
