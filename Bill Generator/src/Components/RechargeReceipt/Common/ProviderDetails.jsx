import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";

const ProviderDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Provider Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex flex-col gap-6">
          {/* Provider Name */}
          <InputField
            label={"Provider Name"}
            type="text"
            name={"providerName"}
            value={formData.providerName}
            handleChange={handleChange}
            placeholder="Airtel, Idea..."
          />

          {/* Provider Address */}
          <InputField
            label={"Provider Address"}
            type="text"
            name={"providerAddress"}
            value={formData.providerAddress}
            handleChange={handleChange}
            placeholder="Mumbai, Maharashtra"
          />

          {/* Billing Date */}
          <InputField
            label={"Billing Date"}
            type="date"
            name={"billingDate"}
            value={formData.billingDate}
            handleChange={handleChange}
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default ProviderDetails;
