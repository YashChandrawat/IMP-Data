import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import { MONTH } from "../../Utils/constants";

const RentPaymentDetails = ({ formData, handleChange, template3 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Heading
        name={"Payment Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <InputField
            label={"From Date"}
            type="date"
            name={"fromDate"}
            value={formData.fromDate}
            handleChange={handleChange}
          />
          <InputField
            label={"Rent Amount"}
            type="number"
            name={"rentAmount"}
            value={formData.rentAmount}
            handleChange={handleChange}
          />

          <SelectField
            label={"Month"}
            selectName={"month"}
            value={formData.month}
            handleChange={handleChange}
            arr={MONTH}
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default RentPaymentDetails;
