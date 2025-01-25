import { useState } from "react";
import CollapseWrapper from "../../../Reuseable Components/CollapseWrapper";
import Heading from "../../../Reuseable Components/Heading";
import Wrapper from "../../../Reuseable Components/Wrapper";
import InputField from "../../../Reuseable Components/InputField";
import SelectField from "../../../Reuseable Components/SelectField";
import { PAYMENT_METHOD } from "../../../Utils/constants";

const FuelStationDetails = ({
  formData,
  handleChange,
  template2 = false,
  template4 = false,
}) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Wrapper>
        <Heading
          name={"Fuel Station Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-6 pb-8 space-y-4">
            {/* Fuel Station Name */}
            <InputField
              label={"Fuel Station Name"}
              type="text"
              name={"stationName"}
              value={formData.stationName}
              handleChange={handleChange}
              placeholder="Tamim Filling Station"
            />

            {/* Fuel Station Address */}
            <InputField
              label={"Fuel Station Address"}
              type="text"
              name={"stationAddress"}
              value={formData.stationAddress}
              handleChange={handleChange}
              placeholder="Indore, Madhya Pradesh"
            />
          </div>

          {template2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-8">
              {/* Invoice Number */}
              <InputField
                label={"Dealer Name"}
                type="text"
                name={"dealerName"}
                value={formData.dealerName}
                handleChange={handleChange}
                placeholder="John"
              />

              <InputField
                label={"Density"}
                type="text"
                name={"density"}
                value={formData.density}
                handleChange={handleChange}
                placeholder="ART567"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-8">
            {/* Invoice Number */}
            <InputField
              label={"Invoice Number"}
              type="text"
              name={"invoiceNumber"}
              value={formData.invoiceNumber}
              handleChange={handleChange}
              placeholder="687FE345"
            />

            {/* Payment Method */}
            {!template2 && (
              <SelectField
                label={"Payment Method"}
                selectName={"paymentMethod"}
                value={formData.paymentMethod}
                handleChange={handleChange}
                arr={PAYMENT_METHOD}
              />
            )}

            {template2 && (
              <InputField
                label={"Nozzle Number"}
                type="text"
                name={"nozzleNo"}
                value={formData.nozzleNo}
                handleChange={handleChange}
                placeholder="ART567"
              />
            )}
          </div>

          {template4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-8">
              {/* Invoice Number */}
              <InputField
                label={"Tel No."}
                type="number"
                name={"telNo"}
                value={formData.telNo}
                handleChange={handleChange}
                placeholder="0"
              />
              <InputField
                label={"FCC Id"}
                type="number"
                name={"fccId"}
                value={formData.fccId}
                handleChange={handleChange}
                placeholder="0"
              />
              <InputField
                label={"FIP No."}
                type="number"
                name={"fipNo"}
                value={formData.fipNo}
                handleChange={handleChange}
                placeholder="0"
              />

              <InputField
                label={"Nozzle Number"}
                type="text"
                name={"nozzleNo"}
                value={formData.nozzleNo}
                handleChange={handleChange}
                placeholder="ART567"
              />
            </div>
          )}
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default FuelStationDetails;
