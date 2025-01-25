import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PaymentDetailsHotel = ({ formData, handleChange }) => {
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

            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <SelectField
                  label={"Payment Method"}
                  selectName={"paymentMethod"}
                  value={formData.paymentMethod}
                  handleChange={handleChange}
                  arr={PAYMENT_METHOD}
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <InputField
                  label={"Tax %"}
                  type="text"
                  name={"tax"}
                  value={formData.tax}
                  handleChange={handleChange}
                  placeholder="18"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <InputField
                  label={"Advance Amount"}
                  type="text"
                  name={"advanceAmount"}
                  value={formData.advanceAmount}
                  handleChange={handleChange}
                  placeholder="10000"
                />
              </div>
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsHotel;
