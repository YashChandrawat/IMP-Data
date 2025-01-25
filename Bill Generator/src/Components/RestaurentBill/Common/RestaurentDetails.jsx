import { useState } from "react";
import Wrapper from "../../Reuseable Components/Wrapper";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const RestaurentDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Restaurant Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 flex flex-row gap-6 sm:w-full md:w-1/2 lg:w-full">
          {/* Restaurant  Name */}
          <InputField
            label={"Restaurant Name"}
            type="text"
            name={"restaurentName"}
            value={formData.restaurentName}
            handleChange={handleChange}
            placeholder="Guru Kripa"
          />

          {/* Restaurant Address */}
          <InputField
            label={"Restaurant Address"}
            type="text"
            name={"restaurentAddress"}
            value={formData.restaurentAddress}
            handleChange={handleChange}
            placeholder="Indore, Madhya Pradesh"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default RestaurentDetails;
