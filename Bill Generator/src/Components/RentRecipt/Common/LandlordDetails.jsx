import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";
import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import { RECEIVED_NAME } from "../../Utils/constants";

const LandlordDetails = ({ formData, handleChange, template2 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Heading
        name={"Landlord Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-8 flex flex-col gap-4">
          <InputField
            label={"Landlord Name"}
            type="text"
            name={"landlordName"}
            value={formData.landlordName}
            handleChange={handleChange}
            placeholder="Paul Rollins"
          />

          {template2 && (
            <>
              <InputField
                label={"Received Name"}
                type="text"
                name={"receivedName"}
                value={formData.receivedName}
                handleChange={handleChange}
                placeholder=""
              />
              <SelectField
                label={"Received By"}
                selectName={"receivedBy"}
                value={formData.receivedBy}
                handleChange={handleChange}
                arr={RECEIVED_NAME}
              />
            </>
          )}
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default LandlordDetails;
