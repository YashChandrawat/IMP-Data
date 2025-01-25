import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { MONTH_CYCLE } from "../../Utils/constants";
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
            {/* Responsive grid layout for input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label={"Invoice Number"}
                type="text"
                name={"invoiceNo"}
                value={formData.invoiceNo}
                handleChange={handleChange}
                placeholder="1249"
              />
              <InputField
                label={"User Number"}
                type="text"
                name={"userNo"}
                value={formData.userNo}
                handleChange={handleChange}
                placeholder="eZjo5"
              />
              <InputField
                label={"Invoice Date"}
                type="date"
                name={"invoiceDate"}
                value={formData.invoiceDate}
                handleChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label={"Billing From Date"}
                type="date"
                name={"billFromDate"}
                value={formData.billFromDate}
                handleChange={handleChange}
              />
              <SelectField
                label={"Billing Cycle"}
                selectName={"billingCycle"}
                value={formData.billingCycle}
                handleChange={handleChange}
                arr={MONTH_CYCLE}
              />
              <InputField
                label={"Bill To Date"}
                type="date"
                name={"billToDate"}
                value={formData.billToDate}
                handleChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label={"Gym Email"}
                type="text"
                name={"gymEmail"}
                value={formData.gymEmail}
                handleChange={handleChange}
                placeholder="abz@gmail.com"
              />
              <InputField
                label={"Gym No"}
                type="text"
                name={"gymNo"}
                value={formData.gymNo}
                handleChange={handleChange}
                placeholder="6574265410"
              />
              <InputField
                label={"Customer Care No"}
                type="text"
                name={"customerNo"}
                value={formData.customerNo}
                handleChange={handleChange}
                placeholder="6987616431"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default BillingDetails;
