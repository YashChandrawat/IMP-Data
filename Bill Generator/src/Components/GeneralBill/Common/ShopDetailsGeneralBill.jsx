import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const ShopDetailsGeneralBill = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <Heading
        name={"Shop Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-4 sm:px-6 pb-6">
          <div className="flex flex-col gap-6">
            {/* Shop Name Field */}
            <InputField
              label={"Shop Name"}
              type="text"
              name={"shopName"}
              value={formData.shopName}
              handleChange={handleChange}
              placeholder="Enter Shop Name"
            />

            {/* Sold By Details Field */}
            <TextAreaField
              label={"Sold By Details"}
              name={"soldByDetails"}
              value={formData.soldByDetails}
              handleChange={handleChange}
              placeholder="Shop Address"
              rows={2}
            />
          </div>
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default ShopDetailsGeneralBill;
