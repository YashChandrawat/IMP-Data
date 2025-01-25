import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const StationaryDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Stationary Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            {/* Stationary Name */}
            <InputField
              label={"Stationary Name"}
              type="text"
              name={"stationaryName"}
              value={formData.stationaryName}
              handleChange={handleChange}
              placeholder="Enter Stationary Name"
            />

            {/* TextArea Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TextAreaField
                label={"Enter Stationary Address"}
                name={"stationaryAddress"}
                value={formData.stationaryAddress}
                handleChange={handleChange}
                placeholder="Enter Stationary Address"
              />
              <TextAreaField
                label={"Remark"}
                name={"remark"}
                value={formData.remark}
                handleChange={handleChange}
                placeholder="Remark"
              />
            </div>

            {/* Invoice No and Bill Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label={"Invoice No"}
                type="number"
                name={"invoiceNo"}
                value={formData.invoiceNo}
                handleChange={handleChange}
                placeholder="Enter Invoice No"
              />
              <InputField
                label={"Bill Date"}
                type="date"
                name={"billDate"}
                value={formData.billDate}
                handleChange={handleChange}
                placeholder="Enter Bill Date"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default StationaryDetails;
