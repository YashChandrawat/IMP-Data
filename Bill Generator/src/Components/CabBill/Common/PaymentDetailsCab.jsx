import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PaymentDetailsCab = ({ formData, handleChange, template2 }) => {
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
          <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
            {/* Responsive grid for Currency and Payment Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField
                label={"Currency"}
                selectName={"currencyType"}
                value={formData.currencyType}
                handleChange={handleChange}
                arr={CURRENCY_TYPE}
              />
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
            </div>

            {/* Responsive grid for Trip Amount, Tax, and Convenience Fee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label={"Trip Amount"}
                type="text"
                name={"tripAmount"}
                value={formData.tripAmount}
                handleChange={handleChange}
                placeholder="999"
              />
              <InputField
                label={"Tax %"}
                type="text"
                name={"tax"}
                value={formData.tax}
                handleChange={handleChange}
                placeholder="Tax %"
              />
              <InputField
                label={"Convenience Fee"}
                type="text"
                name={"convenienceFee"}
                value={formData.convenienceFee}
                handleChange={handleChange}
                placeholder="199..."
              />
            </div>

            {/* Responsive grid for Airport Pickup Charge and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"Airport Pick Up Charge"}
                type="text"
                name={"airportPickupCharge"}
                value={formData.airportPickupCharge}
                handleChange={handleChange}
                placeholder="0"
              />
              <InputField
                label={"Date"}
                type="date"
                name={"date"}
                value={formData.date}
                handleChange={handleChange}
              />
            </div>

            {/* Conditional TextArea for Cab Service Address */}
            {template2 && (
              <TextAreaField
                label={"Cab Service Address"}
                name={"cabServiceAddress"}
                value={formData.cabServiceAddress}
                handleChange={handleChange}
                placeholder="Cab Service Address..."
                className="w-full"
              />
            )}
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsCab;
