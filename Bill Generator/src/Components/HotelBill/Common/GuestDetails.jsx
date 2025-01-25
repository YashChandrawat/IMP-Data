import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { GENDER } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const GuestDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Wrapper>
        <Heading
          name={"Guest Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField
                label={"Guest Name"}
                type="text"
                name={"guestName"}
                value={formData.guestName}
                handleChange={handleChange}
                placeholder="Enter Guest Name"
              />
              <SelectField
                label={"Gender"}
                selectName={"gender"}
                value={formData.gender}
                handleChange={handleChange}
                arr={GENDER}
              />
              <InputField
                label={"Age"}
                type="text"
                name={"age"}
                value={formData.age}
                handleChange={handleChange}
                placeholder="Age"
              />
            </div>
            <TextAreaField
              label={"Guest Address"}
              name={"guestAddress"}
              value={formData.guestAddress}
              handleChange={handleChange}
              placeholder="Guest Address"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default GuestDetails;
