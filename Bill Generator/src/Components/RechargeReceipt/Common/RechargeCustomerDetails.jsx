import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const RechargeCustomerDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Customer Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex flex-col gap-6">
          {/* Customer  Name */}
          <InputField
            label={"Customer Name"}
            type={"text"}
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="John Doe"
          />

          {/* Customer Address */}
          <InputField
            label={"Customer Address"}
            type={"text"}
            name={"customerAddress"}
            value={formData.customerAddress}
            handleChange={handleChange}
            placeholder="181 Street, USA"
          />

          {/* Landmark */}
          <InputField
            label={"Landmark"}
            type={"text"}
            name={"landmark"}
            value={formData.landmark}
            handleChange={handleChange}
            placeholder="Near Central Hall..."
          />
        </div>
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-6">
          <InputField
            label={"Customer Id"}
            type={"text"}
            name={"customerId"}
            value={formData.customerId}
            handleChange={handleChange}
            placeholder="9876134"
          />
          <InputField
            label={"Invoice No"}
            type={"text"}
            name={"invoiceNo"}
            value={formData.invoiceNo}
            handleChange={handleChange}
            placeholder="3564fE5"
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default RechargeCustomerDetails;
