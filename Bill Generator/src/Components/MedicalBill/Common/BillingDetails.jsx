import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const BillingDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Billing Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            {/* Responsive grid for first row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-6">
              <InputField
                label={"Contact"}
                type={"number"}
                name={"contactNo"}
                value={formData.contactNo}
                handleChange={handleChange}
              />
              <InputField
                label={"Invoice No"}
                type={"number"}
                name={"invoiceNo"}
                value={formData.invoiceNo}
                handleChange={handleChange}
              />
            </div>

            {/* Responsive grid for second row */}
            <div className="flex flex-col sm:flex-row gap-6 mt-2 sm:gap-6">
              <InputField
                label={"Bill Admit Date"}
                type={"date"}
                name={"billAdmitDate"}
                value={formData.billAdmitDate}
                handleChange={handleChange}
              />
              <InputField
                label={"Bill Discharge Date"}
                type={"date"}
                name={"billDischargeDate"}
                value={formData.billDischargeDate}
                handleChange={handleChange}
              />
            </div>
            <InputField
              label={"Bill Time"}
              type={"time"}
              name={"billTime"}
              value={formData.billTime}
              handleChange={handleChange}
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default BillingDetails;
