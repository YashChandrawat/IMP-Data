import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const TripDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Wrapper>
        <Heading
          name={"Trip Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="Customer Name"
            />
            <InputField
              label={"Driver Name"}
              type="text"
              name={"driverName"}
              value={formData.driverName}
              handleChange={handleChange}
              placeholder="Driver Name"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default TripDetails;
