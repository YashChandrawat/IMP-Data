import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { TRAVEL_TYPE } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const TravelDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Travel Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            {/* Responsive grid layout for Travel Type and Travel Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField
                label={"Travel Type"}
                selectName={"travelType"}
                value={formData.travelType}
                handleChange={handleChange}
                arr={TRAVEL_TYPE}
              />
              <InputField
                label={"Travel Name"}
                type="text"
                name={"travelName"}
                value={formData.travelName}
                handleChange={handleChange}
                placeholder="Enter Travel Name"
              />
            </div>
            {/* Responsive grid layout for Travel Address and Ticket Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextAreaField
                label={"Travel Address"}
                name={"travelAddress"}
                value={formData.travelAddress}
                handleChange={handleChange}
                placeholder="Address..."
              />
              <InputField
                label={"Ticket Number"}
                type="text"
                name={"ticketNo"}
                value={formData.ticketNo}
                handleChange={handleChange}
                placeholder="Ticket Number"
              />
            </div>
            {/* Responsive grid layout for Boarding Point No and Customer Care No */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"Boarding Point No"}
                type="text"
                name={"boardingPointNo"}
                value={formData.boardingPointNo}
                handleChange={handleChange}
                placeholder="Boarding Point No..."
              />
              <InputField
                label={"Customer Care No"}
                type="text"
                name={"customerCareNo"}
                value={formData.customerCareNo}
                handleChange={handleChange}
                placeholder="Customer Care No..."
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default TravelDetails;
