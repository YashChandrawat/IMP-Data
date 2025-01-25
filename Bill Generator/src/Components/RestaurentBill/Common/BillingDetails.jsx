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
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Order Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex gap-6">
          {/* Table No */}
          <InputField
            label={"Table Number"}
            type="number"
            name={"tableNo"}
            value={formData.tableNo}
            handleChange={handleChange}
            placeholder="19"
          />

          {/* Invoice Number */}
          <InputField
            label={"Invoice Number"}
            type="number"
            name={"invoiceNo"}
            value={formData.invoiceNo}
            handleChange={handleChange}
            placeholder="64tH54"
          />
        </div>

        <div className="px-6 pb-6 flex gap-6">
          {/* Bill Date */}
          <InputField
            label={"Bill Date"}
            type="date"
            name={"billDate"}
            value={formData.billDate}
            handleChange={handleChange}
          />

          {/* Billing Time */}
          <InputField
            label={"Bill Time"}
            type="time"
            name={"billTime"}
            value={formData.billTime}
            handleChange={handleChange}
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default BillingDetails;
