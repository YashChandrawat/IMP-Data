import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PaymentDetailsStationary = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Payment Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            {/* Currency Select Field */}
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />

            {/* Payment Method and Tax Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
              <InputField
                label={"Tax %"}
                type="text"
                name={"tax"}
                value={formData.tax}
                handleChange={handleChange}
                placeholder="Enter Tax"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsStationary;
