import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const DriverDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Heading
        name={"Driver Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <InputField
            label={"Driver Name"}
            type="text"
            name={"driverName"}
            value={formData.driverName}
            handleChange={handleChange}
            placeholder="John"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default DriverDetails;
