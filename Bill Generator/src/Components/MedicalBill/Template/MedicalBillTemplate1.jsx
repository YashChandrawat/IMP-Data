import { useState } from "react";
import printBill from "../../Utils/printBill";
import PaymentDetailsMedical from "../Common/PaymentDetailsMedical";
import HospitalDetails from "../Common/HospitalDetails";
import BillingDetails from "../Common/BillingDetails";
import PatientDetails from "../Common/PatientDetails";
import LogoDetail from "../../FuelBill/Templates/Common/LogoDetail";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import Summary from "../Common/Summary";

const MedicalBillTemplate1 = () => {
  const [logoDetail, setLogoDetail] = useState("URL");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    currencyType: "",
    paymentMethod: "",
    tax: "",
    hospitalName: "",
    hospitalAddress: "",
    hospitalDetails: "",
    doctorName: "",
    designation: "",
    contactNo: "",
    invoiceNo: "",
    billTime: "",
    billAdmitDate: "",
    billDischargeDate: "",
    patientName: "",
    patientIssue: "",
    guardianName: "",
    mobileNo: "",
    age: "",
    patientAddress: "",
    room: "",
    insurance: "",
    summaryBills: [{ desc: "", details: "", price: "" }],
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

  const handleAddRow = () => {
    setFormData((prev) => ({
      ...prev,
      summaryBills: [
        ...prev.summaryBills,
        { desc: "", details: "", price: "", total: "" },
      ],
    }));
  };

  const handleRemoveRow = (index) => {
    setFormData((prev) => ({
      ...prev,
      summaryBills: prev.summaryBills.filter((_, i) => i !== index),
    }));
  };

  const handleSummaryChange = (index, field, value) => {
    const updatedBills = [...formData.summaryBills];
    updatedBills[index][field] = value;
    setFormData((prev) => ({ ...prev, summaryBills: updatedBills }));
  };

  // const handleAddRow = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     orderName: [
  //       ...prevData.orderName,
  //       { desc: "", itemPrice: "", quantity: "", total: 0 },
  //     ],
  //   }));
  // };

  // const handleRemoveRow = (index) => {
  //   setFormData((prevData) => {
  //     const updatedOrderName = prevData.orderName.filter((_, i) => i !== index);
  //     const updatedSubTotal = updatedOrderName.reduce(
  //       (sum, item) => sum + item.total,
  //       0
  //     );
  //     return {
  //       ...prevData,
  //       orderName: updatedOrderName,
  //       subTotal: updatedSubTotal,
  //     };
  //   });
  // };

  // const handleOrderChange = (e, index, field) => {
  //   const { value } = e.target;
  //   setFormData((prevData) => {
  //     const updatedOrderName = prevData.orderName.map((item, i) => {
  //       if (i === index) {
  //         const updatedItem = { ...item, [field]: value };

  //         // Calculate total for this item if quantity and itemPrice are provided
  //         if (field === "quantity" || field === "itemPrice") {
  //           const quantity =
  //             field === "quantity" ? +value : +updatedItem.quantity;
  //           const itemPrice =
  //             field === "itemPrice" ? +value : +updatedItem.itemPrice;
  //           updatedItem.total = quantity * itemPrice || 0;
  //         }

  //         return updatedItem;
  //       }
  //       return item;
  //     });

  //     const updatedSubTotal = updatedOrderName.reduce(
  //       (sum, item) => sum + item.total,
  //       0
  //     );

  //     return {
  //       ...prevData,
  //       orderName: updatedOrderName,
  //       subTotal: updatedSubTotal,
  //     };
  //   });
  // };

  // const calculateItemTotal = (item) => {
  //   var temp = item.quantity * item.itemPrice;
  //   return temp;
  // };

  const calculateSubtotal = () => {
    var total = 0;
    for (let index = 0; index < formData.summaryBills.length; index++) {
      total = total + Number(formData.summaryBills[index].price);
    }
    return total;
  };

  function calculateCGST(tax) {
    var cgst = tax / 2;
    var total = calculateSubtotal();
    var final = (cgst / 100) * total;
    return final.toFixed(2);
  }
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <HospitalDetails formData={formData} handleChange={handleChange} />
          <BillingDetails formData={formData} handleChange={handleChange} />
          <PatientDetails formData={formData} handleChange={handleChange} />
          <Summary
            formData={formData}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleSummaryChange={handleSummaryChange}
          />
          <PaymentDetailsMedical
            formData={formData}
            handleChange={handleChange}
          />
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
            onClick={() => printBill("medicalPrint1", "Nunito Sans", formData)}
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
        <div id="medicalPrint1">
          <div className="font-nunito max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
            {/* Header */}
            <div className="border-b border-gray-300 pb-6 flex justify-between">
              <div className="flex flex-col justify-end">
                <p className="text-2xl font-bold">{formData.hospitalName}</p>
                <p>Invoice No. {formData.invoiceNo}</p>
              </div>
              <div>
                <img
                  src={formData.logoUrl}
                  alt="Hospital-Logo"
                  className="w-20 h-20"
                />
              </div>
            </div>

            <div className="flex justify-between pb-8">
              {/* Left */}
              <div className="flex flex-col gap-2 mt-6">
                <div>
                  <p className="font-bold">Hospital details:</p>
                  <p>{formData.hospitalDetails}</p>
                  <p>Contact Details: {formData.contactNo}</p>
                </div>
                <div>
                  <p className="font-bold">Discharge Date:</p>
                  <p>{formData.billDischargeDate}</p>
                </div>
              </div>
              {/* Right */}
              <div className="mt-2">
                <p className="font-bold text-lg">{formData.hospitalName}</p>
                <p>{formData.hospitalAddress}</p>
              </div>
            </div>

            {/* Patient Information */}
            <div className="border-y border-gray-300 py-3">
              <p className="text-lg font-semibold">Patient Information</p>
            </div>

            {/* Content Patient Information */}
            <div className="flex justify-between mt-4">
              {/* Left */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">Patient Name:</p>
                  <p>{formData.patientName}</p>
                </div>
                <div>
                  <p className="font-bold">Gaurdian Name:</p>
                  <p>{formData.guardianName}</p>
                </div>
                <div>
                  <p className="font-bold">Insurance Avl:</p>
                  <p>{formData.insurance}</p>
                </div>
                <div>
                  <p className="font-bold">Consultant:</p>
                  <p>{formData.doctorName}</p>
                  <p>{formData.designation}</p>
                </div>
              </div>
              {/* Middle */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">Patient Issue:</p>
                  <p>{formData.patientIssue}</p>
                </div>
                <div>
                  <p className="font-bold">Admit Date:</p>
                  <p>{formData.billAdmitDate}</p>
                </div>
                <div>
                  <p className="font-bold">Age:</p>
                  <p>{formData.age}</p>
                </div>
                <div>
                  <p className="font-bold">Room Category:</p>
                  <p>{formData.room}</p>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">Address:</p>
                  <p>{formData.patientAddress}</p>
                </div>
                <div>
                  <p className="font-bold">Mobile:</p>
                  <p>{formData.mobileNo}</p>
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="w-full table-auto mt-6 border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 font-medium">
                    Details
                  </th>
                  <th className="px-4 py-2 text-right text-gray-600 font-medium">
                    Price
                  </th>
                  <th className="px-4 py-2 text-right text-gray-600 font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.summaryBills.map((bill, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-4 text-left">
                      <div>
                        <span className="font-semibold">{bill.desc} ||</span>
                        <br />
                        <span className="text-sm text-gray-500">
                          {bill.details}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right text-gray-700">
                      ₹ {bill.price}
                    </td>
                    <td className="px-4 py-2 text-right text-gray-700">
                      ₹ {bill.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Below table */}
            <div className="flex justify-between p-2 mt-4 mb-2">
              {/* left part */}
              <div>
                <p className="font-bold">Pay By</p>
                <p>{formData.paymentMethod}</p>
                <p>Amount: {calculateSubtotal()}</p>
              </div>
              {/* right part */}
              <div className="text-right">
                <p>Tax: {formData.tax}%</p>
                <p>
                  CGST: {formData.tax / 2}% - {formData.currencyType}{" "}
                  {calculateCGST(Number(formData.tax))}
                </p>
                <p>
                  SGST: {formData.tax / 2}% - {formData.currencyType}{" "}
                  {calculateCGST(Number(formData.tax))}
                </p>
                <p className="font-bold">
                  Taxable Amount: {formData.currencyType}{" "}
                  {calculateCGST(Number(formData.tax)) * 2}
                </p>
                <p className="font-bold">
                  Net Amount: {formData.currencyType}{" "}
                  {calculateSubtotal() -
                    calculateCGST(Number(formData.tax)) * 2}
                </p>
                <p className="font-bold">Total Amount: {calculateSubtotal()}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 text-sm border-t">
              <h3 className="text-base font-bold mb-2">Remark:</h3>
              <div className="flex justify-between">
                <p className="mb-4 w-[55%] text-lg ml-4">
                  IN CASE OF EMERGENCY CONSULT IMMEDIATELY IF YOU GET PAIN,
                  PAINFUL MOVEMENTS, REDNESS, PUS OR BLEEDING. FOLLOW UP AFTER 5
                  DAYS. MEET <b>{formData.doctorName}</b>,{" "}
                  {formData.hospitalDetails}
                </p>
                <div className="text-lg w-[20%]">
                  <p>{formData.doctorName}</p>
                  <p>{formData.hospitalDetails}</p>
                </div>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <p className="text-lg text-center">
                * This is a computer-generated invoice. Signature not required.
                Created at{" "}
                <b>
                  {formData.billDischargeDate} at {formData.billTime}
                </b>
              </p>
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

export default MedicalBillTemplate1;
