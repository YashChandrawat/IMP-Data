const DownloadFile = ({ formData, template2, handleChange }) => {
  return (
    <>
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
          {template2 && (
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium text-gray-600">
                Invoice Number
              </label>
              <input
                type="text"
                name="invoiceNo"
                value={formData.invoiceNo}
                className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DownloadFile;
