import { useState } from "react";
import Heading from "../../../Reuseable Components/Heading";
import Wrapper from "../../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../../Reuseable Components/CollapseWrapper";

const DownloadFile = ({ formData, template2, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Wrapper>
        {/* Header */}
        <Heading
          name={"File Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium text-gray-600">
                Download file name
              </label>
              <input
                type="text"
                placeholder="Example: abc,xyz..."
                className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700 w-full"
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
                  className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-gray-700 w-full"
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </CollapseWrapper>
      </Wrapper>
    </>
  );
};

export default DownloadFile;
