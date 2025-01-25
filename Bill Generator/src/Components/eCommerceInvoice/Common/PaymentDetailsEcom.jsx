import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";

const PaymentDetailsEcom = ({ formData, handleChange }) => {
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
          {/* Currency Type */}
          <div className="flex gap-4">
            <div className="w-[50%]">
              <SelectField
                label={"Currency"}
                selectName={"currencyType"}
                value={formData.currencyType}
                handleChange={handleChange}
                arr={CURRENCY_TYPE}
              />
            </div>
            <div className="w-[50%]">
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="flex gap-4">
            <div className="w-[50%]">
              <InputField
                label={"GSTIN"}
                type="text"
                name={"gstIn"}
                value={formData.gstIn}
                handleChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="w-[50%]">
              <InputField
                label={"Date"}
                type="date"
                name={"date"}
                value={formData.date}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default PaymentDetailsEcom;
