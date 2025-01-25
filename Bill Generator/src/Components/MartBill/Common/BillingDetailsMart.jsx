import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const BillingDetailsMart = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Billing Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
          <div className="px-4 sm:px-6 pb-6 flex flex-col gap-6">
            {/* First Row: Phone Number, Invoice No, and FSSAI No */}
            <div className="flex flex-col sm:flex-row gap-4">
              <InputField
                label={"Phone Number"}
                type="text"
                name={"phoneNo"}
                value={formData.phoneNo}
                handleChange={handleChange}
                placeholder="Phone Number"
                className="flex-1"
              />
              <InputField
                label={"Invoice No"}
                type="text"
                name={"invoiceNo"}
                value={formData.invoiceNo}
                handleChange={handleChange}
                placeholder="Invoice No"
                className="flex-1"
              />
              <InputField
                label={"FSSAI No"}
                type="text"
                name={"fssaiNo"}
                value={formData.fssaiNo}
                handleChange={handleChange}
                placeholder="FSSAI No"
                className="flex-1"
              />
            </div>

            {/* Second Row: Bill Date and Bill Time */}
            <div className="flex flex-col sm:flex-row gap-4">
              <InputField
                label={"Bill Date"}
                type="date"
                name={"billDate"}
                value={formData.billDate}
                handleChange={handleChange}
                placeholder="Bill Date"
                className="flex-1"
              />
              <InputField
                label={"Bill Time"}
                type="time"
                name={"billTime"}
                value={formData.billTime}
                handleChange={handleChange}
                placeholder="Bill Time"
                className="flex-1"
              />
            </div>

            {/* Third Row: Customer Name */}
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="Customer Name"
              className="w-full"
            />
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default BillingDetailsMart;
