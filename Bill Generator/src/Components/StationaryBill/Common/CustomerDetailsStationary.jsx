import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const CustomerDetailsStationary = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Customer Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            {/* Customer Name Input */}
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="Enter Customer Name"
            />

            {/* Customer Address TextArea */}
            <TextAreaField
              label={"Enter Customer Address"}
              name={"customerAddress"}
              value={formData.customerAddress}
              handleChange={handleChange}
              placeholder="Enter Customer Address"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default CustomerDetailsStationary;
