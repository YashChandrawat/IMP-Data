import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { INSURANCE, ROOM } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PatientDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Patient Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-6">
            {/* First row: Name and Issue fields */}
            <div className="flex flex-wrap gap-6">
              <div className="w-full sm:w-[calc(100%-0.5rem)]">
                <InputField
                  label={"Patient Name"}
                  type={"text"}
                  name={"patientName"}
                  value={formData.patientName}
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-[calc(100%-0.5rem)]">
                <InputField
                  label={"Patient Issue"}
                  type={"text"}
                  name={"patientIssue"}
                  value={formData.patientIssue}
                  handleChange={handleChange}
                />
              </div>
            </div>
            {/* Room and Insurance dropdowns */}
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="w-full sm:w-[calc(50%-1rem)]">
                <SelectField
                  label={"Room"}
                  selectName={"room"}
                  value={formData.room}
                  handleChange={handleChange}
                  arr={ROOM}
                />
              </div>
              <div className="w-full sm:w-[calc(50%-1rem)]">
                <SelectField
                  label={"Insurance"}
                  selectName={"insurance"}
                  value={formData.insurance}
                  handleChange={handleChange}
                  arr={INSURANCE}
                />
              </div>
            </div>
            {/* Second row: Guardian, Mobile No, Age fields */}
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="w-full sm:w-[calc(50%-1rem)]">
                <InputField
                  label={"Guardian Name"}
                  type={"text"}
                  name={"guardianName"}
                  value={formData.guardianName}
                  handleChange={handleChange}
                />
              </div>

              <div className="w-full sm:w-[calc(50%-1rem)]">
                <InputField
                  label={"Mobile No"}
                  type={"number"}
                  name={"mobileNo"}
                  value={formData.mobileNo}
                  handleChange={handleChange}
                />
              </div>
            </div>
            {/* Patient Address row */}
            <div className="mt-2">
              <InputField
                label={"Patient Address"}
                type={"text"}
                name={"patientAddress"}
                value={formData.patientAddress}
                handleChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.5rem)]">
              <InputField
                label={"Age"}
                type={"number"}
                name={"age"}
                value={formData.age}
                handleChange={handleChange}
              />
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default PatientDetails;
