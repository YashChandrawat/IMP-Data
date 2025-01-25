import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { UNIT } from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const VehicleDetails = ({ formData, handleChange, template2 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Vehicle Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
            {/* Responsive grid for the first row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label={"Vehicle Number"}
                type="text"
                name={"vehicleNo"}
                value={formData.vehicleNo}
                handleChange={handleChange}
                placeholder="Vehicle Number"
              />
              <InputField
                label={"Vehicle Modal"}
                type="text"
                name={"vehicleModal"}
                value={formData.vehicleModal}
                handleChange={handleChange}
                placeholder="HatchBack, Sedan..."
              />
              <InputField
                label={"Total Distance"}
                type="text"
                name={"totalDistance"}
                value={formData.totalDistance}
                handleChange={handleChange}
                placeholder=""
              />
            </div>

            {/* Responsive grid for the second row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <SelectField
                  label={"Unit"}
                  selectName={"unit"}
                  value={formData.unit}
                  handleChange={handleChange}
                  arr={UNIT}
                />
              </div>
              {template2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label={"Invoice No"}
                    type="text"
                    name={"invoiceNo"}
                    value={formData.invoiceNo}
                    handleChange={handleChange}
                    placeholder="557642"
                  />
                  <InputField
                    label={"Mobile"}
                    type="text"
                    name={"mobileNo"}
                    value={formData.mobileNo}
                    handleChange={handleChange}
                    placeholder="Mobile"
                  />
                </div>
              )}
            </div>
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default VehicleDetails;
