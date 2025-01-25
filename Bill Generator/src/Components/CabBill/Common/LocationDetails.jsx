import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const LocationDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Location Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
            {/* Responsive grid for TextAreaField */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextAreaField
                label={"Pick up point"}
                name={"pickupPoint"}
                value={formData.pickupPoint}
                handleChange={handleChange}
                placeholder="Pick up point..."
              />
              <TextAreaField
                label={"Drop point"}
                name={"dropPoint"}
                value={formData.dropPoint}
                handleChange={handleChange}
                placeholder="Drop point..."
              />
            </div>
            {/* Responsive grid for InputField */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"Pick up time"}
                type="time"
                name={"pickupTime"}
                value={formData.pickupTime}
                handleChange={handleChange}
                placeholder="Pick up time"
              />
              <InputField
                label={"Drop Point Time"}
                type="time"
                name={"dropPointTime"}
                value={formData.dropPointTime}
                handleChange={handleChange}
                placeholder="Drop Point Time"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default LocationDetails;
