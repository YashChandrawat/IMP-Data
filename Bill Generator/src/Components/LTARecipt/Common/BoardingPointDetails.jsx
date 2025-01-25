import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const BoardingPointDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Boarding Point Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            {/* Responsive layout for the TextAreaFields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextAreaField
                label={"Location"}
                name={"location"}
                value={formData.location}
                handleChange={handleChange}
                placeholder="Location Name"
              />
              <TextAreaField
                label={"Landmark"}
                name={"landmark"}
                value={formData.landmark}
                handleChange={handleChange}
                placeholder="Location..."
              />
            </div>
            {/* Responsive layout for the InputFields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"Reporting Date"}
                type="date"
                name={"reportingDate"}
                value={formData.reportingDate}
                handleChange={handleChange}
                placeholder="Reporting Date"
              />
              <InputField
                label={"Departure Time"}
                type="time"
                name={"departureTime"}
                value={formData.departureTime}
                handleChange={handleChange}
                placeholder="Departure Time"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default BoardingPointDetails;
