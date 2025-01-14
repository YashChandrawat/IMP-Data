import { useState } from "react";
import printBill from "../../Utils/printBill";
import DownloadFile from "../../FuelBill/Templates/Common/DownloadFile";
import BookDetails from "../Common/BookDetails";
import BookPaymentDetails from "./BookPaymentDetails";
import CustomerDetails from "../Common/CustomerDetails";

const BookTemplate1 = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    publisher: "",
    description: "",
    currencyType: "",
    paymentMethod: "",
    quantity: "",
    bookPrice: "",
    date: "",
    customerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function calculateTotal() {
    return formData.quantity * formData.bookPrice;
  }

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-[#fffff] p-6 rounded-[2rem]">
        <h2 className="text-2xl font-medium text-gray-800 mb-6 ">
          Please fill the details
        </h2>

        <form className="space-y-6">
          <BookDetails formData={formData} handleChange={handleChange} />

          <BookPaymentDetails formData={formData} handleChange={handleChange} />

          <CustomerDetails formData={formData} handleChange={handleChange} />

          <DownloadFile formData={formData} />
        </form>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 bg-[#4935D9] text-white font-semibold rounded-lg shadow-md hover:bg-[#5541e6] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() => printBill("bookTemplate1", "Nunito Sans", formData)}
          >
            Print PDF
          </button>

          <button
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            // onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Bill Preview */}
      <div className="lg:w-1/2w-full md:w-1/2 lg:w-1/2 p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Live Preview
        </h2>
        <div id="bookTemplate1">
          <div className="max-w-3xl mx-auto font-nunito p-10 bg-white border-2 border-gray-200 shadow-lg rounded-lg">
            {/* Header */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 border-b-2">
              Book Receipt
            </h1>
            {/* Bill To and Receipt Details */}
            <div className="flex justify-between mb-6">
              {/* Bill To Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Bill To,
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Customer Name:</strong> {formData.customerName}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Book Name:</strong> {formData.bookName}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Book Publisher:</strong> {formData.publisher}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Payment Method:</strong> {formData.paymentMethod}
                </p>
              </div>

              {/* Receipt Details */}
              <div>
                <p className="text-sm text-gray-600">
                  <strong>Receipt No:</strong> R06456
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Receipt Date:</strong> {formData.date}
                </p>
              </div>
            </div>

            {/* Receipt Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Receipt Summary
              </h3>
              <table className="w-full border-collapse border border-gray-300 text-sm text-gray-600">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Item
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Qty
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      Price
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      {formData.bookName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {formData.description}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {formData.quantity}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {formData.bookPrice}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {formData.currencyType} {calculateTotal()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Total Amount */}
            <div className="flex justify-end mt-4">
              <p className="text-lg font-semibold text-gray-700">
                <strong>Total:</strong> {formData.currencyType}{" "}
                {calculateTotal()}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 font-semibold">
                Thank You! Visit Again
              </p>
              <p className="text-gray-500 text-sm">
                A room without books is like a body without a soul
              </p>
              <p className="text-gray-500 text-sm">
                Take a good book to bed with you; books do not snore.
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

export default BookTemplate1;
