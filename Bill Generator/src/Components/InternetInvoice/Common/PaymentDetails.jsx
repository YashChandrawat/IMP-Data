import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";

const PaymentDetails = ({ formData, handleChange, temp }) => {
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
          <div className="flex flex-col gap-6">
            {/* Currency Type */}
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />

            {/* Payment Method */}
            <div className="flex gap-6">
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
              {temp && (
                <InputField
                  label={"Tax"}
                  type="text"
                  name={"tax"}
                  value={formData.tax}
                  handleChange={handleChange}
                  placeholder="18"
                />
              )}
              {!temp && (
                <InputField
                  label={"Total Bill Amount"}
                  type="text"
                  name={"planAmount"}
                  value={formData.planAmount}
                  handleChange={handleChange}
                  placeholder="1000"
                />
              )}
            </div>
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default PaymentDetails;
