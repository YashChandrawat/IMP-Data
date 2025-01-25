import Wrapper from "../../Reuseable Components/Wrapper";
import Heading from "../../Reuseable Components/Heading";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";
import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PaymentDetailsMedical = ({ formData, handleChange }) => {
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
          <div className="px-6">
            <SelectField
              label={"Currency Type"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 px-6 pb-6 w-full">
            <SelectField
              label={"Payment Method"}
              selectName={"paymentMethod"}
              value={formData.paymentMethod}
              handleChange={handleChange}
              arr={PAYMENT_METHOD}
            />
            <InputField
              label={"Tax %"}
              type={"number"}
              value={formData.tax}
              name={"tax"}
              handleChange={handleChange}
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsMedical;
