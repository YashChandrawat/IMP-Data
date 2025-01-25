import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";

const BookPaymentDetails = ({ formData, handleChange }) => {
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
          <div className="flex gap-6">
            {/* Currency Type */}
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />

            {/* Payment Method */}
            <SelectField
              label={"Payment Method"}
              selectName={"paymentMethod"}
              value={formData.paymentMethod}
              handleChange={handleChange}
              arr={PAYMENT_METHOD}
            />
          </div>

          <div className="flex gap-6">
            {/* Quantity */}
            <InputField
              label={"Quantity"}
              type="number"
              name={"quantity"}
              value={formData.quantity}
              handleChange={handleChange}
              placeholder="1"
            />

            {/* Book Price */}
            <InputField
              label={"Book Price"}
              type="number"
              name={"bookPrice"}
              value={formData.bookPrice}
              handleChange={handleChange}
              placeholder="499"
            />
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default BookPaymentDetails;
