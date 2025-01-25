import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const CustomerDetails = ({ formData, handleChange, temp }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Customer Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex gap-6">
          {/* Customer Name */}
          <InputField
            label={"Customer Name"}
            type="text"
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="John"
          />

          {/* Customer Address */}
          {!temp && (
            <InputField
              label={"Customer Address"}
              type="text"
              name={"customerAddress"}
              value={formData.customerAddress}
              handleChange={handleChange}
              placeholder="Indore"
            />
          )}
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default CustomerDetails;
