import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const RentEmpDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Heading
        name={"Employee Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <InputField
            label={"Employee Name"}
            type="text"
            name={"empName"}
            value={formData.empName}
            handleChange={handleChange}
            placeholder="John Doe"
          />
          <InputField
            label={"Rent House Address"}
            type="text"
            name={"rentHouseAddress"}
            value={formData.rentHouseAddress}
            handleChange={handleChange}
            placeholder="181 Street, USA"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default RentEmpDetails;
