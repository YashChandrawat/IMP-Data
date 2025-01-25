import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const DropPointDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Drop Point Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            {/* Responsive layout for the InputFields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"Dropping Point Date"}
                type="date"
                name={"droppingPointDate"}
                value={formData.droppingPointDate}
                handleChange={handleChange}
                placeholder="Dropping Point Date"
              />
              <InputField
                label={"Dropping Point Time"}
                type="time"
                name={"droppingPointTime"}
                value={formData.droppingPointTime}
                handleChange={handleChange}
                placeholder="Dropping Point Time"
              />
            </div>
            {/* TextArea for Dropping Address */}
            <TextAreaField
              label={"Dropping Address"}
              name={"droppingAddress"}
              value={formData.droppingAddress}
              handleChange={handleChange}
              placeholder="Dropping Address..."
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default DropPointDetails;
