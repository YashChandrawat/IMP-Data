import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const GymPaymentDetails = ({ formData, handleChange }) => {
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
          <div className="px-6 pb-6 flex flex-col gap-4">
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
                className="sm:w-1/2 w-full"
              />
              <InputField
                label={"Tax %"}
                type="text"
                name={"tax"}
                value={formData.tax}
                handleChange={handleChange}
                placeholder="18%"
                className="sm:w-1/2 w-full"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default GymPaymentDetails;
