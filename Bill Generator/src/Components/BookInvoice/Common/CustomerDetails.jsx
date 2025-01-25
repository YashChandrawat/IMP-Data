import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import InputField from "../../Reuseable Components/InputField";

const CustomerDetails = ({ formData, handleChange }) => {
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
          {/* Name of Book */}
          <InputField
            label={"Customer Name"}
            type="text"
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="John Doe"
          />

          {/* Publisher */}
          <InputField
            label={"Purchased Date"}
            type="date"
            name={"date"}
            value={formData.date}
            handleChange={handleChange}
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default CustomerDetails;
