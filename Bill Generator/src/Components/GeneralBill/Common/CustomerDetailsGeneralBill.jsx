import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const CustomerDetailsGeneralBill = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Customer Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            {/* Customer Name and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label={"Customer Name"}
                type="text"
                name={"customerName"}
                value={formData.customerName}
                handleChange={handleChange}
                placeholder="Enter Customer Name"
              />
              <InputField
                label={"Customer Location"}
                type="text"
                name={"customerLocation"}
                value={formData.customerLocation}
                handleChange={handleChange}
                placeholder="Enter Customer Location"
              />
            </div>

            {/* Shipping Address */}
            <TextAreaField
              label={"Enter Shipping Address"}
              name={"customerShippingAddress"}
              value={formData.customerShippingAddress}
              handleChange={handleChange}
              placeholder="Enter Shipping Address"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default CustomerDetailsGeneralBill;
