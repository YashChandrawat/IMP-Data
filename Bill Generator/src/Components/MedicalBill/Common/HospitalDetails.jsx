import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const HospitalDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Hospital Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6">
            <div className="flex flex-col gap-2">
              <InputField
                label={"Hospital Name"}
                type={"text"}
                name={"hospitalName"}
                value={formData.hospitalName}
                handleChange={handleChange}
              />
              <InputField
                label={"Hospital Address"}
                type={"text"}
                name={"hospitalAddress"}
                value={formData.hospitalAddress}
                handleChange={handleChange}
              />
              <InputField
                label={"Hospital Details"}
                type={"text"}
                name={"hospitalDetails"}
                value={formData.hospitalDetails}
                handleChange={handleChange}
              />
            </div>
            {/* Responsive grid for doctor details */}
            <div className="flex flex-wrap gap-6 mt-2">
              <div className="w-full md:w-[calc(50%-0.75rem)]">
                <InputField
                  label={"Doctor Name"}
                  type={"text"}
                  name={"doctorName"}
                  value={formData.doctorName}
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[calc(50%-0.75rem)]">
                <InputField
                  label={"Designation"}
                  type={"text"}
                  name={"designation"}
                  value={formData.designation}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default HospitalDetails;
