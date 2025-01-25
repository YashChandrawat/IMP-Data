import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const ISPDetails = ({ formData, handleChange, template2 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Internet Provider Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex gap-6">
          {/* ISP Name */}
          <InputField
            label={"Internet Service Provider Name"}
            type="text"
            name={"ispName"}
            value={formData.ispName}
            handleChange={handleChange}
            placeholder="Airtel, Idea"
          />

          {/* ISP Address */}
          <InputField
            label={"Internet Service Provider Address"}
            type="text"
            name={"ispAddress"}
            value={formData.ispAddress}
            handleChange={handleChange}
            placeholder="Mumbai, Maharashtra"
          />
        </div>

        {template2 && (
          <div className="px-6 pb-6 flex gap-6">
            {/* Description */}
            <InputField
              label={"Description"}
              type="text"
              name={"description"}
              value={formData.description}
              handleChange={handleChange}
              placeholder=""
            />
          </div>
        )}

        <div className="px-6 pb-6 flex gap-6">
          {/* Bill Account Number */}
          <InputField
            label={"Bill Account Number"}
            type="text"
            name={"billAccNumber"}
            value={formData.billAccNumber}
            handleChange={handleChange}
            placeholder="57YHK897"
          />

          {/* Billing Date */}
          <InputField
            label={"Billing Date"}
            type="date"
            name={"billingDate"}
            value={formData.billingDate}
            handleChange={handleChange}
            placeholder=""
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default ISPDetails;
