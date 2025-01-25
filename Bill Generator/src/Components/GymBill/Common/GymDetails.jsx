import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const GymDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Gym Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-6">
            <InputField
              label={"Gym Name"}
              type="text"
              name={"gymName"}
              value={formData.gymName}
              handleChange={handleChange}
              placeholder="Gym Name"
            />
            {/* Responsive grid for TextAreaField */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextAreaField
                label={"Gym Address"}
                name={"gymAddress"}
                value={formData.gymAddress}
                handleChange={handleChange}
                placeholder="Gym Address..."
              />
              <TextAreaField
                label={"Remark"}
                name={"remark"}
                value={formData.remark}
                handleChange={handleChange}
                placeholder="Remark..."
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default GymDetails;
