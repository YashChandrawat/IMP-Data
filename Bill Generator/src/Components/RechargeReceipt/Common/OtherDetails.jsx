import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import { MONTH_CYCLE, PAYMENTIN, SERVICE } from "../../Utils/constants";

const OtherDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Other Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex flex-col gap-6">
          {/* Upper Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Bill From Date */}
            <InputField
              label={"Bill From Date"}
              type="date"
              name={"fromDate"}
              value={formData.fromDate}
              handleChange={handleChange}
            />
            <InputField
              label={"Bill to Date"}
              type="date"
              name={"toDate"}
              value={formData.toDate}
              handleChange={handleChange}
            />
          </div>

          {/* Middle Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Billing Time */}
            <InputField
              label={"Time"}
              type="time"
              name={"time"}
              value={formData.time}
              handleChange={handleChange}
            />
            {/* Service */}
            <SelectField
              label={"Service"}
              selectName={"service"}
              value={formData.service}
              handleChange={handleChange}
              arr={SERVICE}
            />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Payment In */}
            <SelectField
              label={"Payment In"}
              selectName={"paymentIn"}
              value={formData.paymentIn}
              handleChange={handleChange}
              arr={PAYMENTIN}
            />

            {/* Billing Cycle */}
            <SelectField
              label={"Billing Cycle"}
              selectName={"billingCycle"}
              value={formData.billingCycle}
              handleChange={handleChange}
              arr={MONTH_CYCLE}
            />
          </div>

          {/* Mobile No */}
          <InputField
            label={"Mobile No"}
            type="number"
            name={"mobileNumber"}
            value={formData.mobileNumber}
            handleChange={handleChange}
            placeholder="6547891230"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default OtherDetails;
