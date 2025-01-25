import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, MONTH } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";

const PaymentDetails = ({ formData, handleChange }) => {
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
          <div className="flex gap-6">
            {/* Currency Type */}
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />
            {/* From Date */}
            <InputField
              label={"From Date"}
              type="date"
              name={"date"}
              value={formData.date}
              handleChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="flex gap-6">
            {/* Salary Amount */}
            <InputField
              label={"Salary Amount"}
              type="number"
              name={"salaryAmount"}
              value={formData.salaryAmount}
              handleChange={handleChange}
              placeholder="10000"
            />
            {/* Salary Month */}
            <SelectField
              label={"Salary Month"}
              selectName={"salaryMonth"}
              value={formData.salaryMonth}
              handleChange={handleChange}
              arr={MONTH}
            />
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default PaymentDetails;
