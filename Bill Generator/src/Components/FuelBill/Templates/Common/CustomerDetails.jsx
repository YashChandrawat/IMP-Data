import { useState } from "react";
import CollapseWrapper from "../../../Reuseable Components/CollapseWrapper";
import Heading from "../../../Reuseable Components/Heading";
import Wrapper from "../../../Reuseable Components/Wrapper";
import InputField from "../../../Reuseable Components/InputField";
import SelectField from "../../../Reuseable Components/SelectField";
import { VEHICLE_TYPE } from "../../../Utils/constants";

const CustomerDetails = ({ formData, handleChange, template2 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Wrapper>
        <Heading
          name={"Customer Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-8 flex flex-col gap-4">
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="John Doe"
            />

            <div className="flex justify-between gap-6">
              {!template2 && (
                <InputField
                  label={"Vehicle Number"}
                  type="text"
                  name={"vehicleNumber"}
                  value={formData.vehicleNumber}
                  handleChange={handleChange}
                  placeholder="MP09AR6978"
                />
              )}
              <SelectField
                label={"Vehicle Type"}
                selectName={"vehicleType"}
                value={formData.vehicleType}
                handleChange={handleChange}
                arr={VEHICLE_TYPE}
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default CustomerDetails;
