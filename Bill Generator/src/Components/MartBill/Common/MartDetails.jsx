import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const MartDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Mart Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
            {/* Responsive Input Field for Mart Name */}
            <InputField
              label={"Mart Name"}
              type="text"
              name={"martName"}
              value={formData.martName}
              handleChange={handleChange}
              placeholder="Mart Name"
              className="w-full"
            />
            {/* Responsive TextArea Field for Mart Address */}
            <TextAreaField
              label={"Mart Address"}
              name={"martAddress"}
              value={formData.martAddress}
              handleChange={handleChange}
              placeholder="Mart Address..."
              className="w-full"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default MartDetails;
