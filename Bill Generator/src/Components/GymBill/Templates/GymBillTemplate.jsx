import { useState } from "react";
import printBill from "../../Utils/printBill";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import GymDetails from "../Common/GymDetails";
import BillingDetails from "../Common/BillingDetails";
import GymCustomerDetails from "../Common/GymCustomerDetails";
import Wrapper from "../../Reuseable Components/Wrapper";
import Heading from "../../Reuseable Components/Heading";
import GymPaymentDetails from "../Common/GymPaymentDetails";
import UploadImage from "../../Reuseable Components/UploadImage";
import { formatDate } from "../../Reusable Function/formatDate";
import {
  mainTemplateContainer,
  templateLeftContainer,
  templateRightContainer,
} from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const GymBillTemplate = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);

  const [signatureDetails, setSignatureDetails] = useState("URL");
  const [selectedSignatureDetails, setSelectedSignatureDetails] =
    useState(null);

  const [formData, setFormData] = useState({
    gymName: "",
    gymAddress: "",
    remark: "",
    invoiceNo: "",
    userNo: "",
    invoiceDate: "",
    billFromDate: "",
    billingCycle: "",
    billToDate: "",
    gymEmail: "",
    gymNo: "",
    customerNo: "",
    customerName: "",
    customerAddress: "",
    currencyType: "",
    paymentMethod: "",
    tax: "",
    signatureDetails: "",
    itemDetails: [
      { name: "", desc: "", price: "", quantity: "", subtotal: "" },
    ],
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

  // Function to add a new row
  const addRow = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      itemDetails: [
        ...prevFormData.itemDetails,
        { name: "", desc: "", price: "", quantity: "", subtotal: "" },
      ],
    }));
  };

  // Function to remove a row (ensuring at least one row remains)
  const removeRow = (index) => {
    setFormData((prevFormData) => {
      const updatedItemDetails = [...prevFormData.itemDetails];
      updatedItemDetails.splice(index, 1);
      return { ...prevFormData, itemDetails: updatedItemDetails };
    });
  };

  // Function to handle input changes and update row data
  const handleChangeInRoomDetails = (index, field, value) => {
    setFormData((prevFormData) => {
      const updatedItemDetails = [...prevFormData.itemDetails];
      updatedItemDetails[index][field] = value;
      // Update subtotal if price or quantity is changed
      if (field === "price" || field === "quantity") {
        updatedItemDetails[index].subtotal =
          (updatedItemDetails[index].price || 0) *
          (updatedItemDetails[index].quantity || 0);
      }
      return { ...prevFormData, itemDetails: updatedItemDetails };
    });
  };

  function calculateTotal() {
    var total = 0;
    for (let index = 0; index < formData.itemDetails.length; index++) {
      total += formData.itemDetails[index].subtotal;
    }
    return total;
  }

  function calculateTax(tax, amount) {
    var taxPercent = tax / 100;
    var taxAmt = taxPercent * amount;

    return taxAmt.toFixed(2);
  }

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
          <GymDetails formData={formData} handleChange={handleChange} />
          <BillingDetails formData={formData} handleChange={handleChange} />
          <GymCustomerDetails formData={formData} handleChange={handleChange} />
          <LogoDetail
            formData={formData}
            setFormData={setFormData}
            logoDetail={logoDetail}
            setLogoDetail={setLogoDetail}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            sectionName={"Logo Details"}
          />
          <Wrapper>
            <Heading
              name={"Item Details"}
              toggleContent={toggleContent}
              isCollapsed={!isVisible}
              isVisible={isVisible}
            />
            <CollapseWrapper isVisible={isVisible}>
              <div className="px-2 overflow-scroll no-scrollbar">
                <table className="w-full border-collapse text-sm text-left">
                  <thead className=" border-b text-center">
                    <tr>
                      <th className="px-4 py-2">Name & Description</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Sub Total</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.itemDetails.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={row.name}
                            className="w-full border rounded p-2"
                            onChange={(e) =>
                              handleChangeInRoomDetails(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                          />
                          <textarea
                            className="w-full border rounded p-2"
                            value={row.desc}
                            onChange={(e) =>
                              handleChangeInRoomDetails(
                                index,
                                "desc",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            className="w-full border rounded p-2 text-right"
                            value={row.price}
                            onChange={(e) =>
                              handleChangeInRoomDetails(
                                index,
                                "price",
                                parseInt(e.target.value) || 0
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            className="w-full border rounded p-2 text-right"
                            value={row.quantity}
                            onChange={(e) =>
                              handleChangeInRoomDetails(
                                index,
                                "quantity",
                                parseInt(e.target.value) || 0
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 text-right">{row.subtotal}</td>
                        <td className="px-4 py-2 flex items-center space-x-2">
                          <button
                            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
                            onClick={addRow}
                          >
                            +
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                            onClick={() => removeRow(index)}
                            disabled={formData.itemDetails.length === 1}
                          >
                            -
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapseWrapper>
          </Wrapper>
          <GymPaymentDetails formData={formData} handleChange={handleChange} />
          <UploadImage
            formData={formData}
            setFormData={setFormData}
            imageDetail={signatureDetails}
            setImageDetail={setSignatureDetails}
            selectedFile={selectedSignatureDetails}
            setSelectedFile={setSelectedSignatureDetails}
            sectionName={"Signature Details"}
            nameOfVar={"signatureDetails"}
          />
          <DownloadFile formData={formData} handleChange={handleChange} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() =>
              printBill("gymBillTemplate", "Nunito Sans", formData)
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
        <div id="gymBillTemplate">
          <div className="font-nunito max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg rounded-md">
            {/* Header Section */}
            <div className="flex flex-col font-spaceMono text-end text-xs mb-4">
              <p>
                <span className="font-bold">Invoice:</span> {formData.invoiceNo}
              </p>
              <p>
                <span className="font-bold">Invoice Date:</span>{" "}
                {formatDate(formData.invoiceDate)}
              </p>
            </div>

            {/* Gym Info Section */}
            <div className="w-full font-montserrat bg-[#f87f73] bg-custom-gradient rounded-xl flex flex-col md:flex-row px-6 py-2 text-md justify-between gap-4">
              <div className="flex justify-center md:w-[45%]">
                <div>
                  <img
                    src={formData.logoUrl}
                    alt="logo"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <div className="w-full md:w-[45%] font-medium">
                  <p>{formData.gymName}</p>
                  <p>{formData.gymAddress}</p>
                  <p>{formData.gymNo}</p>
                  <p>{formData.gymEmail}</p>
                </div>
              </div>
              <div className="text-end md:w-[45%]">
                <p>
                  <span className="font-bold">User Id: </span>
                  {formData.userNo}
                </p>
                <p>
                  <span className="font-bold">Customer Name: </span>
                  {formData.customerName}
                </p>
                <p>
                  <span className="font-bold">Customer Address: </span>
                  {formData.customerAddress}
                </p>
                <p>
                  <span className="font-bold">Mobile: </span>
                  {formData.customerNo}
                </p>
              </div>
            </div>

            {/* Account Summary Section */}
            <div className="font-spaceMono mt-6">
              <div>
                <p>Account Summary</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                <div className="flex flex-col justify-between px-4 py-2 bg-gray-300 rounded-xl h-[11rem] text-center">
                  <span className="text-gray-500">Bill From Date</span>
                  <span>{formatDate(formData.billFromDate)}</span>
                </div>
                <div className="flex flex-col justify-between px-4 py-2 bg-gray-300 rounded-xl h-[11rem] text-center">
                  <span className="text-gray-500">Billing Cycle</span>
                  <span>{formData.billingCycle}</span>
                </div>
                <div className="flex flex-col justify-between px-4 py-2 bg-gray-300 rounded-xl h-[11rem] text-center">
                  <span className="text-gray-500">Due Date</span>
                  <span>{formatDate(formData.billToDate)}</span>
                </div>
                <div className="flex flex-col justify-between px-4 py-2 bg-gray-300 rounded-xl h-[11rem] text-center">
                  <span className="text-gray-500">Amount</span>
                  <span>{calculateTotal()}</span>
                </div>
                <div className="flex flex-col justify-between px-4 py-2 bg-gray-300 rounded-xl h-[11rem] text-center">
                  <span className="text-gray-500">Payment Mode</span>
                  <span>{formData.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Billing Details Section */}
            <div className="mt-6">
              <h2 className="text-lg font-extrabold mb-4 px-2 py-1 bg-gray-200">
                Billing Details
              </h2>
              <table className="w-full border-collapse border-b border-gray-300 text-sm font-spaceMono">
                <thead>
                  <tr>
                    <th className="border-t border-gray-300 px-2 py-2 text-left">
                      Gym Item
                    </th>
                    <th className="border-t border-gray-300 px-2 py-2 text-center">
                      Unit
                    </th>
                    <th className="border-t border-gray-300 px-2 py-2 text-right">
                      Net Amount
                    </th>
                    <th className="border-t border-gray-300 px-2 py-2 text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formData.itemDetails.map((item, index) => (
                    <tr key={index}>
                      <td className="border-t border-gray-300 px-2 py-2">
                        <span className="block text-lg font-montserrat">
                          {item.name}
                        </span>
                        <span className="block text-gray-500 text-sm">
                          {item.desc}
                        </span>
                      </td>
                      <td className="border-t border-gray-300 px-2 py-2 text-center">
                        {item.quantity}
                      </td>
                      <td className="border-t border-gray-300 px-2 py-2 text-right">
                        ₹ {item.price}
                      </td>
                      <td className="border-t border-gray-300 px-2 py-2 text-right">
                        ₹ {item.subtotal}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colSpan="3"
                      className="border-t border-gray-300 px-2 py-2 text-right font-bold"
                    >
                      Subtotal
                    </td>
                    <td className="border-t border-gray-300 px-2 py-2 text-right">
                      ₹ {calculateTotal()}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      className="border-t border-gray-300 px-2 py-2 text-right font-bold"
                    >
                      Tax %
                    </td>
                    <td className="border-t border-gray-300 px-2 py-2 text-right">
                      {formData.tax} %
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      className="border-t border-gray-300 px-2 py-2 text-right font-bold"
                    >
                      Taxable Amount
                    </td>
                    <td className="border-t border-gray-300 px-2 py-2 text-right">
                      ₹ {calculateTax(formData.tax, calculateTotal())}
                    </td>
                  </tr>
                  <tr className="font-bold">
                    <td
                      colSpan="3"
                      className="border-t border-gray-300 px-2 py-2 text-right"
                    >
                      Total
                    </td>
                    <td className="border-t border-gray-300 px-2 py-2 text-right">
                      ₹{" "}
                      {Number(calculateTotal()) +
                        Number(calculateTax(formData.tax, calculateTotal()))}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Instructions for Gym Section */}
            <div className="mt-6 font-spaceMono">
              <h2 className="text-sm">Instructions for Gym</h2>
              <ol className="list-decimal ml-5 px-8 text-justify mt-2 text-sm">
                <li>
                  Check-In: Upon arrival, check in at the front desk if
                  required.
                </li>
                <li>
                  Attire and Hygiene: Wear appropriate workout attire and clean,
                  non-marking athletic shoes. Bring a towel to wipe down
                  equipment after use and maintain good personal hygiene.
                </li>
                <li>
                  Warm-up: Start your session with a 5-10 minute warm-up to
                  prepare your muscles and joints for exercise. This can include
                  light cardio such as walking, cycling, or dynamic stretching.
                </li>
                <li>
                  Equipment Familiarization: If you're new to the gym, take a
                  moment to familiarize yourself with the layout and usage of
                  different equipment. Ask gym staff for guidance if needed.
                </li>
                <li>
                  Cardio Equipment: Adjust cardio machines (treadmills,
                  ellipticals, bikes) to your fitness level. Wipe down the
                  machine before and after use.
                </li>
                <li>
                  Hydration: Stay hydrated by drinking water before, during, and
                  after your workout. Use the provided water fountain or bring
                  your own water bottle.
                </li>
                <li>
                  Rest Periods: Take adequate rest between sets to recover, but
                  avoid hogging equipment during peak hours. If the gym is busy,
                  limit your rest time accordingly.
                </li>
                <li>
                  Cool Down: After your workout, cool down with 5-10 minutes of
                  light stretching to help your muscles relax and prevent
                  soreness.
                </li>
                <li>
                  Personal Belongings: Keep your personal belongings secure in
                  designated areas or lockers provided by the gym. Avoid leaving
                  valuables unattended.
                </li>
                <li>
                  Enjoy and Stay Consistent: Most importantly, enjoy your
                  workout! Consistency is key to reaching your fitness goals.
                </li>
              </ol>
            </div>

            {/* Remark & Signature Section */}
            <div className="mt-4 font-montserrat flex flex-col md:flex-row justify-between gap-4 px-4 mb-4">
              <div>
                <p className="text-xl font-semibold">Remark</p>
                <p className="text-sm">{formData.remark}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xl font-semibold">Signature</p>
                <img
                  src={formData.signatureDetails}
                  alt="Signature"
                  className="w-20 h-10"
                />
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

export default GymBillTemplate;
