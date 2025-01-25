import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";

const RechargePaymentDetails = ({ formData, handleChange }) => {
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
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Currency Type */}
            <div className="w-full sm:w-1/2">
              <SelectField
                label={"Currency"}
                selectName={"currencyType"}
                value={formData.currencyType}
                handleChange={handleChange}
                arr={CURRENCY_TYPE}
              />
            </div>
            {/* Payment Method */}
            <div className="w-full sm:w-1/2">
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Previous Balance */}
            <div className="w-full sm:w-1/2">
              <InputField
                label={"Previous Balance"}
                type="text"
                name={"previousBalance"}
                value={formData.previousBalance}
                handleChange={handleChange}
                placeholder="12.6"
              />
            </div>

            {/* Amount */}
            <div className="w-full sm:w-1/2">
              <InputField
                label={"Amount"}
                type="number"
                name={"amount"}
                value={formData.amount}
                handleChange={handleChange}
                placeholder="819"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Tax */}
            <div className="w-full sm:w-1/2">
              <InputField
                label={"Tax"}
                type="text"
                name={"tax"}
                value={formData.tax}
                handleChange={handleChange}
                placeholder="18"
              />
            </div>
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default RechargePaymentDetails;
