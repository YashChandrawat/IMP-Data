import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const CustomerDetailsEcom = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Customer Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex flex-wrap gap-6">
          <div className="flex flex-row gap-4 w-full sm:w-full">
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="John Doe"
            />
            <InputField
              label={"Mobile Number"}
              type="text"
              name={"mobileNo"}
              value={formData.mobileNo}
              handleChange={handleChange}
              placeholder="6548971230"
            />
          </div>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-6">
          {/* Customer Shipping Address */}
          <div className="flex flex-col gap-2 w-full">
            <InputField
              label={"Customer Shipping Address"}
              type="text"
              name={"shippingAddress"}
              value={formData.shippingAddress}
              handleChange={handleChange}
              placeholder="Street 101..."
            />
          </div>
          {/* Sold By Details */}
          <div className="flex flex-col gap-2 w-full">
            <InputField
              label={"Sold By Details"}
              type="text"
              name={"soldByDetails"}
              value={formData.soldByDetails}
              handleChange={handleChange}
              placeholder="Appario Sales"
            />
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default CustomerDetailsEcom;
