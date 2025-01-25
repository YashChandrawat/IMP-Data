import { useState } from "react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import CollapseWrapper from "./CollapseWrapper";

const UploadImage = ({
  formData,
  setFormData,
  imageDetail,
  setImageDetail,
  selectedFile,
  setSelectedFile,
  sectionName,
  nameOfVar,
}) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    console.log("File URL: ", URL.createObjectURL(file));
    setFormData((prevData) => ({
      ...prevData,
      [nameOfVar]: URL.createObjectURL(file), // Use nameOfVar as the key
    }));
    setSelectedFile(file);
  };

  const renderTemplate = () => {
    switch (imageDetail) {
      case "URL":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Please enter a valid URL"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  [nameOfVar]: e.target.value, // Use nameOfVar as the key
                }))
              }
            />
            {formData[nameOfVar] && (
              <div className="mt-4 text-sm text-gray-600">
                <img
                  src={formData[nameOfVar]} // Use nameOfVar as the key
                  alt="Logo from URL"
                  className="w-32 h-32 object-cover mt-2 rounded-lg border mx-auto"
                />
              </div>
            )}
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
                  className="w-32 h-32 object-cover mt-2 rounded-lg border mx-auto"
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
        return null;
    }
  };

  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={sectionName}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        {/* Radio Options */}
        <div className="px-6 pb-4 flex flex-col sm:flex-row sm:gap-6 gap-4">
          {["URL", "Gallery"].map((logo, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <input
                type="radio"
                name="imageDetail"
                value={logo}
                checked={imageDetail === logo}
                onChange={(e) => setImageDetail(e.target.value)}
                className="h-4 w-4 accent-blue-500"
              />
              <span>{logo}</span>
            </label>
          ))}
        </div>

        {/* Rendered Content */}
        <div className="template-preview px-6 pb-6">{renderTemplate()}</div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default UploadImage;
