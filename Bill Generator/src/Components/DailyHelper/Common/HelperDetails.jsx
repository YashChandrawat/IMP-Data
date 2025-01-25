import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const HelperDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Heading
        name={"Helper Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <InputField
            label={"Helper Name"}
            type="text"
            name={"helperName"}
            value={formData.helperName}
            handleChange={handleChange}
            placeholder="Sam Manuel"
          />
          <InputField
            label={"Working As"}
            type="text"
            name={"workingAs"}
            value={formData.workingAs}
            handleChange={handleChange}
            placeholder="Driver, Helper..."
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default HelperDetails;
