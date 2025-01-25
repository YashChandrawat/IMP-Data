import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const EmployeeDetails = ({ formData, handleChange }) => {
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
            placeholder="Sam Manuel"
          />
          <InputField
            label={"Vehicle Number"}
            type="text"
            name={"vehicleNumber"}
            value={formData.vehicleNumber}
            handleChange={handleChange}
            placeholder="MP09AC8646"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default EmployeeDetails;
