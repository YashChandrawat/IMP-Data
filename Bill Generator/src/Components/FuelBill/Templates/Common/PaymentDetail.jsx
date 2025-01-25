import { useState } from "react";
import CollapseWrapper from "../../../Reuseable Components/CollapseWrapper";
import Heading from "../../../Reuseable Components/Heading";
import Wrapper from "../../../Reuseable Components/Wrapper";
import SelectField from "../../../Reuseable Components/SelectField";
import { CURRENCY_TYPE } from "../../../Utils/constants";
import InputField from "../../../Reuseable Components/InputField";

const PaymentDetail = ({ formData, setFormData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
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
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />

            <div className="flex gap-4">
              <InputField
                label={"Fuel Rate"}
                type="number"
                name={"fuelRate"}
                value={formData.fuelRate}
                handleChange={handleChange}
                placeholder="109"
              />
              <InputField
                label={"Total Amount"}
                type="number"
                name={"totalAmount"}
                value={formData.totalAmount}
                handleChange={handleChange}
                placeholder="1000"
              />
            </div>

            <div className="flex gap-4">
              <InputField
                label={"Fuel Bill Date"}
                type="date"
                name={"date"}
                value={formData.date}
                handleChange={handleChange}
              />
              <InputField
                label={"Fuel Bill Time"}
                type="time"
                name={"time"}
                value={formData.time}
                handleChange={handleChange}
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </>
  );
};

export default PaymentDetail;
