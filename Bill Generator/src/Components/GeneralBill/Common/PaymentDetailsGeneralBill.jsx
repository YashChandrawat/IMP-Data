import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PaymentDetailsGeneralBill = ({ formData, handleChange }) => {
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
        <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
          {/* Currency Field */}
          <div>
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />
          </div>

          {/* Payment Method and Invoice No Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              label={"Payment Method"}
              selectName={"paymentMethod"}
              value={formData.paymentMethod}
              handleChange={handleChange}
              arr={PAYMENT_METHOD}
            />
            <InputField
              label={"Invoice No"}
              type={"number"}
              name={"invoiceNo"}
              value={formData.invoiceNo}
              handleChange={handleChange}
            />
          </div>

          {/* Date and Order Number Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label={"Date"}
              type={"date"}
              name={"date"}
              value={formData.date}
              handleChange={handleChange}
            />
            <InputField
              label={"Order Number"}
              type={"number"}
              name={"orderNo"}
              value={formData.orderNo}
              handleChange={handleChange}
            />
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default PaymentDetailsGeneralBill;
