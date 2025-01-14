const BookDetails = ({ formData, handleChange, template2 }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
      {/* Header */}
      <h3 className="text-lg px-6 font-semibold border-b-2 py-4 mb-4 text-gray-800 border-gray-200">
        Book Details
      </h3>

      {template2 && (
        <div>
          <div className="px-6 pb-6 flex gap-6">
            {/* Name of Book */}
            <div className="flex flex-col gap-2 w-[50%]">
              <label className="text-md font-medium text-gray-600">
                Book Author
              </label>
              <input
                type="text"
                name="bookAuthor"
                value={formData.bookAuthor}
                className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
                onChange={handleChange}
              />
            </div>
            {/* Publisher */}
            <div className="flex flex-col gap-2 w-[50%]">
              <label className="text-md font-medium text-gray-600">
                Book Store Name
              </label>
              <input
                type="text"
                name="bookStoreName"
                value={formData.bookStoreName}
                className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="px-6 pb-6">
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium text-gray-600">
                Store Address
              </label>
              <textarea
                name="storeAddress"
                value={formData.storeAddress}
                rows="4"
                className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
                onChange={handleChange}
                placeholder="Enter a brief description about the book..."
              ></textarea>
            </div>
          </div>
        </div>
      )}

      <div className="px-6 pb-6 flex gap-6">
        {/* Name of Book */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">
            Name of Book
          </label>
          <input
            type="text"
            name="bookName"
            value={formData.bookName}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
        {/* Publisher */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label className="text-md font-medium text-gray-600">Publisher</label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pb-6">
        <div className="flex flex-col gap-2">
          <label className="text-md font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            rows="4"
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700"
            onChange={handleChange}
            placeholder="Enter a brief description about the book..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
