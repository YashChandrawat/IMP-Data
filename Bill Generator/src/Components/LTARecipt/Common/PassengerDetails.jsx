import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PassengerDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Passenger Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            {/* Input for Name, Age, Gender */}
            <InputField
              label={"Passenger Name, Age, Gender"}
              type="text"
              name={"nameAgeGender"}
              value={formData.nameAgeGender}
              handleChange={handleChange}
              placeholder="Sachin,29,Male..."
            />

            {/* Responsive grid for No of Person and Seat No */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label={"No of Person"}
                type="text"
                name={"noOfPerson"}
                value={formData.noOfPerson}
                handleChange={handleChange}
                placeholder="No. Of Person"
              />
              <InputField
                label={"Seat No"}
                type="text"
                name={"seatNo"}
                value={formData.seatNo}
                handleChange={handleChange}
                placeholder="Ex. 19"
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PassengerDetails;
